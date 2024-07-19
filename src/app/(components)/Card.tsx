import React from 'react';

interface CardProps {
  header: string;
  body: string;
  headerColor: string;
  bodyColor: string;
}

const Card: React.FC<CardProps> = ({ header, body, headerColor, bodyColor }) => {
  return (
    <div className={`w-1/3 p-4 mb-4 ${bodyColor} shadow-lg rounded-lg`}>
      <h2 className={`text-xl font-bold ${headerColor}`}>{header}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Card;
