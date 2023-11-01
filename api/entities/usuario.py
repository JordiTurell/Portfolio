from sqlalchemy import Column, String, LargeBinary
from context import db
import uuid

class Usuario(db.Model):
    
    id = Column(String(36), primary_key=True)
    nickname = Column(String, nullable=False)
    password = Column(String, nullable=False)
    imagen = Column(LargeBinary, nullable=True)
    
    def __init__(self, nickname, password):
        guid = uuid.uuid4()
        self.id = str(guid)
        self.nickname = nickname
        self.password = password