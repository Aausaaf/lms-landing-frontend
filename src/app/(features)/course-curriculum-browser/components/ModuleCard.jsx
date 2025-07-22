import React, { useState } from 'react';
import Icon from './AppIcon';
import LessonItem from './LessonItem';

const ModuleCard = ({ module, isExpanded, onToggle, searchTerm, activeFilters }) => {
  const [bookmarkedLessons, setBookmarkedLessons] = useState(new Set());

  const handleBookmark = (lessonId) => {
    const newBookmarks = new Set(bookmarkedLessons);
    if (newBookmarks.has(lessonId)) {
      newBookmarks.delete(lessonId);
    } else {
      newBookmarks.add(lessonId);
    }
    setBookmarkedLessons(newBookmarks);
  };

  const filteredLessons = module.lessons.filter(lesson => {
    // Search filter
    const matchesSearch = !searchTerm || 
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase());

    // Content type filter
    const matchesFilter = activeFilters.includes('all') || 
      activeFilters.includes(lesson.type);

    return matchesSearch && matchesFilter;
  });

  const completedLessons = module.lessons.filter(lesson => lesson.completed).length;
  const progressPercentage = (completedLessons / module.lessons.length) * 100;

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
      {/* Module Header */}
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left hover:bg-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary">
                  {module.moduleNumber}
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {module.title}
              </h3>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>{module.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="PlayCircle" size={14} />
                <span>{module.lessons.length} lessons</span>
              </div>
              {module.isEnrolled && (
                <div className="flex items-center space-x-1">
                  <Icon name="CheckCircle" size={14} className="text-success" />
                  <span className="text-success">
                    {completedLessons}/{module.lessons.length} completed
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {module.isEnrolled && (
              <div className="hidden sm:block">
                <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-success transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            )}
            <Icon 
              name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
              size={20} 
              className="text-muted-foreground" 
            />
          </div>
        </div>
      </button>

      {/* Module Content */}
      {isExpanded && (
        <div className="border-t border-border">
          {/* Module Description */}
          <div className="px-6 py-4 bg-muted/30">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {module.description}
            </p>
          </div>

          {/* Lessons List */}
          <div className="divide-y divide-border">
            {filteredLessons.length > 0 ? (
              filteredLessons.map((lesson, index) => (
                <LessonItem
                  key={lesson.id}
                  lesson={lesson}
                  lessonNumber={index + 1}
                  isBookmarked={bookmarkedLessons.has(lesson.id)}
                  onBookmark={() => handleBookmark(lesson.id)}
                />
              ))
            ) : (
              <div className="px-6 py-8 text-center">
                <Icon name="Search" size={32} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">
                  No lessons found matching your search criteria
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;