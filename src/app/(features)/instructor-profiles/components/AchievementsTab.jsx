import React from 'react';
import Icon from './AppIcon';

const AchievementsTab = ({ achievements }) => {
  const achievementTypes = {
    certification: { icon: 'Award', color: 'text-primary', bg: 'bg-primary/10' },
    award: { icon: 'Trophy', color: 'text-warning', bg: 'bg-warning/10' },
    milestone: { icon: 'Target', color: 'text-success', bg: 'bg-success/10' },
    recognition: { icon: 'Star', color: 'text-secondary', bg: 'bg-secondary/10' }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-heading font-semibold text-foreground">
          Achievements & Certifications ({achievements.length})
        </h3>
        <div className="flex items-center space-x-2">
          <select className="text-sm border border-border rounded-md px-3 py-1 bg-background">
            <option>All Types</option>
            <option>Certifications</option>
            <option>Awards</option>
            <option>Milestones</option>
            <option>Recognition</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {achievements.map((achievement, index) => {
          const typeConfig = achievementTypes[achievement.type] || achievementTypes.certification;
          
          return (
            <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full ${typeConfig.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={typeConfig.icon} size={20} className={typeConfig.color} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-2">
                        {achievement.issuer}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {achievement.description}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="Calendar" size={12} />
                          <span>{achievement.date}</span>
                        </div>
                        {achievement.credentialId && (
                          <div className="flex items-center space-x-1">
                            <Icon name="Hash" size={12} />
                            <span>ID: {achievement.credentialId}</span>
                          </div>
                        )}
                        {achievement.expiryDate && (
                          <div className="flex items-center space-x-1">
                            <Icon name="Clock" size={12} />
                            <span>Expires: {achievement.expiryDate}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {achievement.isVerified && (
                        <div className="flex items-center space-x-1 text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                          <Icon name="CheckCircle" size={12} />
                          <span>Verified</span>
                        </div>
                      )}
                      {achievement.certificateUrl && (
                        <a
                          href={achievement.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline flex items-center space-x-1"
                        >
                          <Icon name="ExternalLink" size={12} />
                          <span>View Certificate</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {achievements.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Trophy" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No Achievements Listed</h3>
          <p className="text-muted-foreground">This instructor hasn't added any achievements yet.</p>
        </div>
      )}
    </div>
  );
};

export default AchievementsTab;