# Cloud & Serverless Intern Challenges

This repository contains two projects completed as part of the Cloud & Serverless internship challenges:

1. **Cloud File Uploader** (Challenge 1)  
2. **Serverless News Summarizer** (Challenge 2)

---

## Challenge 1: Cloud File Uploader

### Objective
A simple web application that allows users to upload files (image/text) through a frontend form.  
The backend stores files in **AWS S3** and returns a public link to access the uploaded file.  
Frontend is hosted on **Vercel**, backend is deployed on **AWS Lambda + API Gateway**.

### Setup Steps

#### Frontend
- Path: `/aws-file-uploader/frontend/index.html`  
- Hosted on **Vercel**: [🔗 Live Demo](https://your-vercel-link.vercel.app)  

#### Backend
- Path: `/aws-file-uploader/backend/`  
- AWS Lambda function in Python  
- Stores uploaded files in **AWS S3**  
- Exposed via **API Gateway POST endpoint**

##### Deployment Steps
1. Zip backend code (`app.py`, `requirements.txt`).  
2. Deploy to **AWS Lambda**.  
3. Configure **API Gateway** with POST endpoint `/upload`.  
4. Enable **CORS** for frontend requests.  
5. Update frontend `fetch()` calls to point to API Gateway URL.

### Challenges & Assumptions
- Configuring **CORS** for cross-origin requests.  
- Used **pre-signed URLs** for secure file upload.  
- Assumed small files (<5 MB) due to Lambda runtime limits.

### Reflection
- Learned end-to-end integration: frontend → backend → S3.  
- Tricky part: handling secrets securely with `.env` and Lambda environment variables.  
- Learned practical **Vercel hosting** and **AWS Lambda deployment**.

---

## Challenge 2: Serverless News Summarizer

### Objective
A serverless function that accepts a news article URL and returns a summarized version using a free NLP API.  
Deployed on **AWS Lambda** with **API Gateway** for HTTP access.

### Setup Steps

1. Clone repository:
```bash
git clone https://github.com/Shayan56/ProgressAssignment.git
cd lambda_news_summarizer

Configure AWS Lambda:

Create a new Lambda function (Python runtime).

Upload lambda_function.py.

Configure API Gateway POST endpoint.

Add NLP API key as an environment variable.

Install dependencies (for local testing):

pip install -r requirements.txt


Invoke function using curl:

curl -X POST <API_GATEWAY_URL> \
-H "Content-Type: application/json" \
-d '{"url": "https://example.com/sample-news"}'

Example Response
{
  "summary": "The article highlights recent advancements in AI and cloud computing..."
}

Challenges & Assumptions

Free NLP APIs have rate limits.

Assumes input URLs are valid public news articles.

CORS configuration needed for testing from external clients.

Reflection

Learned to deploy serverless functions with AWS Lambda + API Gateway.

Learned integration with external NLP APIs.

Tricky part: handling API authentication and error responses properly.

AI Tooling Used

ChatGPT: Assisted in generating boilerplate Lambda code, S3 integration, API calls, and error handling.

Helped structure README.md, write reflections, and debug CORS issues.