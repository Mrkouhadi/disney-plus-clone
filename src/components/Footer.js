import React from 'react'
import styled from 'styled-components';

const Footer=()=> {
    return (
        <Container>
            <ul>
                <li> 
                    <select id="language">
                        <option value="english">English</option>
                        <option value="arabic">Arabic</option>
                    </select>
                </li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Interest-Based Ads</li>
            </ul>
            <p>Content on Disney+ is subject to availability.</p>
            <p>© Disney. All Rights Reserved.</p>

        </Container>
    )
}

const Container = styled.footer`
    margin:50px 0 20px 0;
    width:100%; min-height:10vw;
    background-color: #040714;
    display:grid; place-items:center;
    overflow:hidden;
    ul{
        display:flex;
        list-style:none;
        padding:5px;

        li{
            margin:5px 20px;
            cursor:pointer;
            color:#b2bfb5;
            font-size:13px;
            transition:all 200ms ease-out;

            @media only screen and (max-width:470px){
                margin:5px;
                font-size:10px;        
            }

            &:hover{
                color:#fff;
            }

            select{
                font-size:13px;
                color:#b2bfb5;
                cursor:pointer;
                background-color:transparent;
                border:none; outline:none;
                padding:0 10px;
                @media only screen and (max-width:470px){
                    font-size:10px;        
                }
            
            }

        }
    }
    p{
        text-align:center;
        color:#b2bfb5;
        letter-spacing:1px;
        font-size:13px;
        @media only screen and (max-width:470px){
            font-size:10px;        
        }
    }
    
    @media only screen and (max-width:470px){
        margin:60px 0 20px 0;

    }
`



export default Footer;