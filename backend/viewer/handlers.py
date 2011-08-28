import os
import urllib
import abstract
import utils
import logging
import csv
from django.utils import simplejson as json
from datetime import *
from models import *
from urlparse import urlparse

class MatrixAppHandler(abstract.BaseHandler):
    def post(self):
        self.get()
    
    def get(self):
        
        url = urlparse(self.request.url)
        gateway = str('%s://%s'%(url.scheme,url.netloc))
        
        if(self.request.get('matrix_key') or self.request.get('link_key') or self.request.get('revision_key')):
            
            data = {'gateway':gateway}
            
            if self.request.get('link_key'):
                data['link_key'] = self.request.get('link_key')
            elif self.request.get('revision_key'):
                data['revision_key'] = self.request.get('revision_key')
            elif self.request.get('matrix_key'):
                data['matrix_key'] = self.request.get('matrix_key')
            
            self.render_template('viewer/app.html',{'data':json.dumps(data)})
            
        else:
            
            self.write('missing parameters link_key or matrix_key')

class MatrixPlainViewerHandler(abstract.BaseHandler):
    def get(self):
        if(self.request.get('key')):
            key = db.Key(self.request.get('key'))
            matrix = Matrix.get(key)
            rdr = csv.reader(matrix.data)
            csv_data = [ row for row in rdr ]
            
            logging.info(csv_data)
            
            self.render_template('viewer/plain.html',{'data':csv_data})