import React, { useState } from 'react';
import Icon from './AppIcon';
import { Button } from '@/components/ui/button';

const MobileProgressSheet = ({ courseData, isOpen, onClose, onNavigate }) => {
  const [activeTab, setActiveTab] = useState('progress');

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-card rounded-t-2xl max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="font-heading font-semibold text-foreground">Course Progress</h3>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
          />
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'progress' ?'text-primary border-b-2 border-primary' :'text-muted-foreground'
            }`}
          >
            Progress
          </button>
          <button
            onClick={() => setActiveTab('modules')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'modules' ?'text-primary border-b-2 border-primary' :'text-muted-foreground'
            }`}
          >
            Modules
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'achievements' ?'text-primary border-b-2 border-primary' :'text-muted-foreground'
            }`}
          >
            Achievements
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-96">
          {activeTab === 'progress' && (
            <div className="space-y-6">
              {/* Overall Progress */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Overall Progress</span>
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
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-xl font-bold text-foreground">{courseData.modules.length}</div>
                  <div className="text-xs text-muted-foreground">Modules</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-xl font-bold text-foreground">{totalLessons}</div>
                  <div className="text-xs text-muted-foreground">Lessons</div>
                </div>
                <div className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-xl font-bold text-primary">7</div>
                  <div className="text-xs text-muted-foreground">Day Streak</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Button
                  variant="default"
                  fullWidth
                  iconName="Play"
                  iconPosition="left"
                  onClick={() => {
                    onNavigate('continue');
                    onClose();
                  }}
                >
                  Continue Learning
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={() => {
                      onNavigate('restart');
                      onClose();
                    }}
                  >
                    Restart
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => {
                      onNavigate('download');
                      onClose();
                    }}
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'modules' && (
            <div className="space-y-3">
              {courseData.modules.map((module) => {
                const moduleCompleted = module.lessons.filter(lesson => lesson.completed).length;
                const moduleProgress = (moduleCompleted / module.lessons.length) * 100;
                
                return (
                  <div key={module.id} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        Module {module.moduleNumber}: {module.title}
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
                    <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                      <span>{module.duration}</span>
                      <span>{Math.round(moduleProgress)}% complete</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-4">
              {/* Achievement Badges */}
              <div className="grid grid-cols-3 gap-3">
                <div className={`text-center p-4 rounded-lg ${overallProgress >= 25 ? 'bg-success/10 text-success' : 'bg-muted/50 text-muted-foreground'}`}>
                  <Icon name="Award" size={24} className="mx-auto mb-2" />
                  <div className="text-xs font-medium">First Quarter</div>
                  <div className="text-xs opacity-70">25% Complete</div>
                </div>
                <div className={`text-center p-4 rounded-lg ${overallProgress >= 50 ? 'bg-success/10 text-success' : 'bg-muted/50 text-muted-foreground'}`}>
                  <Icon name="Trophy" size={24} className="mx-auto mb-2" />
                  <div className="text-xs font-medium">Halfway Hero</div>
                  <div className="text-xs opacity-70">50% Complete</div>
                </div>
                <div className={`text-center p-4 rounded-lg ${overallProgress >= 100 ? 'bg-success/10 text-success' : 'bg-muted/50 text-muted-foreground'}`}>
                  <Icon name="Crown" size={24} className="mx-auto mb-2" />
                  <div className="text-xs font-medium">Course Master</div>
                  <div className="text-xs opacity-70">100% Complete</div>
                </div>
              </div>

              {/* Study Streak */}
              <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Flame" size={20} className="text-primary" />
                  <span className="font-medium text-foreground">Study Streak</span>
                </div>
                <div className="text-2xl font-bold text-primary">7 days</div>
                <div className="text-sm text-muted-foreground">Keep up the great work!</div>
              </div>

              {/* Recent Activity */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Recent Activity</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-2 bg-muted/30 rounded">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">Completed Lesson 3</div>
                      <div className="text-xs text-muted-foreground">2 hours ago</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 bg-muted/30 rounded">
                    <Icon name="BookOpen" size={16} className="text-primary" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-foreground">Started Module 2</div>
                      <div className="text-xs text-muted-foreground">Yesterday</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileProgressSheet;