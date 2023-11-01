from flask import request, jsonify, Blueprint
from services.loginservice import Areas

user_routes = Blueprint("user_routes", __name__)

@user_routes.route('registro', methods=['POST'])
def registro():
    try:
        data = request.json
        e = Areas(data['nickname'], data['password'])
        e = e.Registro()
        return jsonify({"data": str(e)}), 200
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500
    
@user_routes.route('login', methods=['POST'])
def login():
    try:
        req = request.json
        areas = Areas(req['nickname'], req['password'])
        return areas.Login()
    except Exception as e:
        print(e)
        return jsonify({'status': False, 'error': str(e)}), 500