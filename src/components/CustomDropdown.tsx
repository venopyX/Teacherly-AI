'use client';

import React, { useState, useEffect, useRef } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  name: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  label,
  name
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Get current selected label
  const getCurrentLabel = () => {
    return options.find(option => option.value === value)?.label || options[0].label;
  };
  
  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        <div 
          className="w-full glassmorphism py-3 px-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{getCurrentLabel()}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        
        {/* Dropdown menu */}
        {isOpen && (
          <div 
            className="absolute top-full left-0 right-0 mt-1 glassmorphism rounded-lg py-1 z-10"
          >
            {options.map((option) => (
              <div 
                key={option.value}
                className="py-2 px-4 hover:bg-white/10 cursor-pointer transition-colors"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        
        {/* Hidden input for form submission */}
        <input 
          type="hidden" 
          name={name} 
          value={value} 
        />
      </div>
    </div>
  );
};

export default CustomDropdown;