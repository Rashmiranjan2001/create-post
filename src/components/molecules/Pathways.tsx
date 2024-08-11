import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';
import Feed from './Feed';
import Modal from '../sharedComponents/Modal';
import Signup from './Signup';
import { type TUser } from '../../global';
import { getUser, isLoggedIn } from '../../services/auth-services';
import { ROUTES } from '../../constants/routes';

const Pathways = (): JSX.Element => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  const [currentUser, setCurrentUser] = useState<TUser>();
  const isLoggedInUser = isLoggedIn();

  useEffect(() => {
    const user = getUser();
    if (user) {
      setCurrentUser(user);
    }
  }, [isLoggedInUser]);

  useEffect(() => {
    const user = getUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path={ROUTES.HOME} element={<Landing currentUser={currentUser} />} />
        <Route path={ROUTES.THREADS} element={<Feed currentUser={currentUser}/>} />
        {!previousLocation && (
          <>
            <Route path={ROUTES.LOGIN} element={<Landing currentUser={currentUser} />} />
            <Route path={ROUTES.SIGNUP} element={<Landing currentUser={currentUser} />} />
          </>
        )}
      </Routes>
      {
        previousLocation && (
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Modal><Login /></Modal>} />
            <Route path={ROUTES.SIGNUP} element={<Modal><Signup /></Modal>} />
          </Routes>
        )
      }
    </>
  );
};

export default Pathways;
