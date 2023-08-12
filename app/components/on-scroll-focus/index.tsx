import React, { useEffect, useState } from "react";
import classes from "./index.module.css";

export type Props = {
  children: React.ReactNode;
  leaveActive?: boolean;
};

export const OnScrollFocus: React.FC<Props> = ({
  children, leaveActive = false, 
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [ state, setState ] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin: "-20%" }
    );
    ref.current && observer.observe(ref.current);
    
    if (state) {
      // set other <OnScrollFocus> to inactive
      // const active = document.querySelector(`.${classes.container}[data-active="true"]`);
      // active?.setAttribute('data-active', 'false');

      // set active
      ref.current?.setAttribute('data-active', 'true');

      // leave active forever?
      // observer.disconnect();
    } else if (!leaveActive) {
      // set inactive
      ref.current?.setAttribute('data-active', 'false');
    }

    return () => observer.disconnect();
  }, [ref, state, leaveActive]);

  return (
    <div ref={ref} className={classes.container}>
      { children }
    </div>
  );
}

export default OnScrollFocus;
