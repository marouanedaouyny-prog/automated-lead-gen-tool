"use client";

import { useState } from "react";
import { Search, Download, BarChart3 } from "lucide-react";

export default function LeadGenDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [leads, setLeads] = useState<any[]>([]);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Search className="w-8 h-8 text-blue-400" />
            Automated Lead Generator
          </h1>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-gray-400 text-sm">Total Leads</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-gray-400 text-sm">Conversion Rate</h3>
            <p className="text-3xl font-bold">0%</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-gray-400 text-sm">Active Campaigns</h3>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Search for Leads</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter industry or keywords..."
              className="flex-1 bg-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
