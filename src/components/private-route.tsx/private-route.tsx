import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../enums/AppRoute';
import { useAppSelector } from '../../hook/store';
import { AuthStatus } from '../../enums/AuthStatus';

type PrivateRouteProps = {
	children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authStatus = useAppSelector((state) => state.authStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  return isAuth ? children : <Navigate to={AppRoute.Login} />;
}
