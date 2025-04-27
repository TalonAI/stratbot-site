// components/ui/accordion.js
import React from "react"

/**
 * A simple accordion container.
 */
export function Accordion({ children, className = "" }) {
  return <div className={className}>{children}</div>
}

/**
 * Accordion item that is expanded by default.
 */
export function AccordionItem({ children, className = "" }) {
  return (
    <details open className={`mb-4 ${className}`}>
      {children}
    </details>
  )
}

/**
 * The trigger/summary for each accordion item.
 */
export function AccordionTrigger({ children, className = "" }) {
  return (
    <summary
      className={`cursor-pointer font-medium py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded ${className}`}>
      {children}
    </summary>
  )
}

/**
 * The collapsible content for each accordion item.
 */
export function AccordionContent({ children, className = "" }) {
  return <div className={`mt-2 px-4 ${className}`}>{children}</div>
}
