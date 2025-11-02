'use client'

import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filterSections = [
    {
      id: 'idealFor',
      title: 'IDEAL FOR',
      options: ['Men', 'Women', 'Baby & Kids']
    },
    {
      id: 'occasion',
      title: 'OCCASION',
      options: []
    },
    {
      id: 'work',
      title: 'WORK',
      options: []
    },
    {
      id: 'fabric',
      title: 'FABRIC',
      options: []
    },
    {
      id: 'segment',
      title: 'SEGMENT',
      options: []
    },
    {
      id: 'suitableFor',
      title: 'SUITABLE FOR',
      options: []
    },
    {
      id: 'rawMaterials',
      title: 'RAW MATERIALS',
      options: []
    },
    {
      id: 'pattern',
      title: 'PATTERN',
      options: []
    }
  ];

  return (
    <aside className="filters-sidebar">
      
      <div className="filter-item customizable-section">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            className="filter-checkbox"
            onChange={(e) => onFilterChange && onFilterChange('customizable', e.target.checked)}
          />
          <span className="checkbox-text">CUSTOMIZABLE</span>
        </label>
      </div>

      
      {filterSections.map((section) => (
        <div key={section.id} className="filter-section">
          <div 
            className="filter-header"
            onClick={() => toggleSection(section.id)}
          >
            <h3 className="filter-title">{section.title}</h3>
            <span className={`arrow ${expandedSections[section.id] ? 'expanded' : ''}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>

          {expandedSections[section.id] && (
            <div className="filter-content">
              <p className="filter-all-text">All</p>
              
              {section.options.length > 0 && (
                <div className="filter-options">
                  {section.options.map((option, index) => (
                    <label key={index} className="checkbox-label">
                      <input 
                        type="checkbox" 
                        className="filter-checkbox"
                        onChange={(e) => onFilterChange && onFilterChange(section.id, option, e.target.checked)}
                      />
                      <span className="checkbox-text">{option}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Filters;