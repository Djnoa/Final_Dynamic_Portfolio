from flask import Flask, request, jsonify, make_response
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_pymongo import PyMongo
from flask_cors import CORS  
from bson.objectid import ObjectId 


app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Database"
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this!

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

admin_user = 'admin'
admin_password_hash = bcrypt.generate_password_hash('your_password').decode('utf-8')
mongo = PyMongo(app)


@app.route('/admin_login', methods=['POST'])
def admin_login():
    username = request.json.get('username', None)
    password = request.json.get('password', None)

    if username != admin_user or not bcrypt.check_password_hash(admin_password_hash, password):
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token)

@app.route('/admin', methods=['GET'])
@jwt_required()
def admin_page():
    # Logic for admin page
    pass

@app.route('/add_skill', methods=['POST'])
def add_skill():
    skill_data = request.get_json()
    skill_name = skill_data.get('skill_name')
    level = skill_data.get('level')
    mongo.db.skills.insert_one({'skill_name': skill_name, 'level': level})
    return jsonify({'message': 'Skill added successfully'}), 201

@app.route('/update_skill/<id>', methods=['PUT'])
def update_skill(id):
    skill_data = request.get_json()
    level = skill_data.get('level')
    mongo.db.skills.update_one({'_id': ObjectId(id)}, {'$set': {'level': level}})
    return jsonify({'message': 'Skill updated successfully'}), 200

@app.route('/delete_skill/<id>', methods=['DELETE'])
def delete_skill(id):
    result = mongo.db.skills.delete_one({'_id': ObjectId(id)})
    if result.deleted_count > 0:
        return jsonify({'message': 'Skill deleted successfully'}), 200
    else:
        return jsonify({'message': 'Skill not found'}), 404



@app.route('/skills')
def get_skills():
    skills_collection = mongo.db.skills
    skills = skills_collection.find({})
    skills_list = [{"skill_name": skill["skill_name"], "level": skill["level"]} for skill in skills]
    return jsonify(skills_list)

@app.route('/portfolio')
def get_portfolio():
    portfolio_collection = mongo.db.portfolio
    portfolio_items = portfolio_collection.find({})
    portfolio = [
        {
            'id': str(item['_id']),  
            'title': item['title'],
            'description': item['description'],
            'image1': item['image1'],
            'image2': item['image2'],
            'video_url': item['video_url']
        } for item in portfolio_items
    ]
    return jsonify(portfolio)

if __name__ == '__main__':
    app.run(debug=True)
