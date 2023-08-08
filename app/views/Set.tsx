import React from 'react';
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
  
  return (
    <section id='set' className={classes.container}>
      <h2>Choose your character...</h2>
      <ul className={classes.cards}>
        { cards.map((key) => {
          let onClick;
          if (key === '/img/cards/storyteller.png') {
            onClick = () => {
              console.log('cli')
              navigate('/story');
            };
          }
          return (
            <li key={key} onClick={onClick} data-id={key}>
              <img src={key} alt={key}/>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
  
export default Set;
  