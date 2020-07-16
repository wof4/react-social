import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => (
  <nav className={s.nav}>
    <div><NavLink to="/profile" className={s.link} activeClassName={s.active}>Profile</NavLink></div>
    <div><NavLink to="/messages" className={s.link} activeClassName={s.active}>Messages</NavLink></div>
    <div><NavLink to="/users" className={s.link} activeClassName={s.active}>Users</NavLink></div>
    <div><NavLink to="/news" className={s.link} activeClassName={s.active}>News</NavLink></div>
    <div><NavLink to="/music" className={s.link} activeClassName={s.active}>Music</NavLink></div>
    <div><NavLink to="/setting" className={s.link} activeClassName={s.active}>Setting</NavLink></div>
  </nav>
);

export default Navbar;
