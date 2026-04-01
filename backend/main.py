from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import json
import random
import time

app = FastAPI(title="Lead Generation API")

# Restrict CORS to specific origins in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type"],
)

class ScrapeRequest(BaseModel):
    keyword: str = Field(..., min_length=2, max_length=100, description="Search keyword for lead generation")
    location: str = Field(..., min_length=2, max_length=100, description="Target location for scraping")

@app.get("/")
async def root():
    return {"status": "online", "message": "Lead Generation API is running."}

@app.post("/api/scrape")
async def scrape_leads(request: ScrapeRequest):
    """
    Scrape leads based on keyword and location.
    Note: This is a demo implementation. For production, integrate with actual scraping services.
    """
    try:
        print(f"Scraping leads for {request.keyword} in {request.location}...")

        # Simulate scraping delay
        time.sleep(1.5)

        # Mock data following the scraper's logic
        mock_leads = [
            {"id": "l1", "name": "Sarah Johnson", "title": "Head of Growth", "company": "TechStream", "email": "sarah@techstream.io", "status": "Verified"},
            {"id": "l2", "name": "Michael Chen", "title": "Founder & CEO", "company": "AlphaOps", "email": "m.chen@alphaops.com", "status": "Verified"},
            {"id": "l3", "name": "Elena Rodriguez", "title": "Marketing Manager", "company": "GlobalReach", "email": "elena@globalreach.co", "status": "Invalid"},
            {"id": "l4", "name": "David Smith", "title": "Sales Director", "company": "CloudWave", "email": "d.smith@cloudwave.net", "status": "Verified"},
            {"id": "l5", "name": "Jessica Lee", "title": "Product Owner", "company": "InnovateX", "email": "jessica@innovatex.com", "status": "Verified"},
            {"id": "l6", "name": "Robert Brown", "title": "CTO", "company": "DataFlow", "email": "r.brown@dataflow.tech", "status": "Verified"},
        ]

        return {
            "keyword": request.keyword,
            "location": request.location,
            "leads": mock_leads,
            "count": len(mock_leads),
            "status": "success"
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to scrape leads: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
