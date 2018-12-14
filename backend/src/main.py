# pylint: disable=E0401

import logging
from flask import Flask, request, Response
from flask_cors import CORS
from jsonrpcserver import methods

app = Flask(__name__)
CORS(app)

@methods.add
def echo(**kwargs):
    return kwargs.get('echo')

@app.route("/rpc", methods=["POST"])
def index():
    req = request.get_data().decode()
    response = methods.dispatch(req, context={'feature_enabled': True})
    return Response(str(response), response.http_status, mimetype="application/json")

@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return """
    An internal error occurred: <pre>{}</pre>
    See logs for full stacktrace.
    """.format(e), 500

@app.route('/')
def hello_world():
    return 'Hello, World!'