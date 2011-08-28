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
    
class Revision(db.Model):
    original = db.ReferenceProperty(Matrix)
    edited = db.TextProperty()
    when = db.DateTimeProperty()
    who = db.ReferenceProperty(Professor)

class Link(db.Model):
    matrix = db.ReferenceProperty(Matrix)
    professor = db.ReferenceProperty(Professor)