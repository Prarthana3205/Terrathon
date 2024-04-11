# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
 
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})
@app.route('/api/data', methods=['POST', 'GET'])

@cross_origin()
def receive_data():
    if request.method == 'POST':
        data = request.json
        latitude = data.get('latitude')
        longitude = data.get('longitude')
        print('Latitude:', latitude)
        print('Longitude:', longitude)
        return jsonify({'message': 'Location received successfully'})
    else:
        return jsonify({'error': 'Method not allowed'}), 200

if __name__ == '__main__':
    app.run(debug=True)
