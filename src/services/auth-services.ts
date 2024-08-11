import { type TUser } from '../global';

export const isLoggedIn = (): boolean => {
  return localStorage.getItem('currentUser') !== null;
};

export const getUser = (): TUser => {
  return JSON.parse(localStorage.getItem('currentUser')!);
};

export const login = (user: TUser): boolean => {
  if (user.token) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return true;
  }
  return false;
};

export const logout = (): boolean => {
  localStorage.removeItem('currentUser');
  return true;
};
