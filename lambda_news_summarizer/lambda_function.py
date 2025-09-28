import json
import requests

def lambda_handler(event, context):
    try:
        body = json.loads(event.get("body", "{}"))
        news_url = body.get("url")

        if not news_url:
            return {
                "statusCode": 400,
                "body": json.dumps({"error": "No URL provided"})
            }

        api_url = "https://extract-and-summarize.p.rapidapi.com/summarize"
        headers = {
            "x-rapidapi-key": "5d01a22120msh8701c5e770af00dp162fabjsnde304c917beb",
            "x-rapidapi-host": "extract-and-summarize.p.rapidapi.com"
        }
        querystring = {"url": news_url}

        response = requests.get(api_url, headers=headers, params=querystring)

        if response.status_code != 200:
            return {
                "statusCode": response.status_code,
                "body": json.dumps({"error": "API request failed", "details": response.text})
            }

        data = response.json()
        summary = data.get("summary", "Could not summarize the article")

        return {
            "statusCode": 200,
            "body": json.dumps({"summary": summary})
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({"error": str(e)})
        }