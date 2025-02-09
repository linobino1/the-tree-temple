import React from 'react';
import classes from './footer.module.css';
import theme from '../theme.module.css';
import { Link, NavLink } from '@remix-run/react';
import { NewsletterSignup } from '~/components/newsletter-signup';

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
    <footer id='footer' className={`${theme.bg} ${classes.container}`}>
      <h3 className={classes.cta}>Let's play!</h3>
      <p className={classes.email}>
        <img src='/img/letter.svg' alt='letter' />
        <a href='mailto:stephanie@treetemple.org'>stephanie@treetemple.org</a>
      </p>
      <div className={classes.signup}>Sign up for the Tree Temple newsletter:</div>
      <NewsletterSignup className={classes.newsletter} />
      <div className={classes.colors}>
      { colors.map((color, index) => (
        <img
          key={index}
          src={`/img/colors/${color}_80p.webp`}
          alt={color}
        />
      ))}
      </div>
      <nav>
        <NavLink
          to={'/'}
        >start</NavLink>
        <NavLink
          to={'/about'}
        >about</NavLink>
        <NavLink
          to={'/about#contact'}
        >contact</NavLink>
        <NavLink
          to={'/legal'}
        >legal notice</NavLink>
        <Link
          to={'https://www.instagram.com/the_tree_temple_casabranca/'} target='_blank' rel='noreferrer noopener' aria-label='instagram link'
        ><img src='/img/instagram.svg' alt='instagram logo' className={classes.instagram} /></Link>
      </nav>
      <div className={classes.copyright}>
        Stephanie Geihs {year} all rights reserved
      </div>
    </footer>
  )
}
  
export default Footer;
  