from django.shortcuts import render

from grpc_django.views import RetrieveGRPCView, ServerStreamGRPCView
from grpc_codegen.user_pb2 import User as UserProto
from django.contrib.auth.models import User
from .serializers import UserSerializer

class GetUser(RetrieveGRPCView):
    """
    RPC to view a single user by ID
    """
    queryset = User.objects.all()
    response_proto = UserProto
    serializer_class = UserSerializer


class ListUsers(ServerStreamGRPCView):
    """
    RPC to list all users
    """
    queryset = User.objects.all()
    response_proto = UserProto
    serializer_class = UserSerializer