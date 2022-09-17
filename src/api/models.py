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
    maintai_weight = db.Column(db.Boolean(), unique=False, nullable=False)
    male = db.Column(db.Boolean(), unique=False, nullable=False)
    female = db.Column(db.Boolean(), unique=False, nullable=False)
    other = db.Column(db.Boolean(), unique=False, nullable=False)
    vegan_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    vegeterian_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    gluten_free_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    keto_diet = db.Column(db.Boolean(), unique=False, nullable=False)
    pale_diet = db.Column(db.Boolean(), unique=False, nullable=False)
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
            "email": self.email,
            # do not serialize the password, its a security breach
        }
class Planet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    diameter = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String(100), nullable=False)
    gravity = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "diameter": self.diameter,
            "image": self.image,
            "gravity": self.gravity,
            } 
class Favorite(db.Model):
        __tablename__ = 'favorite'
        id = db.Column(db.Integer, primary_key=True)
        user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
        user = db.relationship('User')
        starship_id = db.Column(db.Integer, db.ForeignKey('starship.id'))
        starship = db.relationship('Starship')
        character_id = db.Column(db.Integer, db.ForeignKey('character.id'))
        character = db.relationship('Character')
        planet_id = db.Column(db.Integer, db.ForeignKey('planet.id'))
        planet = db.relationship('Planet')

        def __repr__(self):
            return '<Favorite %r>' % self.id

        def serialize(self):
            return {
                "id": self.id,
                "user": self.user,
                "starship_id": self.starship_id,
                "character_id": self.character_id,
                "planet_id": self.planet_id
        }