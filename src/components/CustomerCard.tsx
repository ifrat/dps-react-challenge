import React from 'react';
import '../styles/CustomerCard.css';

interface CustomerCardProps {
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
  isHighlighted: boolean;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  firstName,
  lastName,
  birthDate,
  city,
  isHighlighted,
}) => {
  return (
    <div className={`customer-card ${isHighlighted ? 'highlighted' : ''}`}>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>
        <strong>Birth Date:</strong> {new Date(birthDate).toLocaleDateString()}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
    </div>
  );
};

export default CustomerCard;
