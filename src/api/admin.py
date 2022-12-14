  
import os
from flask_admin import Admin
from .models import db, User_signup, Worker_signup, Login, Work, Budget,Ratings
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User_signup, db.session))
    admin.add_view(ModelView(Worker_signup, db.session))
    admin.add_view(ModelView(Login, db.session))
    admin.add_view(ModelView(Work, db.session))
    admin.add_view(ModelView(Budget, db.session))
    admin.add_view(ModelView(Ratings, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))