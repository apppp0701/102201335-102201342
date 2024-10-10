from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.core.signing import TimestampSigner
import json

from django.views.decorators.csrf import csrf_exempt

from register.models import Register


@csrf_exempt
def api_login(request):
    data = json.loads(request.body)
    user = authenticate(username=data['username'], password=data['password'])
    if user is not None:
        ret_data = {"username": user.username}
        token = TimestampSigner(sep='.').sign_object(ret_data)
        ret_data['token'] = token
        ret = {"code":1, "msg":ret_data}
    else:
        ret = {"code":0, "msg":"用户名或密码错误"}
    return JsonResponse(ret)

