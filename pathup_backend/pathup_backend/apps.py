from django.contrib.admin.apps import AdminConfig


class PathUpAdminConfig(AdminConfig):
    """Custom admin config that uses our PathUpAdminSite with grouped sidebar."""
    default_site = "pathup_backend.admin_site.PathUpAdminSite"
