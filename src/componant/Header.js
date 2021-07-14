import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from "@material-ui/core/IconButton";
import tinder from '../assets/img/tinder.png';
import { Link, useHistory } from "react-router-dom";

const Header = ({backButton}) => {
    const histry = useHistory();
    return(
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=> histry.replace(backButton)}>
                    <ArrowBackIosIcon className="header__icon" fontSize="large" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>   
            )}
            
            <Link to='/'>
                <img src={tinder} alt="tinder" className="header__logo" />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header;