import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user);// if current user is right one we see profile page other wise we se sign in
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;//with the help of navigae component (use_navigate is a hook both are different)
}