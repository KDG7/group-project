from flask import render_template
from flask import Flask
import json

app = Flask(__name__)

@app.route('/')
def goMain():
   return render_template("main.html")

@app.route('/support')
def goSupport():
   return render_template("support.html")

if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)