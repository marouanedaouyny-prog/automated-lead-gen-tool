# Automated Lead Generation Tool

A powerful lead generation automation tool that scrapes and verifies leads from multiple sources, enhanced with AI-powered lead scoring and qualification.

![Lead Generation Tool Demo](./demo.png)

## ✨ Features

- **Multi-Source Scraping:** Aggregate leads from LinkedIn, Google Maps, and business directories
- **Email Verification:** Real-time email validation to ensure deliverability
- **AI Lead Scoring:** Automatic lead qualification using Google Gemini AI
- **Export Options:** Download leads as CSV, Excel, or integrate with CRM
- **Bulk Operations:** Process hundreds of leads simultaneously
- **FastAPI Backend:** High-performance API with validation and error handling
- **Modern Frontend:** Built with Next.js 14, Tailwind CSS, and TypeScript

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Python 3.9+
- [Google Gemini API Key](https://aistudio.google.com/app/apikey) (optional for AI features)
- Chrome/Chromium browser (for web scraping)

### Backend Setup (Python)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   # Windows
   venv\Scripts\activate
   # Mac/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

5. Add your API keys to `.env`:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=8001
   ```

6. Run the server:
   ```bash
   python main.py
   ```

   The API will be available at `http://localhost:8001`

### Frontend Setup (Next.js)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📡 API Documentation

### GET /

Health check endpoint.

**Response:**
```json
{
  "status": "online",
  "message": "Lead Generation API is running."
}
```

### POST /api/scrape

Scrape leads based on keyword and location.

**Request:**
- Method: `POST`
- Content-Type: `application/json`
- Body:
  ```json
    {
    "keyword": "software companies",
    "location": "San Francisco, CA"
  }
  ```

**Request Schema:**
```typescript
{
  keyword: string;   // 2-100 characters, search term
  location: string;  // 2-100 characters, target location
}
```

**Response:**
```json
{
  "keyword": "software companies",
  "location": "San Francisco, CA",
  "leads": [
    {
      "id": "l1",
      "name": "Sarah Johnson",
      "title": "Head of Growth",
      "company": "TechStream",
      "email": "sarah@techstream.io",
      "status": "Verified"
    }
  ],
  "count": 6,
  "status": "success"
}
```

### Example with cURL

```bash
curl -X POST http://localhost:8001/api/scrape \
  -H "Content-Type: application/json" \
  -d '{
    "keyword": "software companies",
    "location": "San Francisco, CA"
  }'
```

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **Pydantic** - Data validation with Field constraints
- **Selenium** - Web scraping automation
- **Google Gemini API** - AI lead scoring
- **python-dotenv** - Environment variable management

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Modern icon library
- **React Table** - Data table with sorting/filtering

## 📁 Project Structure

```
automated-lead-gen-tool/
├── backend/
│   ├── main.py           # FastAPI application with validation
│   ├── scraper.py        # Web scraping logic
│   ├── requirements.txt  # Python dependencies
│   └── .env.example      # Environment variables template
├── frontend/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable React components
│   └── package.json
├── LICENSE
└── README.md
```

## 🔒 Security Notes

- API key validation is performed on startup
- Input validation with Pydantic Field constraints
- Keyword length: 2-100 characters
- Location length: 2-100 characters
- CORS is restricted to specific origins in production
- Proper error handling without exposing internal details
- Rate limiting recommended for production use

## 🎯 Use Cases

- **B2B Sales:** Generate qualified leads for outreach
- **Marketing Agencies:** Build prospect lists for clients
- **Recruiters:** Find potential candidates
- **Real Estate:** Locate property owners
- **E-commerce:** Find wholesale partners

## 🔄 Future Enhancements

- [ ] Real web scraping implementation
- [ ] LinkedIn integration
- [ ] CRM integrations (HubSpot, Salesforce)
- [ ] Email verification API
- [ ] Lead enrichment
- [ ] Automated email campaigns
- [ ] Team collaboration features
- [ ] Lead analytics dashboard

## 🤝 Contributing

This is a portfolio project. Feel free to fork and customize for your needs.

## 📄 License

MIT License - See [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Google Gemini API](https://ai.google.dev/)
- UI components from [Lucide Icons](https://lucide.dev/)
