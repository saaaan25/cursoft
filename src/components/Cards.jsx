import React from "react";

const colorClasses = {
  red: {
    cardBg: "hover:bg-red-200",  
    iconBg: "bg-red-100",  
    iconColor: "text-red-500", 
  },
  blue: {
    cardBg: "hover:bg-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  green: {
    cardBg: "hover:bg-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
  },
  yellow: {
    cardBg: "hover:bg-yellow-200",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  purple: {
    cardBg: "hover:bg-purple-200",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  rose: {
    cardBg: "hover:bg-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
};

export const Cards = ({ icon: Icon, title, text, color = "blue" }) => {
  const colors = colorClasses[color] || colorClasses["blue"];

  return (
    <div className={`p-8 rounded-2xl bg-secondary/10 border border-primarytext-text duration-300 hover:-translate-y-1 transition-transform`}>
      <div className="flex gap-2">
      <div className={`p-3 rounded-lg inline-block w-auto h-auto `}>
        {Icon && <Icon className={`text-3xl text-primary`} />}
      </div>
      <h3 className="text-2xl inline text-current font-semibold border-b border-b-primary mb-2">{title}</h3>
      </div>
      <p className="text-justify text-current break-words max-w-full">{text}</p>
    </div>
  );
};
