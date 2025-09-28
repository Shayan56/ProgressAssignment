# 📰 Serverless News Summarizer (Challenge 2)

## 📌 Objective  
A serverless function that accepts a news article URL and returns a summarized version using a free NLP API.  

This project demonstrates:  
- Serverless backend deployment on **AWS Lambda + API Gateway**  
- Integration with an external **NLP/Text Summarization API**  
- Handling POST requests and returning JSON responses  

---

## ⚙️ Setup Steps  

### 1. Backend (Python Lambda API)  
- Code: `lambda_function.py`  
- AWS Lambda function written in Python.  
- Handles POST requests containing a news URL, calls the NLP API, and returns a summary.  

#### Deployment Steps
1. Create a new Lambda function in **AWS Console** (Python runtime).  
2. Upload `lambda_function.py`.  
3. Configure **API Gateway** with a POST endpoint (e.g., `/summarize`).  
4. Add your **NLP API key** as an environment variable.  

---

## 🛠️ Challenges & Assumptions
- Free NLP APIs have **rate limits**.  
- Assumes input URLs are **valid, publicly accessible news articles**.  
- Configured **CORS** for external client testing.  

## 🤖 Use of AI Tooling
**ChatGPT** assisted in:  
- Generating Lambda boilerplate code  
- Integrating with the NLP API  
- Debugging CORS and error handling  
- Structuring the README  

## 📌 Reflection
- Learned to deploy **serverless functions** end-to-end with **AWS Lambda + API Gateway**.  
- Integration with an external NLP API taught handling **API keys** and **error responses** securely.  
- Tricky part: ensuring **robust error handling** and respecting **API rate limits**.

---

