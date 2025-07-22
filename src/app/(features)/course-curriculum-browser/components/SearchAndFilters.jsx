import React, { useState } from 'react';
import Icon from './AppIcon';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const SearchAndFilters = ({ onSearch, onFilterChange, activeFilters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const contentTypes = [
    { id: 'all', label: 'All Content', icon: 'Grid3X3' },
    { id: 'videos', label: 'Videos', icon: 'Play' },
    { id: 'quizzes', label: 'Quizzes', icon: 'HelpCircle' },
    { id: 'assignments', label: 'Assignments', icon: 'FileText' },
    { id: 'resources', label: 'Resources', icon: 'Download' }
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterClick = (filterId) => {
    onFilterChange(filterId);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      {/* Search Input */}
      <div className="relative mb-4">
        <Input
          type="search"
          placeholder="Search lessons, topics, or keywords..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="pr-10"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <Icon name="Search" size={18} className="text-muted-foreground" />
        </div>
      </div>

      {/* Filter Toggle Button (Mobile) */}
      <div className="flex items-center justify-between mb-4 md:hidden">
        <span className="text-sm font-medium text-foreground">Filters</span>
        <Button
          variant="outline"
          size="sm"
          iconName={showFilters ? 'ChevronUp' : 'ChevronDown'}
          iconPosition="right"
          onClick={() => setShowFilters(!showFilters)}
        >
          Content Type
        </Button>
      </div>

      {/* Filter Chips */}
      <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
        <div className="flex flex-wrap gap-2">
          {contentTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => handleFilterClick(type.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilters.includes(type.id)
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              <Icon name={type.icon} size={14} />
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {activeFilters.length > 0 && !activeFilters.includes('all') && (
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2">
            <Icon name="Filter" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {activeFilters.length} filter{activeFilters.length > 1 ? 's' : ''} active
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={() => onFilterChange('all')}
          >
            Clear
          </Button>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilters;