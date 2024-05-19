from flask import render_template
from flask import Flask
import json

app = Flask(__name__)

@app.route('/')
def main():
   return render_template("main.html")

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)