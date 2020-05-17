import grpc
import sys

from grpc_codegen.user_pb2 import GetPayload, Empty
from grpc_codegen.user_pb2_grpc import UserServiceStub


def run():
    # Create a connection with the server
    channel = grpc.insecure_channel("localhost:55000")
    try:
        grpc.channel_ready_future(channel).result(timeout=10)
    except grpc.FutureTimeoutError:
        sys.exit('Error connecting to server')
    else:
        stub = UserServiceStub(channel)

    # Test the GetUser RPC
    print("Calling GetUser with id = 1")
    response = stub.GetUser(GetPayload(id=1))
    if response:
        print("Received response for GetUser: {}".format(response))

    # Test the ListUsers RPC
    print("Calling ListUsers")
    response = stub.ListUsers(Empty())
    for _ in response:
        print(_)

    # Close the connection
    channel.close()


if __name__ == "__main__":
    run()