# 🚀 Cloud File Uploader (Challenge 1)

## 📌 Objective  
A simple web application that allows users to upload files (image/text) through a frontend form.  
The backend stores files in **AWS S3** and returns a public link to access them.  

This project demonstrates:  
- Static frontend hosting on **Vercel**  
- Backend API on **AWS Lambda + API Gateway**  
- Cloud storage integration with **Amazon S3**  

---

## ⚙️ Setup Steps  

### 1. Frontend (Static HTML)  
- Code: `/frontend/index.html`  
- Hosted on **Vercel**  
- Live Demo: [🔗 Click Here](https://aws-file-uploader-xzim4jqrk-shayanabtech22-8910s-projects.vercel.app/)  

### 2. Backend (Python Lambda API)  
- Code: `/backend/`  
- AWS Lambda function written in Python.  
- Handles file upload, saves to **AWS S3**, and returns file URL.  

#### Deployment Steps  
1. Zip backend code (`app.py`, `requirements.txt`).  
2. Deploy to **AWS Lambda**.  
3. Configure **API Gateway** with a POST endpoint `/upload`.  
4. Enable **CORS** in API Gateway for frontend requests.  
5. Update the frontend `fetch()` call to use your API Gateway endpoint.  

---

## 🛠️ Challenges & Assumptions  
- Configuring **CORS** between Vercel frontend and AWS backend required extra headers.  
- Used **pre-signed S3 URLs** for secure uploads.  
- Assumed small file sizes (<5 MB) due to AWS Lambda runtime limits.  

---

## 🤖 Use of AI Tooling  
- Used **ChatGPT** to generate boilerplate code for:  
  - Python Lambda + S3 integration  
  - Debugging CORS headers  
- README structure generated with AI assistance, refined manually.  

---

## 📌 Reflection  
- Learned how to connect **frontend → backend → S3** end-to-end.  
- The trickiest part was handling **secrets and environment variables** securely.  
- Gained practical experience with **Vercel** hosting and **AWS Lambda** deployment.  

---




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

