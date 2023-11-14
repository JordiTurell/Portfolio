from sqlalchemy import Column, String, Text, Numeric
from context import db
import uuid

class Skills(db.Model):
    id = Column(String(36), primary_key=True)
    nombre = Column(String, nullable=False)
    years = Column(Numeric, nullable=False)
    descripcion = Column(Text, nullable=True)
    
    def __init__(self, nombre, year, descripcion) -> None:
        guid = uuid.uuid4()
        self.id = str(guid)
        self.nombre = nombre
        self.year = year
        self.descripcion = descripcion
        