from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS extension

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data', methods=['POST'])
def save_location():
    data = request.get_json()
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    print('Latitude:', latitude)
    print('Longitude:', longitude)
    return jsonify({'message': 'Location saved successfully'})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
