from __future__ import unicode_literals
from django.views.generic import TemplateView


class dashboardView(TemplateView):
    template_name = "index.html"

