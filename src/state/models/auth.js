import request from '../../helpers/request';

class Auth {
  static getUser = async () => {
    const token = await request('/auth/token');
    return token.data;
  };

  static login = async credentials => {
    const login = await request('/auth/token', 'post', credentials);
    await localStorage.setItem('token', login.data.token);
    const token = await request('/auth/token');
    return token.data;
  };
};

export default Auth;