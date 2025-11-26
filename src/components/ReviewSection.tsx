import { Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ReviewSectionProps {
  rating: number;
  totalReviews: number;
}

const ReviewSection = ({ rating, totalReviews }: ReviewSectionProps) => {
  const reviews = [
    {
      author: "Sarah Johnson",
      date: "November 2024",
      rating: 5,
      comment: "Absolutely stunning villa! The location was perfect, right on the beach with breathtaking views. The host was incredibly responsive and helpful throughout our stay.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    {
      author: "Michael Chen",
      date: "October 2024",
      rating: 5,
      comment: "This place exceeded all our expectations. The villa was immaculately clean, well-equipped, and the private pool was a dream. Highly recommend for families!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
      author: "Emma Rodriguez",
      date: "October 2024",
      rating: 5,
      comment: "Perfect getaway! The amenities were top-notch, and the attention to detail was impressive. We especially loved the outdoor dining area and the proximity to local attractions.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
    }
  ];

  const ratingBreakdown = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Star className="h-6 w-6 fill-accent text-accent" />
        <h2 className="text-2xl font-bold text-foreground">
          {rating} · {totalReviews} reviews
        </h2>
      </div>

      {/* Rating Breakdown */}
      <div className="mb-10 space-y-3">
        {ratingBreakdown.map((item) => (
          <div key={item.stars} className="flex items-center gap-4">
            <span className="text-sm font-medium text-foreground w-12">
              {item.stars} star
            </span>
            <Progress value={item.percentage} className="flex-1 h-2" />
            <span className="text-sm text-muted-foreground w-12 text-right">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-8">
        {reviews.map((review, index) => (
          <div key={index} className="pb-8 border-b border-border last:border-0">
            <div className="flex items-start gap-4 mb-4">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">{review.author}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{review.date}</p>
                <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
