# Web Application for Insurance Fraud Detection using Machine Learning

### Project Description
This project is a MERN (MongoDB, ExpressJS, ReactJS, NodeJS) web application designed to streamline the vehicle insurance claims process and detect fraudulent claims using machine learning. The application allows customers to file claims online, and a trained ML model classifies the claims as valid or fraudulent. The goal is to reduce insurance fraud and expedite the claims process.

### Features
- **User Interface**: Customers can file claims by filling out a form and uploading necessary documents.
- **Admin Dashboard**: Admins can view claim details, monitor fraud alerts, and access data visualizations.
- **Machine Learning Integration**: A trained ML model analyzes claim details to detect fraud.
- **Data Processing**: Implements techniques like ADASYN and SMOTE to address class imbalance in the dataset.
- **Security**: Secure authentication and authorization for both customers and admins.

### Prerequisites
Before running the project, ensure the following are installed:
- Node.js
- Python (for the ML model)
- MongoDB
- Flask
- Necessary Python libraries (Joblib, Flask)

To install Python libraries:
```bash
pip install -r requirements.txt
```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/insurance-fraud-detection.git
   cd insurance-fraud-detection
   ```

2. Install the Node.js dependencies:
   ```bash
   npm install
   ```

3. Install Python dependencies (for the ML model):
   ```bash
   pip install joblib flask
   ```

4. Set up MongoDB and configure database connection in the backend.

### Usage
To run the project:
1. Start the backend:
   ```bash
   npm start
   ```

2. Start the ML model server (Flask):
   ```bash
   python ml_model_server.py
   ```

3. Visit the web application at `localhost:3000` to access the frontend and start filing claims.

### Project Structure
```
/insurance-fraud-detection
    /client                   # React frontend
    /server                   # Node.js backend with Express
    /ml_model                 # Flask-based ML model server
    /data                     # Dataset and processing scripts
    README.md
    package.json
    requirements.txt          # Python dependencies
```

### Dataset
The dataset contains 15,419 instances with 33 features. Preprocessing techniques like normalization, feature selection, and handling class imbalance (SMOTE, ADASYN) are applied.

### Machine Learning Models
- Random Forest (best-performing model with 97.33% accuracy and 99.22% ROC-AUC)
- K-Nearest Neighbors (KNN)
- Decision Tree
- Logistic Regression
- Ensemble Methods: AdaBoost, XGBoost, Bagging

### Model Performance
| Model              | Accuracy | Precision | Recall  | F1-Score | ROC-AUC |
|--------------------|----------|-----------|---------|----------|---------|
| Random Forest       | 97.33%   | 95.59%    | 99.22%  | 97.37%   | 99.22%  |
| Bagging Classifier  | 97.15%   | 95.25%    | 99.24%  | 97.20%   | 99.17%  |

### Contributing
We welcome contributions. Please follow the standard GitHub fork and pull request workflow.

### Contact
For any queries, please contact:
- **Anish Mayekar**: mayekaranish95@gmail.com
- **Soham Phalke**: sohamphalke2003@gmail.com
- **Sanika Rane**: ranesanika3421@gmail.com
- **Yash Uskelwar**: yashuskelwar@gmail.com
