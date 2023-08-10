import React, { useEffect, useRef, useState } from 'react';
import classes from './game.module.css';

export const Game: React.FC = () => {
  const nextPhase = () => {
    const active = document.querySelector(`.${classes.phases} li[data-active="true"]`);
    let next = active?.nextElementSibling;
    if (!next) {
      next = document.querySelector(`.${classes.phases} li:first-child`);
    }
    
    active?.setAttribute('data-active', 'false');
    next?.setAttribute('data-active', 'true');
    
    console.log('next', next);

    next?.scrollIntoView();
  }
  
  const phaseRefs = {
    preparation: useRef<HTMLLIElement>(null),
    culture: useRef<HTMLLIElement>(null),
    temple: useRef<HTMLLIElement>(null),
    calendar: useRef<HTMLLIElement>(null),
  };
  const phaseStates = {
    preparation: useState(false),
    culture: useState(false),
    temple: useState(false),
    calendar: useState(false),
  };

  useEffect(() => {
    Object.keys(phaseRefs).forEach((key) => {
      const ref = phaseRefs[key as keyof typeof phaseRefs];
      const state = phaseStates[key as keyof typeof phaseStates];
      if (!ref.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          state[1](entry.isIntersecting);
        },
        { rootMargin: "-20%" }
      );
      console.log(state[0]);
      ref.current && observer.observe(ref.current);
      
      if (state[0]) {
        // set active
        const active = document.querySelector(`.${classes.phases} li[data-active="true"]`);
        active?.setAttribute('data-active', 'false');
        ref.current?.setAttribute('data-active', 'true');
          
        // set seen
        ref.current?.classList.add(classes.seen);
        observer.disconnect();
      }

      return () => observer.disconnect();
    });
  }, [phaseRefs, phaseStates]);

  return (
    <section id='game' className={classes.container}>
      <div className={classes.overview}>
        <img className={classes.culture} src="/img/culture.png" alt=''/>
        <h2>The Game</h2>
        <div>
          <p>
            The Tree Temple board game is the essential tool to initiate and organise the participatory process. It comes into play once a group of participants and a plantable space are defined. It is suggested for 11-66 players and to be played in several sessions.
          </p>
          <p>
            The game guides the players through four phases: preparation, culture, temple & calendar. When everything is planned and modelled, the real life endavour can begin with the tree planting event, the inauguration. 
          </p>
        </div>
      </div>
      <ol className={classes.phases}>
        <li data-active={true} ref={phaseRefs.preparation}>
          <header>
            <h4>1. Preparation</h4>
            <button className={classes.arrow} onClick={nextPhase} aria-label='next' />
          </header>
          <div className={classes.text}>
            Introduction (story), Character selection (cards), space mapping, tree species profiling, tree-relationship building
          </div>
          <img className={classes.preparation} src="/img/preparation.png" alt='preparation phase'/>
        </li>
        <li ref={phaseRefs.culture}>
          <header>
            <h4>2. Culture</h4>
            <button className={classes.arrow} onClick={nextPhase} aria-label='next' />
          </header>
          <div className={classes.text}>
            Social value negotiation and manifestation, envisioning and brainstorming exercices regarding regular cultural practices (rituals)
          </div>
          <img src="/img/culture1.png" alt='culture phase'/>
          {/* <img src="/img/culture.png" alt='culture phase'/> */}
        </li>
        <li ref={phaseRefs.temple}>
          <header>
            <h4>3. Temple</h4>
            <button className={classes.arrow} onClick={nextPhase} aria-label='next' />
          </header>
          <div className={classes.text}>
            Transfer of the space map onto the board, decision about tree species, learning about tree shaping, negotiating shapes and functions, manual 3D modelling of the temple (phases) # shaping frameworks on board with the model trees
          </div>
          <div className={classes.boardImg}>
            <img src="/img/board.png" alt='temple phase'/>
          </div>
        </li>
        <li ref={phaseRefs.calendar}>
          <header>
            <h4>4. Calendar</h4>
            <button className={classes.arrow} onClick={nextPhase} aria-label='next' />
          </header>
          <div className={classes.text}>
            Settling on a one-year vision & concrete plan, build a one-year cycle calendar, plan planting event, tackeling extra questions of organization
          </div>
          <img className={classes.calendar} src="/img/calendar.png" alt='calendar phase'/>
        </li>
      </ol>
      
      {/* <h2>Requirements:</h2>
      <div className={classes.table}>
        <div>Space</div>
        <ul>
          <li>
            public (or semi-public) <em>plantable area</em> with room for several trees to grow in appropriate light conditions and for people to gather
          </li>
        </ul>
        <div>Time</div>
        <ul>
          <li>
            depending on design, species and environmental conditions, the growth of the final structure takes 10-60 years -&gt; <em>unlimited duration</em>
          </li>
          <li>
            <em>participation can be temporary</em> and passed on
          </li>
          <li>
            time investment depends on season, design and number of participants
          </li>
        </ul>
        <div>Stakeholders</div>
        <ul>
          <li>
            <em>a driving stakeholder</em> for engaging participants (e.g. local organisations in the fields of sustainability, neighbourhood development, etc.),
          </li>
          <li>
            once initiated, self-organised by the participants
          </li>
        </ul>
        <div>Trees & Co.</div>
        <ul>
          <li>
            tree species can be chosen by participants starting with <em>tree samplings</em>,
          </li>
          <li>
            basic, <em>low budget</em> materials for frameworks + <em>tools</em>  
          </li>
        </ul>
      </div> */}
    </section>
  )
}
  
export default Game;
  