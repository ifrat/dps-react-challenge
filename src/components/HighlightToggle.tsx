import React from 'react';

interface HighlightToggleProps {
  isChecked: boolean;
  onToggle: () => void;
}

const HighlightToggle: React.FC<HighlightToggleProps> = ({ isChecked, onToggle }) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input type="checkbox" checked={isChecked} onChange={onToggle} />
        Highlight oldest customer in each city
      </label>
    </div>
  );
};

export default HighlightToggle;
