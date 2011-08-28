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
                self.writeSuccess(matrix.data)
        else:
            self.writeError('missing parameter key')
            
            
class AppSaveRevisionHandler(abstract.BaseHandler):
    def get(self):
        logging.info('caca')
        
class AppGetLinkHandler(abstract.BaseHandler):
    def post(self):
        self.get()
    
    def get(self):
        
        if(self.request.get('key')):
            link = Link.get(self.request.get('key'))