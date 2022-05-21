import Button from '../Button';
import Logo from './Logo';
import Navbar from '../Navbar';

export default function Header() {
  // const event login
  const login = () =>  alert('login') ;
  const register = () =>  alert('register') ;
  return (
    <header>
        <Logo />
        <Navbar />
        <Button text="login" clickMe={login}/>
        <Button text="register" clickMe={register}/>
    </header>
  )
}
