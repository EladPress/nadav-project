from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import json

mydb = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="nadav1",
    database="NadavDB",
)

app = Flask(__name__)
CORS(app)

@app.route('/', methods = ["GET"])
def main():
    return "hhhhhhhhhhhhhhhhhhhh"

@app.route('/test', methods = ['POST', 'GET'])
def test():
    return jsonify('testing')

@app.route('/get_user', methods = ['GET'])
def get_user():
    file = open('user.json', 'r')
    file = file.read()
    file = json.loads(file)
    return jsonify(file)

@app.route('/disconnect', methods = ['GET', 'POST'])
def disconnect():
    dic = {
        'username': '',
        'password': '',
        'manager': 0
    }
    file = open('user.json', 'w')
    file.write(str(json.dumps(dic)))
    return 'disconnected'

@app.route('/select/<string:username>/<string:password>', methods =['POST', 'GET'])
def select(username: str, password: str):
    mycursor = mydb.cursor()
    mycursor.execute("select * from users where username = '{}' and password = '{}'".format(username, password))#,"password = '{}'".format(password))
    result = list(mycursor.fetchall()[0])
    if len(result) > 0:
        dic = {
            'username': result[0],
            'password': result[1],
            'manager': result[2],
        }
        file = open('user.json', 'w')
        file.write(str(json.dumps(dic)))
        return jsonify(dic)
    else:
        return 'No user found!'
        

@app.route('/insert_user/<string:username>/<string:password>', methods = ['POST', 'GET'])
def insert_user(username : str, password : str):
    mycursor = mydb.cursor()
    mycursor.execute("insert into Users(username, password, manager) values('{}', '{}', 0)".format(username, password))
    mydb.commit()
    return "Entered {} to DataBase".format(username)
   

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8081)

    
