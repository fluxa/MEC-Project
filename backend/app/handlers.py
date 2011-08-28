import os
import urllib
import abstract
import utils
import logging
from datetime import *
from models import *

from google.appengine.ext import blobstore

class AppGetMatrixHandler(abstract.BaseHandler):
    def post(self):
        self.get()

    def get(self):
        
        if(self.request.get('key')):
            key = db.Key(self.request.get('key'))
            matrix = Matrix.get(key)
            
            if(self.request.get('plain')==1):
                self.write(matrix.data)
            else:
                data = {'matrix':{'name':matrix.name,'data':matrix.data}}
                self.writeSuccess(data)
        else:
            self.writeError('missing parameter key')
            
            
class AppSaveRevisionHandler(abstract.BaseHandler):
    def post(self):
        self.get()
        
    def get(self):
        
        if(self.request.get('key') and self.request.get('data')):
            link = Link.get(self.request.get('key'))
            data = self.request.get('data')
            
            revision = Revision.all().filter('link =', link).fetch(100)
            
            if len(revision)==0:
                #create
                revision = Revision()
                revision.link = link
                revision.data = db.Blob(str(data))
            else:
                #update
                revision = revision[0]
                revision.data = db.Blob(str(data))
            
            revision.put()
            self.writeSuccess({})
        else:
            self.writeError('missing parameter key or data')
        
class AppGetLinkHandler(abstract.BaseHandler):
    def post(self):
        self.get()
    
    def get(self):
        
        if(self.request.get('key')):
            link = Link.get(self.request.get('key'))
            data = {'matrix':{'key':str(link.matrix.key()),'data':link.matrix.data,'name':link.matrix.name},'professor':{'key':str(link.professor.key()),'name':link.professor.name},'link':{'key':str(link.key())}}
            self.writeSuccess(data)
        else:
            self.writeError('missing parameter key')
            
class AppGetRevisionHandler(abstract.BaseHandler):
    def post(self):
        self.get()
    def get(self):
        if self.request.get('key'):
            revision = Revision.get(self.request.get('key'))
            data = {'matrix':{'data':revision.data}}
            self.writeSuccess(data)
        else:
            self.writeError('missing parameter key')