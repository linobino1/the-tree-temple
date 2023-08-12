import React from 'react';
import classes from './game.module.css';
import { OnScrollFocus } from '~/components/on-scroll-focus';
import BoardImg from '~/components/board-img';

export const Game: React.FC = () => {
  const rootMargin = '-20%';

  return (
    <section id='game' className={classes.container}>
      <div className={classes.overview}>
        <img className={classes.game} src="/img/culture.png" alt=''/>
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
      <div className={classes.phases}>
        <OnScrollFocus rootMargin={rootMargin}>
          <h4>1. Preparation</h4>
          <div className={classes.text}>
            Introduction (story), Character selection (cards), space mapping, tree species profiling, tree-relationship building
          </div>
          <img className={classes.preparation} src="/img/preparation.png" alt='preparation phase'/>
        </OnScrollFocus>
        <OnScrollFocus rootMargin={rootMargin}>
          <h4>2. Culture</h4>
          <div className={classes.text}>
            Social value negotiation and manifestation, envisioning and brainstorming exercices regarding regular cultural practices (rituals)
          </div>
          <img className={classes.culture} src="/img/culture1.png" alt='culture phase'/>
        </OnScrollFocus>
        <OnScrollFocus rootMargin={rootMargin}>
          <h4>3. Temple</h4>
          <div className={classes.text}>
            Transfer of the space map onto the board, decision about tree species, learning about tree shaping, negotiating shapes and functions, manual 3D modelling of the temple (phases) # shaping frameworks on board with the model trees
          </div>
          <BoardImg className={classes.imgTemple}/>
        </OnScrollFocus>
        <OnScrollFocus rootMargin={rootMargin}>
          <h4>4. Calendar</h4>
          <div className={classes.text}>
            Settling on a one-year vision & concrete plan, build a one-year cycle calendar, plan planting event, tackeling extra questions of organization
          </div>
          <img className={classes.calendar} src="/img/calendar.png" alt='calendar phase'/>
        </OnScrollFocus>
      </div>
      
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
  