from gaesessions import SessionMiddleware

# suggestion: generate your own random key using os.urandom(64)
# WARNING: Make sure you run os.urandom(64) OFFLINE and copy/paste the output to
# this file.  If you use os.urandom() to *dynamically* generate your key at
# runtime then any existing sessions will become junk every time you start,
# deploy, or update your app!
import os
COOKIE_KEY = '\xe9@\x17p`j\x11\xf5\xdc\x17uv\xa8\xc8\xa5\x9c\xba\xfd\x8av!\xca_\xe6\xc5\xa2\x99M[\xf3\xb0d\xfc\xebO\x03pd(\x8c\r\xde\xa0\xf5\xb1\xa38\x00\xca\xae\xa6\x14x\xd7\x13\x80C\x14\x95\x1dU\x86\xc0\xa4'

def webapp_add_wsgi_middleware(app):
  from google.appengine.ext.appstats import recording
  app = SessionMiddleware(app, cookie_key=COOKIE_KEY)
  app = recording.appstats_wsgi_middleware(app)
  return app
