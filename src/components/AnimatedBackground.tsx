import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [elements, setElements] = useState<{ id: number; left: string; animationDuration: string; delay: string; size: string; type: string }[]>([]);

  useEffect(() => {
    // Generate random floating elements (petals, sparkles)
    const newElements = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${15 + Math.random() * 20}s`,
      delay: `${Math.random() * 5}s`,
      size: `${0.5 + Math.random() * 1.5}rem`,
      type: Math.random() > 0.5 ? 'petal' : 'sparkle'
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-rose-50/30 to-amber-50/50" />
      
      {/* Floating elements */}
      {elements.map((el) => (
        <div
          key={el.id}
          className={`absolute rounded-full opacity-20 animate-float`}
          style={{
            left: el.left,
            bottom: '-5%',
            width: el.size,
            height: el.size,
            animationDuration: el.animationDuration,
            animationDelay: el.delay,
            backgroundColor: el.type === 'petal' ? '#f43f5e' : '#fbbf24',
            filter: el.type === 'sparkle' ? 'blur(2px)' : 'none',
            borderRadius: el.type === 'petal' ? '50% 0 50% 50%' : '50%',
            transform: el.type === 'petal' ? 'rotate(45deg)' : 'none'
          }}
        />
      ))}
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
