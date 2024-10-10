# routing.py
from channels.routing import ProtocolTypeRouter, URLRouter
from django.contrib.admin.templatetags.admin_list import register
from django.urls import path
from register import people

websocket_urlpatterns = [
    path('chat/', register.ChatConsumer.as_asgi()),
]

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': URLRouter(websocket_urlpatterns),
})
