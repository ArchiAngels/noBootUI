import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

import Toggler from './tlgController/toggler.jsx';
import UserList from "./tlgController/userList.jsx";

let tlgURL = 'http://localhost:3002';

const Container = styled.div`
    width:80vw;
    height:90vh;
    margin-left:auto;
    margin-top:10vh;

`;




function App(){
    return <>
        <Container>
            <Toggler url={tlgURL}/>
            <UserList url={tlgURL}/>
        </Container>
        
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);