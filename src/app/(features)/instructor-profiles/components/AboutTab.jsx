import React from 'react';
import Icon from './AppIcon';

const AboutTab = ({ instructor }) => {
  return (
    <div className="space-y-6">
      {/* Biography */}
      <div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
          Biography
        </h3>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            {instructor.fullBio}
          </p>
        </div>
      </div>

      {/* Educational Background */}
      <div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
          Educational Background
        </h3>
        <div className="space-y-3">
          {instructor.education.map((edu, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-muted/50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Icon name="GraduationCap" size={16} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{edu.degree}</h4>
                <p className="text-sm text-primary">{edu.institution}</p>
                <p className="text-xs text-muted-foreground">{edu.year}</p>
                {edu.specialization && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Specialization: {edu.specialization}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teaching Philosophy */}
      <div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
          Teaching Philosophy
        </h3>
        <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
          <p className="text-muted-foreground italic leading-relaxed">
            "{instructor.teachingPhilosophy}"
          </p>
        </div>
      </div>

      {/* Expertise Areas */}
      <div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
          Areas of Expertise
        </h3>
        <div className="flex flex-wrap gap-2">
          {instructor.expertise.map((area, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/10 text-secondary"
            >
              <Icon name="CheckCircle" size={12} className="mr-1" />
              {area}
            </span>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
          Languages
        </h3>
        <div className="flex flex-wrap gap-2">
          {instructor.languages.map((language, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-foreground"
            >
              <Icon name="Globe" size={12} className="mr-1" />
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;