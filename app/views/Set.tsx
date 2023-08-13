import React, { useEffect, useRef, useState } from 'react';
import classes from './set.module.css';
import { useNavigate } from 'react-router';

export const Set: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    'placeguardian',
    'treeshaper',
    'wisdomseeker',
    'storyteller',
    'symbioticgardener',
    // 'in6colours_noborder',
    'waterlover',
    'seasoncelebrator',
    'peacebringer',
    'fineartist',
    'soundbody',
    'playfulsoul',
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
          if (key === 'storyteller') {
            onClick = () => {
              console.log('cli')
              navigate('/story');
            };
            ref = storyteller;
          }
          return (
            <li key={key} ref={ref} onClick={onClick} data-id={key}>
              <img
                alt={key}
                src={`/img/cards/${key}_100p.webp`}
                srcSet={`/img/cards/${key}_100p.webp 100w, /img/cards/${key}_200p.webp 200w, /img/cards/${key}_400p.webp 400w`}
              />
            </li>
          )
        })}
        <li data-id='logo'>
          <img
            alt='logo'
            src='/img/logo.png'
          />
        </li>
      </ul>
    </section>
  )
}
  
export default Set;
  