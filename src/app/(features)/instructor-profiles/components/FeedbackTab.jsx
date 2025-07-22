import React, { useState } from 'react';
import Image from './AppImage';
import Icon from './AppIcon';
import { Button } from '@/components/ui/button';


const FeedbackTab = ({ feedback, overallRating }) => {
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredFeedback = feedback.filter(review => {
    if (filterRating === 'all') return true;
    return review.rating === parseInt(filterRating);
  });

  const sortedFeedback = [...filteredFeedback].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === 'oldest') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'highest') {
      return b.rating - a.rating;
    } else if (sortBy === 'lowest') {
      return a.rating - b.rating;
    }
    return 0;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={index < rating ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = feedback.filter(review => review.rating === rating).length;
    const percentage = feedback.length > 0 ? (count / feedback.length) * 100 : 0;
    return { rating, count, percentage };
  });

  return (
    <div className="space-y-6">
      {/* Rating Overview */}
      <div className="bg-muted/50 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <span className="text-3xl font-bold text-foreground">
                {overallRating.average}
              </span>
              <div className="flex items-center space-x-1">
                {renderStars(Math.round(overallRating.average))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Based on {overallRating.totalReviews} student reviews
            </p>
          </div>
          
          <div className="space-y-2">
            {ratingDistribution.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center space-x-2">
                <span className="text-sm font-medium text-foreground w-4">
                  {rating}
                </span>
                <Icon name="Star" size={12} className="text-warning fill-current" />
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-warning h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-8">
                  {count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-foreground">Filter by rating:</label>
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="text-sm border border-border rounded-md px-3 py-1 bg-background"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-foreground">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-border rounded-md px-3 py-1 bg-background"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {sortedFeedback.map((review, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={review.studentPhoto}
                  alt={review.studentName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-medium text-foreground">{review.studentName}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  {review.isVerified && (
                    <div className="flex items-center space-x-1 text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                      <Icon name="CheckCircle" size={12} />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {review.comment}
                </p>
                
                {review.courseName && (
                  <div className="flex items-center space-x-1 text-xs text-primary">
                    <Icon name="BookOpen" size={12} />
                    <span>Course: {review.courseName}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mt-3 text-xs text-muted-foreground">
                  <button className="flex items-center space-x-1 hover:text-foreground transition-colors">
                    <Icon name="ThumbsUp" size={12} />
                    <span>Helpful ({review.helpfulCount})</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-foreground transition-colors">
                    <Icon name="MessageCircle" size={12} />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedFeedback.length === 0 && (
        <div className="text-center py-12">
          <Icon name="MessageSquare" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No Reviews Found</h3>
          <p className="text-muted-foreground">
            {filterRating === 'all' ? "This instructor hasn't received any reviews yet."
              : `No reviews found with ${filterRating} star${filterRating === '1' ? '' : 's'}.`
            }
          </p>
        </div>
      )}

      {/* Load More Button */}
      {sortedFeedback.length > 0 && sortedFeedback.length >= 10 && (
        <div className="text-center">
          <Button variant="outline" iconName="ChevronDown" iconPosition="right">
            Load More Reviews
          </Button>
        </div>
      )}
    </div>
  );
};

export default FeedbackTab;