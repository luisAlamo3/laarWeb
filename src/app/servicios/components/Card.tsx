import React from "react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function Card({ icon, title, description, className = "" }: CardProps) {
  return (
    <div className={`card-bg p-6 rounded-2xl text-center transition-transform transform hover:scale-105 duration-300 ${className}`}>
      <div className="icon-bg w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
