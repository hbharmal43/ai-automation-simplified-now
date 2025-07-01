
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company: string;
  text: string;
  rating: number;
}

export const TestimonialCard = ({ name, company, text, rating }: TestimonialCardProps) => {
  return (
    <Card className="hover-scale bg-white shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">"{text}"</p>
        <div className="border-t pt-4">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{company}</div>
        </div>
      </CardContent>
    </Card>
  );
};
