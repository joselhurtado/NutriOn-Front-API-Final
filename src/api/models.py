from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    lose_weight = db.Column(db.Boolean(), unique=False, nullable=False)
    gain_weight = db.Column(db.Boolean(), unique=False, nullable=False)
    maintain_weight = db.Column(db.Boolean(), unique=False, nullable=False)
    male = db.Column(db.Boolean(), unique=False, nullable=False)
    female = db.Column(db.Boolean(), unique=False, nullable=False)
    other = db.Column(db.Boolean(), unique=False, nullable=False)
    vegan_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    vegeterian_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    gluten_free_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    keto_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    paleo_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    pescatarian_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    norestrictions_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    user_height_feet = db.Column(db.String(3), unique=True, nullable=False)
    user_height_inch = db.Column(db.String(3), unique=True, nullable=False)
    user_weight = db.Column(db.String(3), unique=True, nullable=False)
    user_age = db.Column(db.String(2), unique=True, nullable=False)
    light_activity = db.Column(db.Boolean(), unique=False, nullable=False)
    moderate_activity = db.Column(db.Boolean(), unique=False, nullable=False)
    active_activity = db.Column(db.Boolean(), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "lose_weight":self.lose_weight,
            "gain_weight":self.gain_weight,
            "maintain_weight":self.maintain_weight,
            "male": self.male,
            "female":self.female,
            "vegan_diet":self.vegan_diet,
            "vegeterian_diet":self.vegeterian_diet,
            "gluten_free_diet":self.gluten_free_diet,
            "keto_diet": self.keto_diet,
            "paleo_diet": self.paleo_diet,
            "pescatarian_diet": self.pescatarian_diet,
            "norestrictions_diet": self.norestrictions_diet,
            "user_height_feet":self.user_height_feet,
            "user_height_inch":self.user_height_inch,
            "user_weight":self.user_weight,
            "user_age":self.user_age,
            "light_activity":self.light_activity,
            "moderate_activity": self.moderate_activity,
            "active_activity": self.active_activity,
            "is_active": self.is_active,
        }
class Favorite(db.Model):
        __tablename__ = 'favorite'
        id = db.Column(db.Integer, primary_key=True)
        user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
        user = db.relationship('User')

        def __repr__(self):
            return '<Favorite %r>' % self.id

        def serialize(self):
            return {
                "id": self.id,
                "user": self.user,
        }