from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from challenge import get_circuit
  
app = Flask(__name__)
api = Api(app)

class Circuit(Resource):
  
    def post(self):
        data = request .get_json()    # status code
        circuit = get_circuit(int(data["gateNumber"]))
        responseData = {'circuit': circuit}
        return responseData, 200
  
api.add_resource(Circuit, '/circuit')
  
  
if __name__ == '__main__':
  
    app.run(debug = True)
 