// pages/services/scale-syllabus.js
import Layout from "../../components/Layout"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion"

export default function ScaleSyllabus() {
  const weeks = [
    {
      title: "Week 1 — Company Clarity Brief",
      details: [
        { label: "Objective", text: "Define mission, identify top chaos points, and align team vision." },
        { label: "Pre-Work", text: "Complete the 'Fog-to-Focus' audit and bring your top 5 priorities." },
        { label: "Live Session", text: "Vision sharing exercise (15m); Chaos mapping workshop (30m); Q&A (15m)." },
        { label: "Post-Work", text: "Distribute the Prioritization Board and set review reminders." },
      ],
    },
    {
      title: "Week 2 — Delegation & Workflow Design",
      details: [
        { label: "Objective", text: "Systematize task hand-offs and streamline inbox workflows." },
        { label: "Pre-Work", text: "Track personal and team tasks for 3 days using the Task Tracker template." },
        { label: "Live Session", text: "Inbox triage drills (20m); Build Delegation Matrix per role (25m); SOP drafting (15m)." },
        { label: "Post-Work", text: "Implement Inbox Triage SOP and delegate at least 5 tasks." },
      ],
    },
    {
      title: "Week 3 — SOP Studio",
      details: [
        { label: "Objective", text: "Capture tribal knowledge into standardized SOPs." },
        { label: "Pre-Work", text: "Identify a high-frequency process and outline its steps." },
        { label: "Live Session", text: "SOP template walkthrough (10m); Screen-record build (35m); Peer feedback (15m)." },
        { label: "Post-Work", text: "Publish first SOP to the team knowledge base and gather feedback." },
      ],
    },
    {
      title: "Week 4 — Data & Dashboard Build",
      details: [
        { label: "Objective", text: "Create a live KPI dashboard for critical business metrics." },
        { label: "Pre-Work", text: "Provide raw data sources and metric definitions." },
        { label: "Live Session", text: "Dashboard design principles (15m); Build in PowerBI/Sheets (30m); Review (15m)." },
        { label: "Post-Work", text: "Share dashboard link with stakeholders and embed in team routine." },
      ],
    },
    {
      title: "Week 5 — Execution Rhythm Setup",
      details: [
        { label: "Objective", text: "Embed a weekly review loop to track progress and block issues." },
        { label: "Pre-Work", text: "Compile current KPIs and a list of pressing action items." },
        { label: "Live Session", text: "Run first Weekly Review live (40m); Issue triage protocol (20m)." },
        { label: "Post-Work", text: "Log outcomes in the Review Companion and assign follow-ups." },
      ],
    },
    {
      title: "Week 6 — Continuous-Scale Playbook",
      details: [
        { label: "Objective", text: "Integrate all systems and plan 90-day improvement sprints." },
        { label: "Pre-Work", text: "Complete the Ops Cadence checklist and gather sprint ideas." },
        { label: "Live Session", text: "System Sync walkthrough (20m); Sprint planning workshop (30m); Graduation (10m)." },
        { label: "Post-Work", text: "Finalize 90-day sprint roadmap and set calendar triggers." },
      ],
    },
  ]

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/services/scale" className="flex items-center text-mosaics-dark mb-8 hover:text-mosaics-purple">
          <ChevronLeft className="w-5 h-5 mr-2" /> Back to Scale Stack
        </Link>

        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">Scale Stack — Full 6-Week Syllabus</h1>
        <p className="text-gray-700 mb-8">
          Dive deep into each week’s agenda, pre-work, live exercises, and post-session deliverables—designed to install a
          robust, team-wide operating rhythm.
        </p>

        <Accordion type="multiple" collapsible className="space-y-4">
          {weeks.map((w, i) => (
            <AccordionItem key={i} value={`week-${i}`}>
              <AccordionTrigger className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mosaics-dark to-mosaics-purple">{w.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="mt-2 space-y-2">
                  {w.details.map(({ label, text }) => (
                    <li key={label}>
                      <strong>{label}:</strong> {text}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Layout>
  )
}
