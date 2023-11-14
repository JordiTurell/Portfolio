from context import db, Skills

class Skillsservice:
    def __init__(self, nombre, year, descripcion) -> None:
        self.nombre = nombre
        self.year = year
        self.descripcion = descripcion
    
    def __init__(self, items, page) -> None:
        self.items = items
        self.page = page
        
    def list(self):
        print(f'{self.page}, {self.items}')
        query = Skills.query.paginate(page=self.page, per_page=self.items, error_out=False)
        listado = [
            {
                'id': item.id,
                'nombre': item.nombre,
                'year': item.year,
                'descripcion': item.descripcion
            }for item in query
        ]
        return listado