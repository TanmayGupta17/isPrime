# Prime Number Checker API

A simple Node.js + Express API that checks whether a given number is prime.

## 🚀 Features
- Accepts a number via query parameter
- Returns whether the number is a prime or not
- Lightweight and easy to run locally

## 🛠️ Technologies Used
- Node.js
- Express.js

## 📦 Installation

```bash```  
git clone https://github.com/your-username/prime-api.git  
cd prime-api  
npm install  

## ▶️ Running the Server
node index.js  
The server will start on:  
http://localhost:3000  

## 🔍 Usage
Endpoint:  
GET /isPrime?number=29  
Example:  
http://localhost:3000/isPrime?number=29  
Response:  
{  
  "number": 29,  
  "isPrime": true  
}  
*Invalid Request* :  
http://localhost:3000/isPrime?number=hello  
Response:  
{  
  "error": "Invalid number"  
}  
