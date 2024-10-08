import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Style from "./SignInandAvatar.module.css";
import {useNavigate} from 'react-router-dom';
import avatar from '../../assets/people.png'

export default function SignInandLogOut({SignedIn = true}) {
  const nav = useNavigate();
  return (
    <div className={Style.ButtonParentContainer}>
      {SignedIn ? (
        <div className={Style.AvatarContainer}>
          <img src={avatar} alt="Avatar" className={Style.Avatar}/>
        </div>
      ) : (
        <div className={Style.buttonContainer}>
          <button className={Style.SignInButton} onClick={() =>{nav('/auth')}}>
            <AccountCircleIcon fontSize='small'/> 
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
