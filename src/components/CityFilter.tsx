import React from 'react';

interface CityFilterProps {
  cities: string[];
  selectedCity: string;
  onCityChange: (city: string) => void;
}

const CityFilter: React.FC<CityFilterProps> = ({
  cities,
  selectedCity,
  onCityChange,
}) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <select
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <option value="">All Cities</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CityFilter;
