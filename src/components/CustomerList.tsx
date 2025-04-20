import React from 'react';
import CustomerCard from './CustomerCard';
import { Customer } from '../App';

interface CustomerListProps {
  customers: Customer[];
  highlightedIds: number[];
}

const CustomerList: React.FC<CustomerListProps> = ({
  customers,
  highlightedIds,
}) => {
  if (customers.length === 0) {
    return <p>No customers found.</p>;
  }

  return (
    <div>
      {customers.map((customer) => (
        <CustomerCard
          key={customer.id}
          firstName={customer.firstName}
          lastName={customer.lastName}
          birthDate={customer.birthDate}
          city={customer.city}
          isHighlighted={highlightedIds.includes(customer.id)}
        />
      ))}
    </div>
  );
};

export default CustomerList;
