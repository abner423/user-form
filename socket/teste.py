from socket import SocketIO
from aiohttp import web
import socketio


## creates a new Async Socket IO Server
sio = socketio.AsyncServer(cors_allowed_origins='*')
## Creates a new Aiohttp Web Application
app = web.Application()
# Binds our Socket.IO server to our Web App
## instance

sio.attach(app)

## If we wanted to create a new websocket endpoint,
## use this decorator, passing in the name of the
## event we wish to listen out for
@sio.on('message')
async def print_message(sid, message):
    ## When we receive a new event of type
    ## 'message' through a socket.io connection
    ## we print the socket ID and the message
    print("Socket ID: " , sid)
    print(message)


## We kick off our server
if __name__ == '__main__':
    web.run_app(app)