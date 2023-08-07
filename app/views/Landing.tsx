import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './landing.module.css';

export const Landing: React.FC = () => {
  const leave = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState(0);
  const [play, setPlay] = useState(0);

  const handleScroll = useCallback(() => {
    if (leave.current) {
      if ((scrollY ?? 0) > window.scrollY) {
        // Scrolling up
        setPlay(0);
      } else if ((scrollY ?? 0) < window.scrollY) {
        // Scrolling down
        setPlay(1)
      }
    }

    setScrollY(window.scrollY)
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className={classes.container}>
      <div className={classes.bg}></div>
      <div className={classes.bgSecondary} ref={leave} data-play={play}></div>
      <img className={classes.logo} src="/img/logo.png" alt="the tree temple logo" />
    </section>
  )
}
  
export default Landing;
  