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
    def get(self):
        self.render_template('web/contact.html',{})

    def post(self):
        
        name = ''
        email = ''
        institution = ''
        department = ''
        country = ''
        
        success = True
        error = ''
        message = ''
        
        logging.info(self.request)
        
        if self.request.get('name'):
            name = self.request.get('name')
        else:
            error += 'Input your <strong>Name</strong><br>'
            success = False
        
        if self.request.get('email'):
            email = self.request.get('email')
        else:
            error += 'Input your <strong>Email</strong><br>'
            success = False
        
        if self.request.get('university'):
            institution = self.request.get('university')
        else:
            error += 'Input the name of the <strong>Institution</strong><br>'
            success = False
        
        if self.request.get('department'):
            department = self.request.get('department')
        else:
            error += 'Input the name of the <strong>Department</strong><br>'
            success = False
            
        if self.request.get('country'):
            country = self.request.get('country')
        else:
            error += 'Select your <strong>Country</strong><br>'
            success = False
        
        if success:
            
            body = """
            Contact information:

            name: [NAME]
            email = [EMAIL]
            institution = [INSTITUTION]
            department = [DEPARTMENT]
            country = [COUNTRY]

            """
            body.replace('[NAME]',name)
            body.replace('[EMAIL]',email)
            body.replace('[INSTITUTION]',institution)
            body.replace('[DEPARTMENT]',department)
            body.replace('[COUNTRY]',country)
            
            mail.send_mail(sender="MCE Contact <juanclaudiolopez@gmail.com>",
                          to="Antonio Tironi <tironi@gmail.com>",
                          subject="Contact from: "+name,
                          body=body)
            
            message = 'Your message has been sent. We will contact you shortly.'
            name = ''
            email = ''
            institution = ''
            department = ''
            country = ''
            
            
        data = {'name':name, 'email':email, 'institution':institution, 'department':department, 'country':country}
        obj = {'success':success, 'message':message, 'error':error, 'data':data}
        self.render_template('web/contact.html',{'obj':obj})
        
class WebMatrixHandler(abstract.BaseHandler):
    def post(self):
        self.get()

    def get(self):
        self.render_template('web/matrix.html',{})