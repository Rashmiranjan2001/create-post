import logo from '../../assets/images/logo.svg';
import './styles/landing.scss';
import Login from './Login';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { type TUser } from '../../global';
import { ROUTES } from '../../constants/routes';
import Signup from './Signup';

const Landing = ({ currentUser }: { currentUser?: TUser }): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentUser) {
      // Redirect to THREADS page
      navigate(ROUTES.THREADS);
    }
  }, [currentUser]);

  return (
    <div className='home'>
      <Link to={ROUTES.THREADS}>
        <img className='home__logo' src={logo} alt="logo" />
      </Link>
      <div className='home__content'>
        {
          location.pathname === ROUTES.SIGNUP
            ? <Signup />
            : <Login />
        }
      </div>
    </div>
  );
};

export default Landing;
