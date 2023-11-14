from flask import request, jsonify, Blueprint
from services.lenguajesservice import Skillsservice

lenguajes_routes = Blueprint("lenguajes_routes", __name__)

@lenguajes_routes.route('skills', methods=['POST'])
def skills():
    try: 
        req = request.json
        lenguajes = Skillsservice(req['items'], req['pages'])
        return lenguajes.list()
    except Exception as e:
        print(e)
        return jsonify({'status': False, 'error': str(e)}), 500