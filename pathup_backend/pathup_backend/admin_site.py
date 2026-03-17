from django.contrib.admin import AdminSite


# ─── Sidebar Group Definitions ────────────────────────────────────────────────
# Each key becomes a sidebar section header in Jazzmin.
# Values are lists of model class names (case-sensitive) from the 'colleges' app.

SIDEBAR_GROUPS = [
    {
        "label": "🏛️ College Core Data",
        "models": ["College", "University", "Accreditation"],
    },
    {
        "label": "📚 Academic Structure",
        "models": ["Course", "Degree", "Stream", "Specialization", "CollegeCourse"],
    },
    {
        "label": "🎯 Admissions & Career",
        "models": ["EntranceExam", "Career", "Job", "Placement"],
    },
    {
        "label": "🏢 Campus & Facilities",
        "models": ["Facility", "Skill"],
    },
    {
        "label": "📸 Media & Reviews",
        "models": ["CollegeImage", "StudentReview"],
    },
]

# Map model class name → group label for quick lookup
_MODEL_TO_GROUP = {}
for group in SIDEBAR_GROUPS:
    for model_name in group["models"]:
        _MODEL_TO_GROUP[model_name] = group["label"]


class PathUpAdminSite(AdminSite):
    site_header = "PathUp College Manager"
    site_title = "PathUp Admin"
    index_title = "PathUp Data Management System"

    def get_app_list(self, request, app_label=None):
        """Reorganize the flat 'colleges' app into logical sidebar groups."""
        original_app_list = super().get_app_list(request, app_label)

        # Collect all college models from the original list
        college_models = []
        other_apps = []

        for app in original_app_list:
            if app["app_label"] == "colleges":
                college_models = app.get("models", [])
            else:
                other_apps.append(app)

        if not college_models:
            return other_apps

        # Build grouped apps
        grouped_apps = []
        for group in SIDEBAR_GROUPS:
            group_models = []
            for model_entry in college_models:
                model_class_name = model_entry.get("object_name", "")
                if model_class_name in group["models"]:
                    group_models.append(model_entry)

            if group_models:
                # Sort models within each group to match the order defined above
                order = {name: idx for idx, name in enumerate(group["models"])}
                group_models.sort(
                    key=lambda m: order.get(m.get("object_name", ""), 999)
                )

                grouped_apps.append({
                    "name": group["label"],
                    "app_label": "colleges",
                    "app_url": "/admin/colleges/",
                    "has_module_perms": True,
                    "models": group_models,
                })

        # Put other apps (like auth) first, then our grouped colleges
        return other_apps + grouped_apps
