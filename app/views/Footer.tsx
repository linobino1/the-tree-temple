import React from 'react';
import classes from './footer.module.css';
import theme from '../theme.module.css';
import { NavLink } from '@remix-run/react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const colors = [
    'spades',
    'sun',
    'cross',
    'heart',
    'drop',
    'caro',
  ];

  return (
    <>
      <footer id='footer' className={`${theme.bg} ${classes.container}`}>
        <div className={classes.colors}>
        { colors.map((color, index) => (
          <img
            key={index}
            src={`/img/colors/${color}.png`}
            alt={color}
          />
        ))}
        </div>
        {/* <nav>
          <NavLink
            to={'/about'}
          >About</NavLink>
          <NavLink
            to={'/about'}
          >Contact</NavLink>
          <NavLink
            to={'/legal'}
          >Legal Notice</NavLink>
        </nav> */}
        <div className={classes.copyright}>
          Stephanie Geihs {year} all rights reserved
        </div>
      </footer>
    </>
  )
}
  
export default Footer;
  