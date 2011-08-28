from google.appengine.ext import db

class Professor(db.Model):
    name = db.TextProperty()
    field = db.TextProperty()
    university = db.TextProperty()
    department = db.TextProperty()
    country = db.TextProperty()

class Matrix(db.Model):
    name = db.TextProperty()
    filename = db.TextProperty()
    data = db.BlobProperty()
    created = db.DateTimeProperty()
    notes = db.TextProperty()
    
class Link(db.Model):
    matrix = db.ReferenceProperty(Matrix)
    professor = db.ReferenceProperty(Professor)
    
class Revision(db.Model):
    data = db.BlobProperty()
    link = db.ReferenceProperty(Link)
    created = db.DateTimeProperty(auto_now_add=True)
    last_modified = db.DateTimeProperty(auto_now=True)