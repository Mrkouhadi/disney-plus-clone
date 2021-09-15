import React from 'react'
import styled from 'styled-components';

const Login=(props)=> {

    return (
        <Container>
                <Content>
                    <CTA>
                        <CTALogoOne src="/images/cta-logo-one.svg"/>
                        <SignUp>GET IT ALL THERE</SignUp>
                        <Description>
                        Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                        </Description>
                        <CTALogoTwo src="/images/cta-logo-two.png"/>

                    </CTA>
                    <BgImg />   
                </Content>
        </Container>
    )
}
const Container = styled.section`
    display:flex;
    overflow:hidden;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;
const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`;
const BgImg = styled.div`
    height:100%;
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url("/images/login-background.jpg");
    z-index:-1;
    position:absolute; top:0; left:0; right:0;
`;
const CTA = styled.div`
    max-width:650px;
    display:flex; flex-wrap:wrap; flex-direction:column; justify-content:center;
    align-items:center; text-align:center;
    margin:0 auto 2vw auto;
    transition:opacity 200ms ease-out;
    width:100%;
`
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px; min-height:1px;
display:block;
width:100%;
`
const SignUp = styled.a`
    border:none;
    font-weight:bold; font-size:18px;
    color:#f9f9f9;
    background-color:#0063e5;
    margin-bottom:12px;
    width:100%;
    letter-spacing:1.5px;
    padding:16.5px 0;
    border-radius:4px;
    cursor:pointer;
    transition:all 200ms ease;
    &:hover{
        background-color:#0483ee;
    }
`
const Description = styled.p`
    color:hsla(0, 0%, 95.3%, 1);
    font-size:11px;
    letter-spacing:1.5px;
    margin:0 0 24px;
    line-height:1.5;
`
const CTALogoTwo = styled.img`
max-width:600px; width:100%;
min-height:1px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
`


export default Login;
