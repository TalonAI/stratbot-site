import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { ChevronRight } from "lucide-react"

export default function OpsCadenceProgram() {
  const stacks = [
    {
      title: "Clarity Stack",
      desc: "1-week founder sprint to surface leverage points and install a Strategic Advisor GPT.",
      bg: "bg-gradient-to-br from-sky-50 to-sky-100"
    },
    {
      title: "Command Stack",
      desc: "2-week rollout of core SOPs, negotiation aids, and live dashboards with the founder + lieutenants.",
      bg: "bg-gradient-to-br from-cyan-50 to-cyan-100"
    },
    {
      title: "Scale Stack (6-Week Team Program)",
      desc: "Cross-functional team training that multiplies staff output while the founder stays strategic.",
      bg: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    }
  ]

  const weeks = [
    {
      title: "Week 1 — Company Clarity Brief",
      items: [
        "Align on mission, KPIs, and roles",
        "Founder shares vision; team maps responsibilities",
        "Outcome: Shared Clarity Brief + Strategic Advisor access"
      ]
    },
    {
      title: "Week 2 — Delegation & Workflows",
      items: [
        "Inbox triage / task router drills",
        "Each role completes Delegation Matrix",
        "Outcome: ≥5 tasks delegated per staff member"
      ]
    },
    {
      title: "Week 3 — SOP Studio",
      items: [
        "SOP template walkthrough & screen-record challenge",
        "Peer critique to refine first SOP",
        "Outcome: Published SOP + Playbook generator"
      ]
    },
    {
      title: "Week 4 — Data & Dashboards",
      items: [
        "KPI minimalism & live board build",
        "Connect tools (PowerBI, Sheets, QBO)",
        "Outcome: Real-time KPI dashboard"
      ]
    },
    {
      title: "Week 5 — Execution Rhythm",
      items: [
        "Run first live Weekly Review",
        "Red/Yellow/Green reporting drills",
        "Outcome: Weekly cadence embedded"
      ]
    },
    {
      title: "Week 6 — Continuous-Scale Playbook",
      items: [
        "System Sync final run-through",
        "Team commits to 90-day sprint projects",
        "Outcome: Improvement Sprint Planner GPT"
      ]
    }
  ]

  return (
    <div className="flex flex-col gap-12 pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Run Your Business with Rhythm, Not Reaction</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          The 6-Week AI Operational Leadership Program that turns chaos into scalable systems.
        </p>
      </section>

      {/* Journey Stacks */}
      <section className="px-6 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold">Your Leverage Journey</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {stacks.map((s) => (
            <div key={s.title} className={`${s.bg} p-6 rounded-lg shadow`}>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Week Breakdown */}
      <section className="px-6 mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-6">6-Week Program Breakdown</h2>
        {weeks.map((w) => (
          <details key={w.title} className="mb-4 border rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">{w.title}</summary>
            <ul className="mt-2 ml-4 space-y-2">
              {w.items.map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <Link href="/contact">
          <button className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Apply for Next Cohort
            <ChevronRight className="ml-2" />
          </button>
        </Link>
      </section>
    </div>
  )
}
