#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import os, sys, logging

# add library folder to the path
lib = os.path.join(os.getcwd(), "library")
sys.path.append(lib)

from google.appengine.ext import webapp
from google.appengine.ext.webapp import util
from admin.handlers import *
from app.handlers import *
from viewer.handlers import *
from web.handlers import *

requests = [
	('/admin/',AdminHandler),
	('/admin/professor/',AdminProfessorHandler),
	('/admin/professor/add/',AdminProfessorAddHandler),
	('/admin/professor/delete/',AdminEntityDeleteHandler),
	('/admin/matrix/',AdminMatrixHandler),
	('/admin/matrix/add/',AdminMatrixAddHandler),
	('/admin/matrix/delete/',AdminEntityDeleteHandler),
	('/admin/links/', AdminLinksHandler),
	('/admin/links/add/', AdminLinksAddHandler),
	('/admin/links/delete/', AdminEntityDeleteHandler),
	('/admin/revisions/', AdminRevisionsHandler),
	('/admin/revisions/delete/', AdminEntityDeleteHandler),
	('/app/getmatrix/', AppGetMatrixHandler),
	('/app/saverevision/', AppSaveRevisionHandler),
	('/app/getlink/', AppGetLinkHandler),
	('/app/getrevision/', AppGetRevisionHandler),
	('/viewer/plain/', MatrixPlainViewerHandler),
	('/viewer/raw/', MatrixRawViewerHandler),
	('/viewer/app/', MatrixAppHandler),
	('/web/', WebHomeHandler),
	('/web/about/', WebAboutHandler),
	('/web/theproject/', WebTheProjectHandler),
	('/web/contact/', WebContactHandler),
	('/web/matrix/', WebMatrixHandler),
]

application = webapp.WSGIApplication(requests, debug=True)

def main():
    util.run_wsgi_app(application)


if __name__ == '__main__':
    main()
