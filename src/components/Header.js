import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAsync } from '../redux/actions/actionLogin';

const Header = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
  }

  return (
    <header className={classes.header}>
        <div className={classes.header__container}>
            <Link to='' className={classes.header__link}>
            Home
            </Link>
            <div>
            <button onClick={handleLogout}>
                Logout User
            </button>
            </div>
        </div>
    </header>
  )
}

const useStyles = makeStyles((theme) => ({
    header: {
        width: '100%',
        padding: '1rem 0',
        backgroundColor: '#333',
        color: '#FFF'
    },
    header__container: {
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header__link: {
        color: '#FFF',
        textDecoration: 'none',
        letterSpacing: '1px'
    }
}))

export default Header