import React from 'react';
import Icon from './AppIcon';
import { Button } from '@/components/ui/button';

const ProgressSidebar = ({ courseData, onNavigate }) => {
  const totalLessons = courseData.modules.reduce((total, module) => total + module.lessons.length, 0);
  const completedLessons = courseData.modules.reduce((total, module) => 
    total + module.lessons.filter(lesson => lesson.completed).length, 0
  );
  const overallProgress = (completedLessons / totalLessons) * 100;

  const estimatedTimeRemaining = courseData.modules.reduce((total, module) => {
    const incompleteLessons = module.lessons.filter(lesson => !lesson.completed);
    return total + incompleteLessons.reduce((moduleTotal, lesson) => {
      const minutes = parseInt(lesson.duration.split(' ')[0]);
      return moduleTotal + minutes;
    }, 0);
  }, 0);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
      {/* Overall Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-semibold text-foreground">Course Progress</h3>
          <span className="text-sm font-medium text-primary">{Math.round(overallProgress)}%</span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
          <span>{completedLessons} of {totalLessons} lessons</span>
          <span>{formatTime(estimatedTimeRemaining)} remaining</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-foreground">{courseData.modules.length}</div>
          <div className="text-xs text-muted-foreground">Modules</div>
        </div>
        <div className="text-center p-3 bg-muted/50 rounded-lg">
          <div className="text-2xl font-bold text-foreground">{totalLessons}</div>
          <div className="text-xs text-muted-foreground">Lessons</div>
        </div>
      </div>

      {/* Module Progress */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Module Progress</h4>
        <div className="space-y-3">
          {courseData.modules.map((module) => {
            const moduleCompleted = module.lessons.filter(lesson => lesson.completed).length;
            const moduleProgress = (moduleCompleted / module.lessons.length) * 100;
            
            return (
              <div key={module.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground truncate">
                    Module {module.moduleNumber}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {moduleCompleted}/{module.lessons.length}
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${moduleProgress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3">Achievements</h4>
        <div className="grid grid-cols-3 gap-2">
          <div className={`text-center p-2 rounded-lg ${overallProgress >= 25 ? 'bg-success/10 text-success' : 'bg-muted/50 text-muted-foreground'}`}>
            <Icon name="Award" size={16} className="mx-auto mb-1" />
            <div className="text-xs">25%</div>
          </div>
          <div className={`text-center p-2 rounded-lg ${overallProgress >= 50 ? 'bg-success/10 text-success' : 'bg-muted/50 text-muted-foreground'}`}>
            <Icon name="Trophy" size={16} className="mx-auto mb-1" />
            <div className="text-xs">50%</div>
          </div>
          <div className={`text-center p-2 rounded-lg ${overallProgress >= 100 ? 'bg-success/10 text-success' : 'bg-muted/50 text-muted-foreground'}`}>
            <Icon name="Crown" size={16} className="mx-auto mb-1" />
            <div className="text-xs">100%</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-2">
        <Button
          variant="default"
          fullWidth
          iconName="Play"
          iconPosition="left"
          onClick={() => onNavigate('continue')}
        >
          Continue Learning
        </Button>
        <Button
          variant="outline"
          fullWidth
          iconName="RotateCcw"
          iconPosition="left"
          onClick={() => onNavigate('restart')}
        >
          Restart Course
        </Button>
        <Button
          variant="ghost"
          fullWidth
          iconName="Download"
          iconPosition="left"
          onClick={() => onNavigate('download')}
        >
          Download Materials
        </Button>
      </div>

      {/* Study Streak */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Flame" size={16} className="text-primary" />
          <span className="text-sm font-medium text-foreground">Study Streak</span>
        </div>
        <div className="text-2xl font-bold text-primary">7 days</div>
        <div className="text-xs text-muted-foreground">Keep it up!</div>
      </div>
    </div>
  );
};

export default ProgressSidebar;