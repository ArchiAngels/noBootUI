import React from "react";
import styled , {keyframes} from "styled-components";

const ContainerItems = styled.div`
    padding:5px;
    background-color:#01e01e33;
    max-width:140px;

    cursor:pointer;
`;

const ContainerInput = styled.div`
    width:100px;
    height:40px;
    padding:5px;
    border-radius:20px;
    background-color:#00000025;
    position:relative;
`;

const Circle = styled.div`
    top:5px;
    position:absolute;
    width:30px;
    height:30px;
    border-radius:50%;
`;
const leftRight = keyframes`

    0%{
        left:5px;
    }
    100%{
        left:65px;
        
    }

`;

const rightLeft = keyframes`

    0%{
        left:65px;
    }
    100%{
        left:5px;
    }

`;

const Paragraph = styled.p`
    display:inline-block;
`;

export default function Toggler(props){
    let [isActive,setActive] = React.useState(false);
    let [isLoading,setLoading] = React.useState(true);

    let CurrentCircle = styled(Circle)`
        background-color:${isActive ? '#14f714':'#fff'};
        right: ${isActive ? '65px' : '5px'};
        animation:${isActive ? rightLeft : leftRight} 0.2s linear 1;
    `;

    function HandleClick(){
        props.Ajax(props.url + '/TurnOnOffBot','GET').then(e=>{
            console.log(e);
        })
        setActive(!isActive)
    }

    if(isLoading){
        props.Ajax(props.url +'/getCurrentStateOfBot','GET').then((e)=>{
            console.log(e);
            e = JSON.parse(e.value);
            setActive(e.isBotON);
            setLoading(false);
        })

    }

    return <>

    <ContainerItems onClick={HandleClick}>
        <ContainerInput>
            <CurrentCircle/>
        </ContainerInput>
        <Paragraph>is Running : {isActive ? 'Yes' : 'No'}</Paragraph>
    </ContainerItems>
        
    
    </>
}