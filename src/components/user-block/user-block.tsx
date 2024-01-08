import './user-block.css';
import { Link } from 'react-router-dom';
import React, { useCallback } from 'react';
import { AppRoute } from '../../enums/AppRoute';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { AuthStatus } from '../../enums/AuthStatus';

export default function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  const handleClick = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" />
        </div>
      </li>
      {isAuth ?
        (
          <Link to={`${AppRoute.Main}`} className="user-block__link" onClick={handleClick}>Sign out</Link>
        ) : (
          <Link to={`${AppRoute.Login}`} className="user-block__link">Sign in</Link>
        )}
    </ul>
  );
}
