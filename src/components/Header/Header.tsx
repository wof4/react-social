import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

type propsType = { 
  isAuth: boolean 
  logout: () => void
  login: string | null
}
const Header: React.FC<propsType> = (props) => {
  const { isAuth, logout, login } = props;
  return (
    <header className={`${s.header}`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWCVDOe39_2k-5v8wd2wg5Maw4sQz-c5Dx8YBUVQdJjJgFmKxR&usqp=CAU" alt="" />
      <div>
        {isAuth
          ? (
            <div>
              { login }
              <button type="button" onClick={logout}>Log out</button>
              {' '}

            </div>
          )
          : <NavLink to="/login"> Login </NavLink>}
      </div>
    </header>
  );
};

export default Header;
