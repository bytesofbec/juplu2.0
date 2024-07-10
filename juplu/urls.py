from cms.sitemaps import CMSSitemap
from django.conf import settings
from django.conf.urls.i18n import i18n_patterns
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import include, path
from . import views

admin.autodiscover()

app_name = "juplu"

urlpatterns = [
    path("sitemap.xml", sitemap, {"sitemaps": {"cmspages": CMSSitemap}}),
#    path('', views.index, name='index'),
#    path('about/', views.about, name='about'),
#    path('products/', views.products, name='products'),
#    path('contact/', views.contact, name='contact')
    path("contact", views.contact, name="contact"),
    path('tinymce/', include('tinymce.urls')),
]


urlpatterns += i18n_patterns(path("admin/", admin.site.urls), path("", include("cms.urls")))

# This is only needed when using runserver.
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
