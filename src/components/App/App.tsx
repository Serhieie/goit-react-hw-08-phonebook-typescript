import React, { useEffect, lazy } from 'react';
import PrivateRoute from '../Redirect/PrivateRoute';
import RestrictedRoute from '../Redirect/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { BodyChanger } from 'helpers/useEffectBodyChanger';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { NoPage } from './NoPage';
import { fetchCurrentUser } from '../../redux/auth/operations-auth';
import { SuspenseLoader } from 'components/SuspenseLoader/SuspenseLoader';
import { useTheme } from '../../helpers/hooks/theme-hook';
import { useAuth } from '../../helpers/hooks/auth-selector-hook';

const HomePage = lazy(() => import('../../pages/homePage/HomePage'));
const NotLoggedHomePage = lazy(
  () => import('../../pages/notLoggedHome/NotLoggedHome')
);
const Registration = lazy(
  () => import('../../pages/registration/Registration')
);
const Login = lazy(() => import('../../pages/login/Login'));
const Contacts = lazy(() => import('../../pages/contacts/Contacts'));

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const { isThemeDark } = useTheme();
  const { isRefreshing, user: name } = useAuth();

  //fetch current user
  useEffect(() => {
    //how to type it correctly??
    dispatch(fetchCurrentUser() as any);
  }, [dispatch]);

  //listener for body changing color
  useEffect(() => {
    BodyChanger(isThemeDark);
  }, [isThemeDark]);

  return isRefreshing ? (
    <SuspenseLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/home">
              <NotLoggedHomePage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/home">
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/home">
              <Registration />
            </RestrictedRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/login">
              <HomePage name={name.name} />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <Contacts />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
