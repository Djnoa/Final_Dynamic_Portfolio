from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS  
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/Database"
mongo = PyMongo(app)
CORS(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/skills')
def get_skills():
    skills_collection = mongo.db.skills
    skills = skills_collection.find({})
    skills_list = [{"skill_name": skill["skill_name"], "Level": skill["level"]} for skill in skills]
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
