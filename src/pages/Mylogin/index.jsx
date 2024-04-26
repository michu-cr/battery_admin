import Button from '../../Components/Button';
import Input from '../../Components/Input';
import { useState } from 'react';
import axios from '../../utils/index.js';
import { useNavigate } from 'react-router-dom';
import './mylogin.css';

const Login = () => {
  const navigate = useNavigate();
  const [adlogin, setadlogin] = useState({
    email: '',
    password: '',
  });
  const adlog = (e, key) => {
    setadlogin({ ...adlogin, [key]: e.target.value });
  };
  const onAdOrder = async () => {
    await axios.post('/shop/login', adlogin);
    navigate('/adminall');
  };
  return (
    <div className="login">
      <div className="adinput">
        <h1>
          <u>ADMIN LOGIN</u>
        </h1>

        <Input
          className="adin"
          onChange={e => adlog(e, 'email')}
          type="text"
          placeholder="EMAIL"
        />
        <Input
          className="adin"
          onChange={e => adlog(e, 'password')}
          type="text"
          placeholder="PASSWOED"
        />
        <br />
        <Button className="btnlogin" onClick={onAdOrder}>
          LOGIN
        </Button>
      </div>
    </div>
  );
};
export default Login;
