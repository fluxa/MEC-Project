import os
import urllib
import abstract
import utils
import logging
from datetime import *
from models import *

class WebHomeHandler(abstract.BaseHandler):
    def post(self):
        self.get()
        
    def get(self):
        self.render_template('web/home.html',{})
        
class WebAboutHandler(abstract.BaseHandler):
    def post(self):
        self.get()

    def get(self):
        self.render_template('web/about.html',{})
        
class WebTheProjectHandler(abstract.BaseHandler):
    def post(self):
        self.get()

    def get(self):
        self.render_template('web/theproject.html',{})

class WebContactHandler(abstract.BaseHandler):
    def post(self):
        self.get()

    def get(self):
        self.render_template('web/contact.html',{})