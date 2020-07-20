import React from 'react';
import './styles.scss';
import Logo from './../../assets/orange.png';
import { auth } from './../../firebase/utils';
import { Link } from 'react-router-dom';



const Header = props => {
    const { currentUser } = props;
return (
    <header className ='header'>
        <div className='wrap'>
            <div className='logo'>
                <Link to='/'>
            <img src={Logo}  alt='G7 Logo'/>
                </Link>
            </div>
            
       
        
       <div className='callToActions'>

       {currentUser && (
            <ul>
            <li>
              <a onClick={() => auth.signOut()}>
              logout</a>  
            </li>    
            </ul>
        )}
           {!currentUser && (
           
           <ul>
            <li>
            <Link to='/registration'>
            Register
            </Link>
        
                </li>
            
            <li>
            <Link to='/login'>
            Login
            </Link>

            </li>

           </ul>
           )}
        </div>
        </div>
     
    </header>
);
};

Header.defaultProps ={
    currentUser : null
};

export default Header;