import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { selectOriginal } from '../features/movie/movieSlice'

const Originals = (props)=> {
    const movies = useSelector(selectOriginal);
    return (
        <Container>
            <h4 style={{textAlign:'left'}}> Originals </h4>
            <Content>
                {
                    movies && movies.map((movie, index)=>{
                        return(
                            <Wrap key={index}>
                                <Link to={"/detail/"+movie.id}>
                                    {movie.id}
                                    <img src={movie.cardImg} alt={movie.title} />
                                </Link>
                            </Wrap>
                        )
                    })
                }
            </Content>
        </Container>
    )
}


const Container = styled.div`
    padding:0 0 26px;
`

const Content = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap:25px; gap:25px;


    @media only screen and (max-width:768px){
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`
const Wrap = styled.div`
    padding-top:56.25%;
    border-radius:10px;
    box-shadow:rgb(0 0 0 /69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border:3px solid rgba(249, 249, 249, .1);
    
    img{
        inset:0;
        display:block;
        width:100%; height:100%;
        object-fit:cover;
        position:absolute;
        transition:opacity 500ms ease-in-out;
        z-index:1;
        top:0;
    }

    &:hover{
        box-shadow:rgb(0 0 0 / 80%) 0 40px 58px -16px, rgb(0 0 0 / 72%) 0 30px 22px -10px;
        transform:scale(1.05);
        border-color:rgba(249, 249, 249, .8);
    }

`




export default Originals;




