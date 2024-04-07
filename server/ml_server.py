from flask import Flask, render_template, request, redirect, url_for, jsonify
import joblib

app = Flask(__name__)
model = joblib.load('fraud_tree_model.joblib')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['data']
    print(data)
    prediction = model.predict([data])
    print(prediction)

    
    return jsonify({'prediction': prediction.tolist()})
if __name__ == '__main__':
    app.run(debug=True)
