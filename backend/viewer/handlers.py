import os
import urllib
import abstract
import utils
import logging
import csv

from datetime import *
from models import *
from urlparse import urlparse

class MatrixAppHandler(abstract.BaseHandler):
    def post(self):
        self.get()
    
    def get(self):
        
        url = urlparse(self.request.url)
        gateway = str('%s://%s/'%(url.scheme,url.netloc))
        
        if(self.request.get('matrix_key')):
            matrix_key = self.request.get('matrix_key')
            user_key = self.request.get('user_key')
            self.render_template('viewer/app.html',{'GATEWAY':gateway,'MATRIX_KEY':matrix_key,'USER_KEY':user_key})
            
        else:
            
            self.write('missing parameter matrix_key')

class MatrixPlainViewerHandler(abstract.BaseHandler):
    def get(self):
        if(self.request.get('key')):
            key = db.Key(self.request.get('key'))
            matrix = Matrix.get(key)
            rdr = csv.reader(matrix.data)
            csv_data = [ row for row in rdr ]
            
            logging.info(csv_data)
            
            self.render_template('viewer/plain.html',{'data':csv_data})