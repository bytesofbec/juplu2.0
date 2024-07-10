from cms.models.pluginmodel import CMSPlugin
from tinymce.models import HTMLField
from django.db import models

class Product(CMSPlugin):
    title = models.CharField(max_length=50, default='Title')
    body = models.CharField(max_length=1000, default='Product')
    image = models.ImageField(upload_to='img', height_field=None, width_field=None, max_length=100, editable=True, default='')
    description = HTMLField()