import React, { useState } from 'react';
import Icon from './AppIcon';
import VideoPreviewModal from './VideoPreviewModal';
import { Button } from '@/components/ui/button';

const LessonItem = ({ lesson, lessonNumber, isBookmarked, onBookmark }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'videos': return 'Play';
      case 'quizzes': return 'HelpCircle';
      case 'assignments': return 'FileText';
      case 'resources': return 'Download';
      default: return 'FileText';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'videos': return 'text-blue-600';
      case 'quizzes': return 'text-purple-600';
      case 'assignments': return 'text-orange-600';
      case 'resources': return 'text-green-600';
      default: return 'text-muted-foreground';
    }
  };

  const handlePreview = () => {
    if (lesson.isFree || lesson.isEnrolled) {
      setShowPreview(true);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: lesson.title,
        text: lesson.description,
        url: window.location.href + `#lesson-${lesson.id}`,
      });
    } else {
      navigator.clipboard.writeText(window.location.href + `#lesson-${lesson.id}`);
    }
  };

  return (
    <>
      <div className="px-6 py-4 hover:bg-muted/30 transition-colors duration-200">
        <div className="flex items-start space-x-4">
          {/* Lesson Number & Type Icon */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-muted rounded-full">
              <span className="text-xs font-medium text-muted-foreground">
                {lessonNumber}
              </span>
            </div>
            <div className={`flex-shrink-0 ${getTypeColor(lesson.type)}`}>
              <Icon name={getTypeIcon(lesson.type)} size={18} />
            </div>
          </div>

          {/* Lesson Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="text-base font-medium text-foreground mb-1 leading-tight">
                  {lesson.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {lesson.description}
                </p>
              </div>
              
              {/* Access Status */}
              <div className="flex-shrink-0 ml-4">
                {lesson.completed && (
                  <div className="flex items-center space-x-1 text-success">
                    <Icon name="CheckCircle" size={16} />
                    <span className="text-xs font-medium">Completed</span>
                  </div>
                )}
                {!lesson.isEnrolled && !lesson.isFree && (
                  <div className="flex items-center space-x-1 text-warning">
                    <Icon name="Lock" size={16} />
                    <span className="text-xs font-medium">Premium</span>
                  </div>
                )}
                {lesson.isFree && (
                  <div className="flex items-center space-x-1 text-success">
                    <Icon name="Unlock" size={16} />
                    <span className="text-xs font-medium">Free</span>
                  </div>
                )}
              </div>
            </div>

            {/* Lesson Meta */}
            <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={12} />
                <span>{lesson.duration}</span>
              </div>
              {lesson.type === 'videos' && (
                <div className="flex items-center space-x-1">
                  <Icon name="Eye" size={12} />
                  <span>{lesson.views} views</span>
                </div>
              )}
              {lesson.difficulty && (
                <div className="flex items-center space-x-1">
                  <Icon name="BarChart3" size={12} />
                  <span className="capitalize">{lesson.difficulty}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {(lesson.isFree || lesson.isEnrolled) && lesson.type === 'videos' && (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Play"
                  iconPosition="left"
                  onClick={handlePreview}
                >
                  {lesson.isFree ? 'Preview' : 'Watch'}
                </Button>
              )}
              
              {!lesson.isEnrolled && !lesson.isFree && (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Unlock"
                  iconPosition="left"
                  onClick={() => window.location.href = '/course-enrollment-payment'}
                >
                  Unlock
                </Button>
              )}

              <Button
                variant="ghost"
                size="sm"
                iconName={isBookmarked ? 'BookmarkCheck' : 'Bookmark'}
                onClick={onBookmark}
                className={isBookmarked ? 'text-primary' : ''}
              />

              <Button
                variant="ghost"
                size="sm"
                iconName="MessageSquare"
                onClick={() => setShowNotes(!showNotes)}
              />

              <Button
                variant="ghost"
                size="sm"
                iconName="Share2"
                onClick={handleShare}
              />
            </div>

            {/* Notes Section */}
            {showNotes && (
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="StickyNote" size={14} />
                  <span className="text-sm font-medium text-foreground">Notes</span>
                </div>
                <textarea
                  placeholder="Add your notes for this lesson..."
                  className="w-full h-20 p-2 text-sm bg-background border border-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue={lesson.notes || ''}
                />
                <div className="flex justify-end mt-2">
                  <Button variant="outline" size="sm">
                    Save Note
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Preview Modal */}
      {showPreview && (
        <VideoPreviewModal
          lesson={lesson}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
};

export default LessonItem;