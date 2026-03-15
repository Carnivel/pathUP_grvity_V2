from django.apps import AppConfig


class CollegesConfig(AppConfig):
    name = 'colleges'

    def ready(self):
        import colleges.signals
