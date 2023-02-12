import { NavLink } from 'react-router-dom';

import navItems from './navItems';

// import css from './navbar.module.css'

const Navbar = () => {
  const elements = navItems.map(({ id, text, link }) => 
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  );

  return <ul>{elements}</ul>;
};

export default Navbar;
