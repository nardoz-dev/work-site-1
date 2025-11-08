import { useEffect, useRef, useState } from "react";
import { Users, GraduationCap, Award, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 153,
    label: "CLIENTI SODDISFATTI",
  },
  {
    icon: Calendar,
    value: 15,
    label: "ANNI DI ESPERIENZA",
  },
  {
    icon: Award,
    value: 86,
    label: "AZIENDE CERTIFICATE",
  },
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutQuad * end);

      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="tabular-nums">
      {count}
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-[#f5f5f7] dark:bg-[#1d1d1f] border-t border-border/50 transition-colors duration-500">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2 group"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-1">
                  <IconComponent className="w-7 h-7 text-foreground/40 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="text-3xl text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors">
                  <CountUp end={stat.value} />
                </div>
                <div className="text-xs text-foreground/60 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
