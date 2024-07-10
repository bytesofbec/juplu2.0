from cms.plugin_base import CMSPluginBase
from cms.plugin_pool import plugin_pool
from cms.models.pluginmodel import CMSPlugin
from django.utils.translation import gettext_lazy as _
from .models import Product

@plugin_pool.register_plugin
class ProductPlugin(CMSPluginBase):
    model = Product
    render_template = "product.html"
    cache = False