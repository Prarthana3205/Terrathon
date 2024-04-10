# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  
CORS(app, origins='http://localhost:5173/')

@app.route('/api/data', methods=['POST'])
def receive_data():
    if request.method == 'POST':
        data = request.json
        latitude = data.get('latitude')
        longitude = data.get('longitude')
        print('Latitude:', latitude)
        print('Longitude:', longitude)
        return jsonify({'message': 'Location received successfully'})
    else:
        return jsonify({'error': 'Method not allowed'}), 405

if __name__ == '__main__':
    app.run(debug=True)
