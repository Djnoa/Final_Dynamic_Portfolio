from flask import Flask, jsonify, send_from_directory
import sqlite3
from flask_cors import CORS  
# import os
 
app = Flask(__name__, static_folder='../client/build', static_url_path='/')
CORS(app) 
 
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
 
@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')
 
@app.route('/skills')
def get_skills():
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    cur.execute("SELECT skill_name, skill_level FROM skills")
    skills = cur.fetchall()
    conn.close()
    return jsonify(skills)
 
@app.route('/portfolio')
def get_portfolio():
    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    cur.execute("SELECT id, title, description, image1, image2, video_url FROM portfolio")
    portfolio_items = cur.fetchall()
    conn.close()
    
    portfolio = [{'id': item[0], 'title': item[1], 'description': item[2], 'image1': item[3], 'image2': item[4], 'video_url': item[5]} for item in portfolio_items]
 
    return jsonify(portfolio)
 
if __name__ == '__main__':
    app.run(debug=True)
 