import { useState } from 'react';
import Input from '../sharedComponents/Input';
import './styles/signup.scss';
import Button from '../sharedComponents/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { login } from '../../services/auth-services';

const Signup = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    email: '',
    username: '',
    password: ''
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (event: React.MouseEvent): void => {
    event.preventDefault();

    // Make API call to create account
    if (formInput.email === '' || formInput.username === '' || formInput.password === '') {
      return;
    }

    const user = {
      email: formInput.email,
      avatar: 'https://randomuser.me/api/portraits/women/95.jpg',
      username: formInput.username,
      id: 3,
      token: 'randomtoken'
    };

    if (login(user)) {
      navigate(String(location.state?.previousLocation ?? ROUTES.THREADS));
    }
  };

  return (
    <div className='signup'>
      <div className='signup__header'>SIGN UP</div>
      <h1 className='signup__title'>Create an account to continue</h1>
      <form className='signup__form'>
        <Input
          text= ''
          name='email'
          type='email'
          label='Email'
          placeholder='Enter your email'
          onChange={onChange}
          value={formInput?.email}/>
        <Input
          text= ''
          name='username'
          type='text'
          label='Username'
          placeholder='CHoose a preferred username'
          onChange={onChange}
          value={formInput?.username}/>
        <Input
          text= ''
          name='password'
          type='password'
          label='Password'
          placeholder='Choose a strong password'
          onChange={onChange}
          value={formInput?.password}/>
        <div className='signup__action'>
          <Button
            text='Continue'
            variant='primary'
            size='large'
            type='submit'
            onClick={onSubmit}
          />
        </div>
        <div className='signup__footer'>
          Already have an account?
          <Link className='signup__footer__action'
            to={ROUTES.LOGIN}
            state={{ previousLocation: location.state?.previousLocation }}
          >
            Login →
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
