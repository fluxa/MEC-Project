import os
import urllib
import abstract
import utils
import logging
from datetime import *
from models import *
from google.appengine.api import mail
from gaesessions import get_current_session

class WebHomeHandler(abstract.BaseHandler):
    def post(self):
        self.get()
        
    def get(self):
        #check if it needs logout
        if self.request.get('logout'):
            session = get_current_session()
            if session.is_active():
                session.terminate()
        
        professor = None
        links = []
        
        #check if has user data
        if self.request.get('key_name'):
            professor = Professor.get_by_key_name(self.request.get('key_name'))
            
        if professor:
            # close any active session the user has since he is trying to login
            session = get_current_session()
            if session.is_active():
                session.terminate()
            
            #start new session
            session['user'] = professor
        
        session = get_current_session()
        if session.is_active():
            professor = session['user']
            links = Link.all().filter('professor =', professor).fetch(100)
            self.render_template('web/home_logged.html',{'professor':professor,'links':links})
        else:
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
        cmessage = ''
        
        success = True
        error = ''
        message = ''
        
        
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
        
        if self.request.get('message'):
            cmessage = self.request.get('message')
        else:
            error += 'Input a <strong>message</message>'
            success = False
            
        
        if success:
            
            body = """
            Contact information:

            name: [NAME]
            email: [EMAIL]
            institution: [INSTITUTION]
            department: [DEPARTMENT]
            country: [COUNTRY]
            message: [MESSAGE]

            """
            body = body.replace('[NAME]',name)
            body = body.replace('[EMAIL]',email)
            body = body.replace('[INSTITUTION]',institution)
            body = body.replace('[DEPARTMENT]',department)
            body = body.replace('[COUNTRY]',country)
            body = body.replace('[MESSAGE]', cmessage)
            
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
            cmessage = ''
            
            
        data = {'name':name, 'email':email, 'institution':institution, 'department':department, 'country':country, 'message':cmessage}
        obj = {'success':success, 'message':message, 'error':error, 'data':data}
        self.render_template('web/contact.html',{'obj':obj})
        
class WebMatrixHandler(abstract.BaseHandler):
    def post(self):
        self.get()

    def get(self):
        self.render_template('web/matrix.html',{})