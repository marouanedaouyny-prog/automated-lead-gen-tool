# Automated Lead Gen Tool

A B2B lead generation tool that scrapes data from LinkedIn, company websites, and public directories to build lists of potential clients.

## Features
- **Lead Extraction:** Automated scraping of B2B profiles based on job title and location.
- **Email Verification:** Built-in logic to verify email addresses (mocked).
- **Interactive Dashboard:** Modern UI to search, filter, and view prospects.
- **Export Ready:** Clean data structure ready for CSV or CRM export.

## Setup

### Backend (Python)
1. Go to `backend/`
2. Install dependencies: `pip install fastapi uvicorn pydantic`
3. Run the server: `python main.py` (Runs on port 8001)

### Scraper (Python - Optional standalone)
1. Go to `scraper/`
2. Install dependencies: `pip install selenium`
3. Run `python lead_engine.py` (Requires Chrome and ChromeDriver)

### Dashboard (Next.js)
1. Go to `dashboard/`
2. Run `npm install`
3. Run `npm run dev`

## Tech Stack
- **Backend:** Python, FastAPI
- **Scraper:** Python, Selenium
- **Frontend:** Next.js, Tailwind CSS, Lucide React
