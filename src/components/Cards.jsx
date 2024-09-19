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

export const Cards = ({ icon: Icon, tittle, text, color = "blue" }) => {
  const colors = colorClasses[color] || colorClasses["blue"];

  return (
    <div className={`p-4 rounded shadow-md transition-all duration-300 ${colors.cardBg}`}>
      <div className={`p-3 rounded-lg inline-block w-auto h-auto ${colors.iconBg}`}>
        {Icon && <Icon className={`text-3xl ${colors.iconColor}`} />}
      </div>
      <h1 className="text-2xl text-black font-bold mb-2">{tittle}</h1>
      <p className="text-justify text-black break-words max-w-full">{text}</p>
    </div>
  );
};
