
import { useEffect, useState, useRef } from "react";

const CountUpStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ hours: 0, businesses: 0, satisfaction: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const targets = { hours: 500, businesses: 50, satisfaction: 95 };
    const increments = {
      hours: targets.hours / steps,
      businesses: targets.businesses / steps,
      satisfaction: targets.satisfaction / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts({
        hours: Math.min(Math.round(increments.hours * currentStep), targets.hours),
        businesses: Math.min(Math.round(increments.businesses * currentStep), targets.businesses),
        satisfaction: Math.min(Math.round(increments.satisfaction * currentStep), targets.satisfaction)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="text-center animate-fade-in">
        <div className="text-4xl font-bold text-orange-600 mb-2">{counts.hours}+</div>
        <div className="text-gray-600 font-medium">Hours Saved Monthly</div>
        <div className="text-sm text-gray-500 mt-1">Across all clients</div>
      </div>
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="text-4xl font-bold text-blue-600 mb-2">{counts.businesses}+</div>
        <div className="text-gray-600 font-medium">Businesses Automated</div>
        <div className="text-sm text-gray-500 mt-1">And growing</div>
      </div>
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-4xl font-bold text-green-600 mb-2">{counts.satisfaction}%</div>
        <div className="text-gray-600 font-medium">Client Satisfaction</div>
        <div className="text-sm text-gray-500 mt-1">Average rating</div>
      </div>
      <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
        <div className="text-gray-600 font-medium">Automated Workflows</div>
        <div className="text-sm text-gray-500 mt-1">Never sleep</div>
      </div>
    </div>
  );
};

export { CountUpStats };
