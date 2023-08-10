import React, { useEffect, useRef, useState } from 'react';
import classes from './set.module.css';
import { useNavigate } from 'react-router';

export const Set: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    '/img/cards/placeguardian.png',
    '/img/cards/treeshaper.png',
    '/img/cards/wisdomseeker.png',
    '/img/cards/storyteller.png',
    '/img/cards/symbioticgardener.png',
    //img/cards// 'in6colours_noborder.png',
    '/img/cards/waterlover.png',
    '/img/cards/seasoncelebrator.png',
    '/img/cards/peacebringer.png',
    '/img/cards/fineartist.png',
    '/img/cards/soundbody.png',
    '/img/cards/playfulsoul.png',
    '/img/logo.png',
  ];
  
  const storyteller = useRef<HTMLLIElement>(null);
  const [storytellerSeen, setStorytellerSeen] = useState(false);

  useEffect(() => {
    if (!storyteller.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStorytellerSeen(entry.isIntersecting);
      },
      { rootMargin: "-20%" }
    );
    storyteller.current && observer.observe(storyteller.current);
    
    if (storytellerSeen) {
      storyteller.current.style.animation = 'none';
      storyteller.current.classList.add(classes.play);
      storyteller.current.style.animation = '';
    } else {
      storyteller.current.classList.remove(classes.play);
    }

    return () => observer.disconnect();
  }, [storytellerSeen]);

  return (
    <section id='set' className={classes.container}>
      <h2>Choose your character...</h2>
      <ul className={classes.cards}>
        { cards.map((key) => {
          let onClick;
          let ref;
          if (key === '/img/cards/storyteller.png') {
            onClick = () => {
              console.log('cli')
              navigate('/story');
            };
            ref = storyteller;
          }
          return (
            <li key={key} ref={ref} onClick={onClick} data-id={key}>
              <img src={key} alt={key.replace('/img/cards/', '').replace('.png', '')}/>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
  
export default Set;
  