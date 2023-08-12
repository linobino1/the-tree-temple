import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

export type Props = {
  children: React.ReactNode;
  leaveActive?: boolean;
  className?: string;
  rootMargin?: string;
};

export const OnScrollFocus: React.FC<Props> = ({
  children, leaveActive = false, className, rootMargin = "-20px",
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [ state, setState ] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );
    ref.current && observer.observe(ref.current);
    
    // set active or inactive
    if (state) {
      ref.current?.setAttribute('data-active', 'true');
    } else if (!leaveActive) {
      ref.current?.setAttribute('data-active', 'false');
    }

    return () => observer.disconnect();
  }, [ref, state, leaveActive, rootMargin]);

  return (
    <div ref={ref} className={`${classes.container} ${className}`}>
      { children }
    </div>
  );
}

export default OnScrollFocus;
