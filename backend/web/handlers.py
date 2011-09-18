import os
import urllib
import abstract
import utils
import logging
from datetime import *
from models import *
from google.appengine.api import mail

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
        
        name = ''
        email = ''
        institution = ''
        department = ''
        country = ''
        
        success = True
        error = ''
        message = ''
        
        if self.request.get('name'):
            name = self.request.get('name')
        else:
            error += 'Please input your name\r'
            success = False
        
        if self.request.get('email'):
            email = self.request.get('email')
        else:
            error += 'Please input your email'
            success = False
        
        if self.request.get('institution'):
            institution = self.request.get('institution')
        else:
            error += 'Please input the name of the institution'
            success = False
        
        if self.request.get('department'):
            department = self.request.get('department')
        else:
            error += 'Please input the name of the department'
            success = False
            
        if self.request.get('country'):
            department = self.request.get('country')
        else:
            error += 'Please input your country'
            success = False
        
        if success:
            
            mail.send_mail(sender="MCE Contact <info@mceproject.com>",
                          to="Antonio Tironi <jmfluxa@gmail.com>",
                          subject="Contact from: "+name,
                          body="""
            Contact information:

            name: [NAME]
            email = [EMAIL]
            institution = [INSTITUTION]
            department = [DEPARTMENT]
            country = [COUNTRY]
            
            """)
            
                
        
        self.render_template('web/contact.html',{})
        
class WebMatrixHandler(abstract.BaseHandler):
    def post(self):
        self.get()

    def get(self):
        self.render_template('web/matrix.html',{})