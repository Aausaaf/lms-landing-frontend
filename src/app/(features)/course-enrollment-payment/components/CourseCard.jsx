import React from 'react';
import Image from './AppImage';
import Icon from './AppIcon';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <Image
            src={course.thumbnail}
            alt={course.title}
            className="w-20 h-20 rounded-lg object-cover"
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2">
            {course.title}
          </h3>
          
          <div className="flex items-center space-x-2 mb-3">
            {/* <Image
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-6 h-6 rounded-full object-cover"
            /> */}
            <span className="text-sm text-muted-foreground">
              by {course.instructor.name}
            </span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{course.students} students</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} className="text-warning fill-current" />
              <span>{course.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground line-through">
              ₹{course.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full font-medium">
              {course.discount}% OFF
            </span>
          </div>
          <div className="text-xl font-heading font-bold text-foreground">
            ₹{course.finalPrice.toLocaleString('en-IN')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;