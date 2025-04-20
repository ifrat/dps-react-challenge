import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CityFilter from './components/CityFilter';
import HighlightToggle from './components/HighlightToggle';
import CustomerList from './components/CustomerList';
import './styles/App.css';


export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  city: string;
}

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [highlightOldest, setHighlightOldest] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((res) => {
        const users = res.data.users.map((user: any) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          birthDate: user.birthDate,
          city: user.address.city
        }));
        setCustomers(users);
      });
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  const filteredCustomers = customers
    .filter((c) =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter((c) => (selectedCity ? c.city === selectedCity : true));

  const getOldestPerCity = (customers: Customer[]) => {
    const map: { [city: string]: Customer } = {};
    customers.forEach((c) => {
      const existing = map[c.city];
      if (!existing || new Date(c.birthDate) < new Date(existing.birthDate)) {
        map[c.city] = c;
      }
    });
    return Object.values(map).map((c) => c.id);
  };

  const highlightedIds = highlightOldest ? getOldestPerCity(filteredCustomers) : [];

  const allCities = Array.from(new Set(customers.map((c) => c.city)));

  return (
    <div className="app-container">
      <h1>CRM - Customer List</h1>
    <div className="filters">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <CityFilter cities={allCities} selectedCity={selectedCity} onCityChange={setSelectedCity} />
    </div>
      <div className='filters input'>
      <HighlightToggle isChecked={highlightOldest} onToggle={() => setHighlightOldest(!highlightOldest)} />    
      </div>
      <CustomerList customers={filteredCustomers} highlightedIds={highlightedIds} />
    </div>
  );
};

export default App;
