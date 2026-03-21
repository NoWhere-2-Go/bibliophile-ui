'use client';

import { animated, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';

export default function PulseSigil() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);

    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  const styles = useSpring({
    from: {
      transform: 'scale(1)',
      opacity: 0.35,
      boxShadow: '0 0 0 0 rgba(214, 180, 108, 0.2)',
    },
    to: {
      transform: prefersReducedMotion ? 'scale(1)' : 'scale(1.04)',
      opacity: prefersReducedMotion ? 0.35 : 0.55,
      boxShadow: prefersReducedMotion
        ? '0 0 0 0 rgba(214, 180, 108, 0.2)'
        : '0 0 40px 8px rgba(214, 180, 108, 0.3)',
    },
    loop: prefersReducedMotion ? false : { reverse: true },
    config: { mass: 2.2, tension: 120, friction: 24 },
  });

  return (
    <animated.div
      style={styles}
      className="h-24 w-24 rounded-full border border-amber-200/40 bg-[radial-gradient(circle_at_30%_30%,rgba(255,248,220,0.45),rgba(120,90,36,0.15),rgba(10,8,7,0.25))]"
      aria-hidden
    />
  );
}
