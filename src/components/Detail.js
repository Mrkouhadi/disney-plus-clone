import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';
import db from '../firebase';
import { collection, getDocs } from "firebase/firestore"; 

const Detail=()=> {
    const {id} = useParams();
    const [detailData, setDetailData] = useState({});


    const fetchMovie = async (ID)=>{
        try{
                const querySnapshot = await getDocs(collection(db, "movies"));
                querySnapshot.forEach(doc => {
                    if(doc.id === ID){
                        return setDetailData((doc.data()));
                    }
                });
        }catch(error){
            alert(error.message)
        }
    };

    useEffect(() => {
        fetchMovie(id);

        return () => {
            setDetailData({});
          };
    }, [id])


    return (
        <Container>
            <Background>
                <img src={detailData.backgroundImg}
                     alt="" />
            </Background>
            <ImgTitle>
                <img src={detailData.titleImg}
                     alt="" />
            </ImgTitle>
            <ContentMedta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt=""/>
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt=""/>
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt=""/>
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    {detailData.title}
                </SubTitle>
                <Description>
                    {detailData.description}
                </Description>
            </ContentMedta>
        </Container>
    )
}
const Container = styled.div`
    position:relative;
    min-height:calc(100vh - 250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);

`
const Background = styled.div`
    position:fixed;
    left:0; top:0; right:0;
    opacity:.7;
    z-index:-1;

    img{
        width:100vw;
        height:100vh;

        @media(max-width:768px){
            width:initial;
        }
    }
`
const ImgTitle = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:flex-start;
    margin:0 auto;
    height:30vw;
    min-height:170px;
    padding-bottom:24px;
    width:100%;

    img{
        max-width:600px;
        min-width:200px;
        width:35vw;
    }
`
const ContentMedta = styled.div`
    max-width:874px;
`

const Controls = styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    margin:24px 0;
    min-height:56px;
`;

const Player = styled.button`
    font-size:15px;
    margin: 0 22px 0 0;
    padding: 0 24px;
    height: 56px;
    cursor:pointer;
    border-radius:4px;
    display:flex;
    align-items:center;
    justify-content:center;
    letter-spacing:1.8px;
    text-align:center;
    text-transform:uppercase;
    background:rgb(249,249,249);
    border:none;
    transition:all 200ms ease-in-out;
    img{
        width:32px;
    }
    &:hover{
        background:rgb(198, 198, 198)
    }

    @media(max-width:768px){
        height:45px;
        padding:0 12px;
        font-size:12px;
        margin:0 10px 0 0;

        img{
            width:25px;
        }
    }
`
const Trailer = styled(Player)` // grabbing all styles of Player
    background:rgba(0, 0, 0, .3);
    border:1px solid rgb(249, 249, 249);
    color:rgb(249,249,249);
    transition:all 200ms ease-in-out;

`
const AddList = styled.div`
    margin-right:16px;
    height:44px;
    width:44px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,.6);
    border-radius:50%;
    border:1px solid white;
    cursor:pointer;

    span{
        background-color: rgb(249,249,249);
        display:inline-block;

        &:first-child{
            height: 2px;
            transform:translate(1px, 0px) rotate(0deg);
            width:16px;
        }
        &:nth-child(2){
            height:16px;
            transform:translateX(-8px) rotate(0deg);
            width:2px;
        }
    }
`
const GroupWatch = styled.div`
    height:44px;
    width:44px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background:#fff;

    div{
        height:40px; width:40px;
        background:rgb(0,0,0);
        border-radius:50%;

        img{
            width:100%;
        }
    }

`
const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;

    @media (max-width:768px){
        font-size:12px;
    }
`
const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    padding:16px 0;
    color:rgb(249,249,249);

    @media (max-width:768px){
        font-size:14px;
    }

`








export default Detail;
