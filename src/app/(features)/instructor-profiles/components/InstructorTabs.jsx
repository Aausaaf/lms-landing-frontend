import React, { useState } from 'react';
import Icon from './AppIcon';

const InstructorTabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: 'User' },
    { id: 'courses', label: 'Courses', icon: 'BookOpen' },
    { id: 'achievements', label: 'Achievements', icon: 'Trophy' },
    { id: 'feedback', label: 'Student Feedback', icon: 'MessageSquare' }
  ];

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-border">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 ${
                activeTab === tab.id
                  ? 'text-primary border-primary bg-primary/5' :'text-muted-foreground border-transparent hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.props.tabId === activeTab) {
            return child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default InstructorTabs;