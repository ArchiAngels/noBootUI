import React from "react";
import styled from "styled-components";

let Container = styled.div`
    width:150px;
    height:50px;
    border-radius:25px;
    padding:5px;
    text-align:center;
    cursor:pointer;
    background-color:greenyellow;
    &:hover{
        & p{
            text-decoration:underline;
        }
    }

`;

let Text = styled.p`
    transition:text-transform 0.15s;
    line-height:40px;
`;


export default function setSuccesTransaction(props){

    let [isLoading,setLoading] = React.useState(false);
    const {Ajax,url,roomID} = props;


    function handleClick(){
        setLoading(true);
        Ajax(url + '/setSuccesTransaction' +'/'+ roomID,'GET').then(e=>{
            console.log(e);
            setLoading(false);
        })
    }

    if(isLoading){
        return<>...</>
    }

    return <>

        <Container onClick={handleClick}>
            <Text>Succes</Text>
        </Container>

    </>
}