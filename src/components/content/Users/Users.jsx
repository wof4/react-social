import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import defaultUserPhoto from '../../../img/users.jpg';
import Loader from '../../Loader/loader';

const getPages = (count) => {
  const pages = [];
  for (let i = 1; i <= count; i += 1) {
    pages.push(i);
  }
  return pages;
};

const Users = (props) => {
  const {
    totalUserCount,
    pageSize,
    currentPage,
    isFething,
    users,
    followedProgress,
    unfollow,
    follow,
    onChangePage,
  } = props;
  const totalCount = Math.ceil(totalUserCount / pageSize);
  const portionCount = Math.ceil(totalCount / 10);
  const [portionNumber, setPortionNumber] = useState(1);
  const lefBorder = (portionNumber - 1) * 10 + 1;
  const rightBorder = portionNumber * 10;
  const pages = getPages(totalCount);

  const currentPortion = pages.filter((p) => p >= lefBorder && p <= rightBorder);
  return (
    <div>

      <div className={s.pagination__block}>
        {portionNumber > 1 && <button type="button" onClick={() => { setPortionNumber(portionNumber - 1); }}>PREV</button>}
        <div>
          {currentPortion.map((p) => (
            <span
              key={p}
              className={p === currentPage ? s.selectedPage : s.selected__no_active}
              role="presentation"
              onClick={() => { onChangePage(p); }}
            >
              {p}
            </span>
          ))}
        </div>
        {portionNumber < portionCount && <button type="button" onClick={() => { setPortionNumber(portionNumber + 1); }}>NEXT</button>}
      </div>

      {isFething
        ? <Loader />
        : users.map((user) => (
          <div key={user.id}>
            <div className={s.user__block}>
              <span>
                <div>
                  <NavLink to={`/profile/${user.id}`}>
                    <img alt="" className={s.user__img} src={user.photos.small != null ? user.photos.small : defaultUserPhoto} />
                  </NavLink>
                </div>
                <div>
                  {user.followed
                    ? (
                      <button
                        type="button"
                        disabled={followedProgress.some((userId) => userId === user.id)}
                        onClick={() => { unfollow(user.id); }}
                      >
                        unfollow
                      </button>
                    )
                    : (
                      <button
                        type="button"
                        disabled={followedProgress.some((userId) => userId === user.id)}
                        onClick={() => { follow(user.id); }}
                      >
                        follow
                      </button>
                    )}
                </div>
              </span>
              <div className={s.user__desc}>
                <div>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Users;
