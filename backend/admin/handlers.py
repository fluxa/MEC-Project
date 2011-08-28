import os
import urllib
import abstract
import utils
import logging
from datetime import *
from models import *

from google.appengine.ext import blobstore

class AdminHandler(abstract.BaseHandler):
    def get(self):
        
        #user = users.get_current_user()
        #self.render_template('admin/index.html', {'username':user.nickname()})
        
        path = 'admin/'
        crumbs = utils.crumbsFromPath(path)
        self.render_template('admin/index.html',{'crumbs':crumbs})


class AdminProfessorHandler(abstract.BaseHandler):
    def get(self):
        
        professors = Professor.all()
        
        path = 'admin/professor.html'
        crumbs = utils.crumbsFromPath(path)
        self.render_template(path,{'professors':professors, 'crumbs':crumbs})
        

class AdminProfessorAddHandler(abstract.BaseHandler):
    
    def post(self):
        
        if self.request.get('name') != "":
            
            name = self.request.get('name')
            field = self.request.get('field')
            university = self.request.get('university')
            department = self.request.get('department')
            country = self.request.get('country')
            
            professor = Professor()
            professor.name = name
            professor.field = field
            professor.university = university
            professor.department = department
            professor.country = country
            
            professor.put()
            
        self.redirect('/admin/professor/')
        
            
class AdminMatrixHandler(abstract.BaseHandler):
    def get(self):
        matrices = Matrix.all()
        path = 'admin/matrix.html'
        crumbs = utils.crumbsFromPath(path)
        
        self.render_template(path,{'matrices':matrices, 'crumbs':crumbs})
        
class AdminMatrixAddHandler(abstract.BaseHandler):
    def post(self):
        
        file = self.request.POST['data']
        
        if file != None and self.request.get('name') != "":
            
            name = self.request.get('name')
            filename = file.filename
            data = file.value
            notes = self.request.get('notes')
            
            matrix = Matrix()
            matrix.name = name
            matrix.filename = filename
            matrix.data = data
            matrix.notes = notes
            matrix.created = datetime.utcnow()
            
            matrix.put()
            
            self.redirect('/admin/matrix/')
        else:
            self.response.out.write("Missing data")
            
            
        
        
class AdminModelDeleteHandler(abstract.BaseHandler):
    def get(self):
        key = self.request.get('key')
        if key != '':
            db.delete(key)
            self.redirect(self.request.headers['REFERER'])
            self.response.out.write("OK")
        else:
            self.response.out.write("Missing key")
            
class AdminLinksHandler(abstract.BaseHandler):
    def get(self):
        
        professors = Professor.all().fetch(100)
        matrixes = Matrix.all().fetch(100)
        links = Link.all().fetch(100)
        
        
        if(self.request.get('success')):
            success = self.request.get('success')
            
        self.render_template('admin/links.html', {'professors':professors,'matrixes':matrixes,'links':links})
        
class AdminLinksAddHandler(abstract.BaseHandler):
    def post(self):
        self.get()
        
    def get(self):
        
        if(self.request.get('professor') and self.request.get('matrix')):
            professor = Professor.get(self.request.get('professor'))
            matrix = Matrix.get(self.request.get('matrix'))
            
            links = Link.all().filter('professor =', professor).filter('matrix =', matrix).fetch(100)
            if(len(links)==0):
                link = Link()
                link.professor = professor
                link.matrix = matrix
                link.put()
            
            self.redirect('/admin/links/?success=1')
    
class AdminLinksDeleteHandler(abstract.BaseHandler):
    def post(self):
        self.get()
        
    def get(self):
        
        if(self.request.get('key')):
            db.delete(self.request.get('key'))
        
        self.redirect(self.request.headers['REFERER'])