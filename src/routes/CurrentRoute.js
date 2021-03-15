import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';
import React, {useContext} from 'react';
import AuthContext from '../contexts/Auth';

export default () => {
  const {isSigned} = useContext(AuthContext);
  return isSigned ? <AppRoutes /> : <AuthRoutes />;
};
