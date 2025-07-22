import React from 'react';
import Image from './AppImage';
import Icon from './AppIcon';
import { Button } from '@/components/ui/button';


const InstructorHero = ({ instructor, onFollow, onMessage, isFollowing }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-b border-border">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          {/* Instructor Photo */}
          <div className="relative">
            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={instructor.photo}
                alt={instructor.name}
                className="w-full h-full object-cover"
              />
            </div>
            {instructor.isVerified && (
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-2 border-white">
                <Icon name="CheckCircle" size={16} color="white" />
              </div>
            )}
          </div>

          {/* Instructor Info */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
                  {instructor.name}
                </h1>
                <p className="text-lg text-primary font-medium mb-2">
                  {instructor.title}
                </p>
                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {instructor.shortBio}
                </p>
                
                {/* Key Credentials */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {instructor.credentials.map((credential, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      <Icon name="Award" size={12} className="mr-1" />
                      {credential}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3">
                  {instructor.socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-white transition-colors duration-200 flex items-center justify-center"
                    >
                      <Icon name={link.icon} size={16} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button
                  variant={isFollowing ? "outline" : "default"}
                  size="sm"
                  iconName={isFollowing ? "UserCheck" : "UserPlus"}
                  iconPosition="left"
                  onClick={onFollow}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={onMessage}
                >
                  Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHero;