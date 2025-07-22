import React from 'react';
import Icon from './AppIcon';

const InstructorStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Clock',
      label: 'Teaching Experience',
      value: stats.experience,
      color: 'text-primary'
    },
    {
      icon: 'Users',
      label: 'Total Students',
      value: stats.totalStudents.toLocaleString(),
      color: 'text-secondary'
    },
    {
      icon: 'BookOpen',
      label: 'Courses Created',
      value: stats.coursesCreated,
      color: 'text-warning'
    },
    {
      icon: 'Star',
      label: 'Average Rating',
      value: `${stats.averageRating}/5`,
      color: 'text-success'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
        Quick Stats
      </h3>
      
      <div className="space-y-4">
        {statItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg bg-muted flex items-center justify-center ${item.color}`}>
                <Icon name={item.icon} size={16} />
              </div>
              <span className="text-sm font-body text-muted-foreground">
                {item.label}
              </span>
            </div>
            <span className="text-sm font-medium text-foreground">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Rating Progress */}
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-body text-muted-foreground">Student Satisfaction</span>
          <span className="text-sm font-medium text-foreground">{stats.satisfactionRate}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-success h-2 rounded-full transition-all duration-300"
            style={{ width: `${stats.satisfactionRate}%` }}
          />
        </div>
      </div>

      {/* Achievements Count */}
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Trophy" size={16} className="text-warning" />
            <span className="text-sm font-body text-muted-foreground">Achievements</span>
          </div>
          <span className="text-sm font-medium text-foreground">
            {stats.achievementsCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InstructorStats;