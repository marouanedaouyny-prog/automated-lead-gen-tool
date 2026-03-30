"use client";

import { useState } from "react";
import { Users, Search, Download, CheckCircle, XCircle, Loader2, Filter, Mail } from "lucide-react";

export default function LeadGenDashboard() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [leads, setLeads] = useState([]);

  const handleSearch = async () => {
    if (!keyword || !location) {
      alert("Please enter both job title and location.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8001/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, location }),
      });
      const data = await response.json();
      setLeads(data.leads);
    } catch (err) {
      console.error(err);
      alert("Failed to connect to LeadGen API. Please make sure the backend is running on port 8001.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-center justify-between bg-white p-8 rounded-3xl shadow-sm border space-y-4 md:space-y-0">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              <Users className="text-indigo-600" />
              LeadCommand <span className="text-indigo-600">Pro</span>
            </h1>
            <p className="text-slate-500 mt-1 font-medium italic">Automated B2B Lead Extraction & Verification Engine.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition text-sm">
              <Filter size={18} /> Advanced Filters
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20 text-sm">
              <Download size={18} /> Export Leads
            </button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
             <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
             <input 
               className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition font-medium" 
               placeholder="Job Title (e.g., Marketing Director)..."
               value={keyword}
               onChange={(e) => setKeyword(e.target.value)}
             />
          </div>
          <div className="relative flex-1">
             <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
             <input 
               className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 transition font-medium" 
               placeholder="Location (e.g., London, UK)..."
               value={location}
               onChange={(e) => setLocation(e.target.value)}
             />
          </div>
          <button 
            onClick={handleSearch}
            disabled={loading}
            className="bg-indigo-600 text-white px-10 py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition disabled:opacity-50 min-w-[180px]"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
            {loading ? "Hunting Leads..." : "Find Leads"}
          </button>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b bg-slate-50/50 flex justify-between items-center">
             <span className="font-bold text-slate-500 text-xs uppercase tracking-widest">Prospect Pipeline ({leads.length})</span>
             <div className="flex gap-4 text-xs font-bold">
                <span className="text-green-600 flex items-center gap-1"><CheckCircle size={14}/> 3 Verified</span>
                <span className="text-red-500 flex items-center gap-1"><XCircle size={14}/> 1 Invalid</span>
             </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-8 py-4">Prospect</th>
                  <th className="px-8 py-4">Company & Role</th>
                  <th className="px-8 py-4">Contact</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-slate-50/80 transition">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">{lead.name[0]}</div>
                        <span className="font-bold text-slate-900">{lead.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="font-bold text-slate-800">{lead.title}</p>
                      <span className="text-xs text-slate-400 font-medium">{lead.company}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-indigo-600 font-medium hover:underline cursor-pointer">
                        <Mail size={14} /> {lead.email}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                       <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${lead.status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {lead.status === 'Verified' ? <CheckCircle size={14}/> : <XCircle size={14}/>}
                          {lead.status}
                       </span>
                    </td>
                    <td className="px-8 py-6">
                       <button className="text-indigo-600 font-bold hover:text-indigo-800 transition">Contact</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-2xl shadow-indigo-500/20 flex items-center justify-between">
           <div className="space-y-1">
              <h4 className="text-xl font-bold">Pro Automation Tip</h4>
              <p className="text-sm opacity-80 leading-relaxed max-w-2xl">
                Always verify your leads before exporting to your CRM. LeadCommand Pro uses a multi-step verification process to ensure your email bounce rate remains below 1%.
              </p>
           </div>
           <CheckCircle size={64} className="opacity-20" />
        </div>
      </div>
    </main>
  );
}
