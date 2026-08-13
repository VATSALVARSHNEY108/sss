"use client";

import React, { useState } from "react";
import { LayoutGrid, Sparkles } from "lucide-react";

export function ServicesInteractive() {
  const categories = [
    {
      title: "Education",
      items: ["AI Study Planner", "AI Personalized Tutor", "AI Doubt Solver", "AI Quiz Generator", "AI Flashcard Generator", "AI Notes Generator", "AI Assignment Assistant", "AI Exam Preparation Assistant", "AI Lecture Summarizer", "AI Homework Checker", "AI Plagiarism Checker", "AI Coding Mentor", "AI Career Guidance", "AI Scholarship Finder", "AI Admission Counselor"]
    },
    {
      title: "Business & Productivity",
      items: ["AI Business Assistant", "AI Email Writer", "AI Meeting Summarizer", "AI Proposal Generator", "AI Report Generator", "AI Presentation Creator", "AI Document Analyzer", "AI Knowledge Base Assistant", "AI Workflow Automation", "AI Project Manager", "AI CRM Assistant", "AI Data Entry Automation", "AI Invoice Processing", "AI Contract Analyzer", "AI Compliance Assistant"]
    },
    {
      title: "AI Workflow Automation",
      items: ["AI Approval Workflows", "AI Email-to-Action Automation", "AI Form Processing", "AI Task Routing", "AI Repetitive Task Automation", "AI Rules Engine", "AI Trigger-Based Automation", "AI Cross-App Workflow Automation", "AI Exception Handling", "AI Human-in-the-Loop Workflows", "AI Workflow Monitoring", "AI Process Mining"]
    },
    {
      title: "Document & Knowledge Automation",
      items: ["AI Document Classification", "AI Data Extraction", "AI OCR Automation", "AI Document Routing", "AI Knowledge Base Creation", "AI Semantic Search", "AI Document Summarization", "AI Policy Assistant", "AI Records Management", "AI Document Redaction", "AI Contract Lifecycle Automation", "AI Internal Search Assistant"]
    },
    {
      title: "Customer Operations Automation",
      items: ["AI Customer Onboarding", "AI Ticket Classification", "AI Ticket Resolution", "AI Customer Follow-Up", "AI Service Request Automation", "AI Complaint Resolution", "AI Customer Health Scoring", "AI Churn Prevention", "AI Knowledge-Powered Support", "AI Escalation Routing", "AI Case Summarization", "AI Customer Success Copilot"]
    },
    {
      title: "Finance & Back-Office Automation",
      items: ["AI Accounts Payable Automation", "AI Accounts Receivable Automation", "AI Expense Approval", "AI Purchase Order Matching", "AI Reconciliation Automation", "AI Cash Flow Forecasting", "AI Financial Close Automation", "AI Tax Document Processing", "AI Payroll Query Assistant", "AI Vendor Onboarding", "AI Audit Evidence Collection", "AI Finance Reporting"]
    },
    {
      title: "Sales & Revenue Automation",
      items: ["AI Lead Qualification", "AI Lead Enrichment", "AI Sales Follow-Up", "AI CRM Data Capture", "AI Meeting-to-CRM Automation", "AI Opportunity Scoring", "AI Proposal Automation", "AI Quote Generation", "AI Pipeline Forecasting", "AI Sales Coaching", "AI Renewal Prediction", "AI Revenue Operations Assistant"]
    },
    {
      title: "Marketing & Content Automation",
      items: ["AI Content Repurposing", "AI Blog Workflow Automation", "AI Social Publishing", "AI Campaign Brief Generation", "AI Audience Segmentation", "AI Personalization Automation", "AI Email Campaign Automation", "AI Creative Variant Generation", "AI Marketing Analytics", "AI SEO Content Workflow", "AI Brand Voice Assistant", "AI Campaign Optimization"]
    },
    {
      title: "IT & DevOps Automation",
      items: ["AI Incident Triage", "AI Alert Correlation", "AI Root Cause Analysis", "AI Infrastructure Monitoring", "AI Log Analysis", "AI Release Notes Generator", "AI Deployment Assistant", "AI Cloud Cost Optimization", "AI Access Request Automation", "AI IT Service Desk", "AI Security Remediation", "AI Runbook Automation"]
    },
    {
      title: "Operations & Supply Chain Automation",
      items: ["AI Order Processing", "AI Inventory Replenishment", "AI Shipment Tracking", "AI Dispatch Automation", "AI Demand Planning", "AI Supplier Management", "AI Warehouse Task Assignment", "AI Route Optimization", "AI Quality Workflow Automation", "AI Field Service Scheduling", "AI Operations Control Tower", "AI Maintenance Scheduling"]
    },
    {
      title: "Sales & Marketing",
      items: ["AI Lead Generator", "AI Cold Email Generator", "AI Sales Assistant", "AI WhatsApp Sales Bot", "AI Voice Calling Agent", "AI Customer Segmentation", "AI Social Media Manager", "AI Content Writer", "AI SEO Optimizer", "AI Ad Copy Generator", "AI Campaign Analyzer", "AI Product Description Generator", "AI Influencer Finder", "AI Competitor Analysis", "AI Market Research"]
    },
    {
      title: "Customer Support",
      items: ["AI Chatbot", "AI Voice Support Agent", "AI Ticket Routing", "AI FAQ Assistant", "AI Complaint Analyzer", "AI Sentiment Analysis", "AI Customer Feedback Analyzer", "AI Live Translation", "AI Help Desk Automation", "AI Knowledge Assistant"]
    },
    {
      title: "HR & Recruitment",
      items: ["AI Resume Analyzer", "AI Resume Builder", "AI Interview Simulator", "AI Candidate Screening", "AI Employee Onboarding", "AI Performance Analysis", "AI Attendance Assistant", "AI Payroll Assistant", "AI Training Assistant", "AI HR Chatbot"]
    },
    {
      title: "Finance",
      items: ["AI Expense Tracker", "AI Budget Planner", "AI Financial Advisor", "AI Tax Assistant", "AI Invoice Generator", "AI Fraud Detection", "AI Investment Insights", "AI Loan Eligibility Checker", "AI Risk Analysis", "AI Accounting Assistant"]
    },
    {
      title: "Healthcare",
      items: ["AI Symptom Checker", "AI Appointment Assistant", "AI Medical Report Analyzer", "AI Prescription Reader", "AI Health Monitoring", "AI Mental Wellness Assistant", "AI Diet Planner", "AI Fitness Coach", "AI Medical Chatbot", "AI Drug Information Assistant"]
    },
    {
      title: "Legal",
      items: ["AI Legal Research", "AI Contract Review", "AI Agreement Generator", "AI Compliance Checker", "AI Case Summarizer", "AI Legal Chatbot", "AI Document Verification", "AI Evidence Organizer"]
    },
    {
      title: "E-Commerce",
      items: ["AI Product Recommendation", "AI Inventory Prediction", "AI Demand Forecasting", "AI Price Optimization", "AI Order Tracking Assistant", "AI Shopping Assistant", "AI Review Analyzer", "AI Return Management", "AI Product Image Generator", "AI Virtual Try-On"]
    },
    {
      title: "Manufacturing",
      items: ["AI Predictive Maintenance", "AI Quality Inspection", "AI Production Planning", "AI Supply Chain Optimization", "AI Warehouse Management", "AI Robotics Control", "AI Inventory Optimization", "AI Fault Detection"]
    },
    {
      title: "Agriculture",
      items: ["AI Crop Disease Detection", "AI Yield Prediction", "AI Smart Irrigation", "AI Soil Analysis", "AI Weather Prediction", "AI Farm Monitoring", "AI Livestock Monitoring", "AI Pest Detection"]
    },
    {
      title: "Real Estate",
      items: ["AI Property Recommendation", "AI Price Estimation", "AI Virtual Property Tour", "AI Rental Assistant", "AI Lead Qualification", "AI Property Description Generator", "AI Market Analysis"]
    },
    {
      title: "Cybersecurity",
      items: ["AI Threat Detection", "AI Phishing Detection", "AI Malware Analysis", "AI Security Monitoring", "AI Identity Verification", "AI Vulnerability Scanner", "AI Fraud Detection"]
    },
    {
      title: "Creative & Media",
      items: ["AI Image Generator", "AI Video Generator", "AI Music Generator", "AI Voice Cloning", "AI Podcast Generator", "AI Script Writer", "AI Thumbnail Generator", "AI Logo Designer", "AI Animation Creator", "AI Video Editor"]
    },
    {
      title: "Software Development",
      items: ["AI Code Generator", "AI Code Reviewer", "AI Bug Detection", "AI Documentation Generator", "AI Test Case Generator", "AI API Generator", "AI Database Designer", "AI DevOps Assistant"]
    },
    {
      title: "Research & Analytics",
      items: ["AI Research Assistant", "AI Paper Summarizer", "AI Data Visualization", "AI Predictive Analytics", "AI Business Intelligence", "AI Dashboard Generator", "AI Trend Analysis", "AI Decision Support"]
    },
    {
      title: "Travel & Hospitality",
      items: ["AI Trip Planner", "AI Hotel Assistant", "AI Flight Booking Assistant", "AI Travel Guide", "AI Itinerary Generator", "AI Language Translator", "AI Expense Planner"]
    },
    {
      title: "Smart Automation",
      items: ["AI Voice Assistant", "AI Personal Assistant", "AI Smart Home Controller", "AI IoT Monitoring", "AI Document Automation", "AI OCR Scanner", "AI Form Automation", "AI Process Automation (RPA)", "AI Scheduling Assistant", "AI Notification Assistant"]
    },
    {
      title: "Advanced AI Services",
      items: ["AI Agents", "Multi-Agent Systems", "AI Copilots", "AI Voice Agents", "AI Search Engine", "AI Recommendation Engine", "AI Decision Engine", "AI Digital Twin", "AI Knowledge Graph", "AI Autonomous Workflow Automation", "AI Retrieval-Augmented Generation (RAG)", "AI Computer Vision Solutions", "AI Speech-to-Text", "AI Text-to-Speech", "AI Translation Engine", "AI Predictive Intelligence", "AI Generative Design", "AI Document Intelligence", "AI Business Intelligence Platform", "Custom AI Model Development"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="services-stacked-layout">
      <div className="services-top-tabs" role="tablist" aria-label="Service categories">
        {categories.map((cat, i) => (
          <button
            key={cat.title}
            type="button"
            className={`service-tab ${i === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(i)}
            role="tab"
            aria-selected={i === activeIndex}
            aria-controls="service-category-panel"
          >
            <span className="service-tab__index">{String(i + 1).padStart(2, "0")}</span>
            <span>{cat.title}</span>
          </button>
        ))}
      </div>
      <div id="service-category-panel" className="services-content-area template-card" role="tabpanel" aria-live="polite">
        <div className="services-content-heading">
          <LayoutGrid size={24} />
          <div>
            <p className="services-content-kicker">Category {String(activeIndex + 1).padStart(2, "0")} / {categories.length}</p>
            <h3>{categories[activeIndex].title}</h3>
          </div>
          <span className="services-content-count">{categories[activeIndex].items.length} capabilities</span>
        </div>
        <div className="service-tags-grid">
          {categories[activeIndex].items.map((item, j) => (
            <div key={j} className="service-pill-large">
              <Sparkles size={14} className="pill-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
