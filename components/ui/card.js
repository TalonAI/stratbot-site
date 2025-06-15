import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`${className} rounded-2xl bg-white shadow p-6`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h3 className={`text-xl font-bold ${className}`}>{children}</h3>;
}
