import React, { useState } from "react";
import Image from "./AppImage";
import Icon from "./AppIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CourseReviews = ({ reviews, overallRating, totalReviews }) => {
    const [selectedRating, setSelectedRating] = useState("all");
    const [showMore, setShowMore] = useState(false);

    const ratingDistribution = [
        { stars: 5, count: 1250, percentage: 75 },
        { stars: 4, count: 300, percentage: 18 },
        { stars: 3, count: 83, percentage: 5 },
        { stars: 2, count: 25, percentage: 1.5 },
        { stars: 1, count: 8, percentage: 0.5 },
    ];

    const filteredReviews = selectedRating === "all" ? reviews : reviews.filter((review) => review.rating === parseInt(selectedRating));

    const displayedReviews = showMore ? filteredReviews : filteredReviews.slice(0, 6);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    return (
        <section id="reviews" className="py-12 bg-background">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground">Student Reviews</h2>
                        <p className="text-muted-foreground">See what our students have to say about this course</p>
                        <div className="flex justify-center">
                            <Link href="/student-reviews-testimonials">
                                <Button variant="outline" iconName="ExternalLink" iconPosition="right">
                                    View All Reviews
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Rating Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-card border border-border rounded-lg p-6 sticky top-[9.5rem]">
                                <div className="text-center space-y-4">
                                    <div className="space-y-2">
                                        <div className="text-4xl font-bold text-foreground">{overallRating}</div>
                                        <div className="flex items-center justify-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Icon key={i} name="Star" size={20} className={i < Math.floor(overallRating) ? "text-warning fill-warning" : "text-gray-300"} />
                                            ))}
                                        </div>
                                        <div className="text-sm text-muted-foreground">{totalReviews.toLocaleString()} reviews</div>
                                    </div>

                                    {/* Rating Distribution */}
                                    <div className="space-y-2">
                                        {ratingDistribution.map((rating) => (
                                            <div key={rating.stars} className="flex items-center space-x-2 text-sm">
                                                <span className="w-4 text-muted-foreground">{rating.stars}</span>
                                                <Icon name="Star" size={12} className="text-warning" />
                                                <div className="flex-1 bg-muted rounded-full h-2">
                                                    <div className="bg-warning rounded-full h-2 transition-all duration-300" style={{ width: `${rating.percentage}%` }} />
                                                </div>
                                                <span className="w-8 text-xs text-muted-foreground text-right">{rating.percentage}%</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Filter Buttons */}
                                    <div className="space-y-2">
                                        <div className="text-sm font-medium text-foreground">Filter by rating:</div>
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                onClick={() => setSelectedRating("all")}
                                                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                                    selectedRating === "all" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                                                }`}
                                            >
                                                All
                                            </button>
                                            {[5, 4, 3, 2, 1].map((rating) => (
                                                <button
                                                    key={rating}
                                                    onClick={() => setSelectedRating(rating.toString())}
                                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                                                        selectedRating === rating.toString() ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                                                    }`}
                                                >
                                                    {rating} ★
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reviews List */}
                        <div className="lg:col-span-3">
                            <div className="space-y-6">
                                {displayedReviews.map((review, index) => (
                                    <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                                        <div className="flex items-start space-x-4">
                                            <Image src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
                                            <div className="flex-1 space-y-3">
                                                {/* Review Header */}
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h4 className="font-medium text-foreground">{review.name}</h4>
                                                        <p className="text-sm text-muted-foreground">{review.title}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="flex items-center space-x-1 mb-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Icon key={i} name="Star" size={14} className={i < review.rating ? "text-warning fill-warning" : "text-gray-300"} />
                                                            ))}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">{formatDate(review.date)}</div>
                                                    </div>
                                                </div>

                                                {/* Review Content */}
                                                <p className="text-muted-foreground leading-relaxed">{review.comment}</p>

                                                {/* Review Actions */}
                                                <div className="flex items-center space-x-4 pt-2">
                                                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                        <Icon name="ThumbsUp" size={14} />
                                                        <span>Helpful ({review.helpful})</span>
                                                    </button>
                                                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                                                        <Icon name="MessageCircle" size={14} />
                                                        <span>Reply</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Load More Button */}
                                {filteredReviews.length > 6 && (
                                    <div className="text-center">
                                        <Button variant="outline" onClick={() => setShowMore(!showMore)} iconName={showMore ? "ChevronUp" : "ChevronDown"} iconPosition="right">
                                            {showMore ? "Show Less" : `Show More Reviews (${filteredReviews.length - 6} more)`}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Review CTA */}
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 text-center">
                        <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Share Your Experience</h3>
                        <p className="text-muted-foreground mb-4">Help other students by sharing your honest review of this course</p>
                        <Button variant="default" iconName="Star" iconPosition="left">
                            Write a Review
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseReviews;
