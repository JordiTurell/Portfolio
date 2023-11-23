from flask import Flask, request, jsonify

from passlib.hash import sha256_crypt
from context import db, Usuario
from encriptar import bcrypt
import jwt
import datetime

class Areas():
    def __init__(self, nickname, password):
        self.nickname = nickname
        self.password = password
        
    def Registro(self):
         print(f'nick:{self.nickname}, pass: {self.password}')
         sal = bcrypt.gensalt()

         hashed_password = bcrypt.generate_password_hash(self.password.encode('utf-8'), sal)
         print(hashed_password)
         users_db = Usuario(self.nickname, hashed_password)
         db.session.add(users_db)
         db.session.commit()

         return 'Usuario registrado exitosamente'
    
    def Login(self):
        hashed_password = bcrypt.generate_password_hash(self.password).decode('utf-8')
        print(f'{self.nickname}, {hashed_password}')
        
        query = Usuario.query.filter(Usuario.nickname == self.nickname).first()
        if query is None:
            return jsonify({ 'status': False, 'message': 'El usuario no existe' }), 400
        else:
            if sha256_crypt.verify(self.password, query.password):
                secret_key = "t489cru48mu98f329"
                responseitem = {
                    'usuario': query.nickname,
                    'id': query.id
                }
                expiration = datetime.datetime.utcnow() + datetime.timedelta(hours=24)
                token = jwt.encode({"exp": expiration, **responseitem}, secret_key, algorithm="HS256")
                return jsonify({ 'status': True, 'token': token }), 200
            else:
                return jsonify({ 'status': False, 'message': 'El usuario no existe' }), 400
