import { signInWithPopup } from '@firebase/auth'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { setUserLoginDetails, selectUserName, selectUserPhoto, setSignOutState  } from '../features/user/userSlice'

const Header=(props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){ // if user user logedin
                setUser(user) // put as the user
                history.push('/home') // whever a user logs in will be directed to this page
            }
        })
    }, [userName])
    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };
    const handleAuth = ()=>{
        if(!userName){
            signInWithPopup(auth, provider)
                .then(result =>{
                     setUser(result.user);
                 })  
                .catch(error =>{
                    alert(error.message)
                 })
        }
        if(userName) {
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                history.push('/');
            }).catch(error=> alert(error.message))
        }
    }
    return (
        <Nav>
                <Logo href="/">
                    <img src="/images/logo.svg" alt="disney+"/>
                </Logo>
            {
                !userName ?  
                <Login onClick={handleAuth}>login </Login> 
                :
                 <>
                    <NavMenu>
                        <NavLink to="/home">
                            <img src="/images/home-icon.svg" alt="home"/>
                            <span>HOME</span>
                        </NavLink>
                        <NavLink to="/home">
                            <img src="/images/search-icon.svg" alt="search"/>
                            <span>SEARCH</span>
                        </NavLink>
                        <NavLink to="/home">
                            <img src="/images/watchlist-icon.svg" alt="watchlist"/>
                            <span>WATCHLIST</span>
                        </NavLink>
                        <NavLink to="/home">
                            <img src="/images/original-icon.svg" alt="originals"/>
                            <span>ORIGINALS</span>
                        </NavLink>
                        <NavLink to="/home">
                            <img src="/images/movie-icon.svg" alt="movies"/>
                            <span>MOVIES</span>
                        </NavLink>
                        <NavLink to="/home">
                            <img src="/images/series-icon.svg" alt="series"/>
                            <span>SERIES</span>
                        </NavLink>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto}/> 
                        <DropDown>
                            <span onClick={handleAuth}>Sign Out</span>
                        </DropDown>
                    </SignOut>
                 </>
            }
        </Nav>
    )
}

const Nav = styled.nav`
    width:100%; height:70px;
    position:fixed; top:0; left:0; right:0;
    display:flex; justify-content:space-between; align-items:center;
    background-color:#090b13;
    padding:0 36px;
    letter-spacing:16px;
    z-index:3;

`
const Logo = styled.a`
    padding:0;
    margin-top:4px;
    width:80px; max-height:70px;
    font-size:0;
    display:inline-block;

    img{
        display:block;
        width:100%;
    }
`
const NavMenu = styled.div`
    display:flex; align-items:center; justify-content:flex-end;
    flex-flow:row nowrap;
    height:100%;
    margin:0 auto 0 25px; padding:0;
    position:relative;

    a{
        display:flex; align-items:center;
        padding:0 12px;

        img{
            height:20px;
            min-width:20px;
            width:20px;
            z-index:auto;
        }
        span{
            color:rgb(249,249,249);
            font-size:13px;
            letter-spacing:1px;
            white-space:nowrap;
            position:relative;
            margin:2px 0 0 7px;

            &:before{
                content:'';
                height:2px;
                opacity:0;
                background-color:rgb(249,249,249);
                border-radius:0px 0px 4px 4px ;
                bottom:-6px;
                position:absolute; right:0; left:0;
                transform-origin:left center;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                width:auto;
                visibility:hidden;
            }
        }
        &:hover{
            span:before{
                transform:scaleX(1);
                visibility:visible;
                opacity:1 !important;
            }
        }
    }
    @media (max-width:768px){
        display:none;
        font-size:9px;
    }
`
const Login = styled.a`
    background-color:rgba(0,0,0, .6);
    padding:8px 16px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    border:1px #f9f9f9 solid;
    border-radius:5px;
    transition:all 200ms ease-out;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        cursor:pointer;
        border-color:transparent;
    }
`

const UserImg = styled.img`
    height:100%;
`
const DropDown = styled.a`
    position:absolute;
    top:48px; right:0px;
    background-color:rgb(19,19,19);
    border:1px solid rgba(151,151,151,.34);
    border-radius:4px;
    box-shadow:0 0 18px 0 rgb(0 0 0 / 50%);
    padding:10px;
    font-size:12px;
    letter-spacing 3px;
    width:100px;
    opacity:0;
    cursor:pointer;
`
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`
export default Header;