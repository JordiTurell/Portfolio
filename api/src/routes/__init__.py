#aquet artxiu lo que realitza es que la carpeta de routers
#es tot un paquet senser per poderlo fer servir a la aplicació
#registre amb blueprints

from flask import Blueprint

from .user_routes import user_routes
from .lenguajes_routes import lenguajes_routes

def configure_routes(api):
    api.register_blueprint(user_routes, url_prefix='/api/users')
    api.register_blueprint(lenguajes_routes, url_prefix='/api/skills')