import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase';
import { collection, getDocs } from '@firebase/firestore';

import {setMovies} from '../features/movie/movieSlice';
import {selectUserName} from '../features/user/userSlice';

import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Viewers from './Viewers'
import Trending from './Trending';

const Home=()=> {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals =  [];
    let trending =   [];



    useEffect( () => {
      const fetchMovies = async()=>{
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
          // console.log(recommends);
          switch (doc.data().type) {
                case "recommend":
                  recommends = [...recommends, { id: doc.id, ...doc.data() }];
                  break;
                case "new":
                  newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                  break;
                case "original":
                  originals = [...originals, { id: doc.id, ...doc.data() }];
                  break;
                case "trending":
                  trending =  [...trending, { id: doc.id, ...doc.data() }];
                  break;
              }
              dispatch(setMovies({
                recommend:recommends,
                newDisney:newDisneys,
                original:originals,
                trending:trending,
              }));
          });
      }
          fetchMovies();
    }, [userName]);

    return (

        <Container>
           <ImgSlider />
           <Viewers />
           <Recommends />
           <NewDisney />
           <Originals />
           <Trending />
        </Container>
    )
}


const Container = styled.main`
    position:relative;
    min-height:calc(100vh - 250px);
    overflow:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw + 5px);

    &:after{
        content:'';
        position:absolute; inset:0;
        background:url('/images/home-background.png') center center / cover no-repeat fixed;
        opacity:1;
        z-index:-1;

    }

`

export default Home;