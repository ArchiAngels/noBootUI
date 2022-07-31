import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

const AjaxToTlg = require('./scripts/AjaxToTlg.js');

import Toggler from './tlgController/toggler.jsx';
import UserList from "./tlgController/userList.jsx";
import AminControl from './tlgController/AdminControl.jsx';

let tlgURL = 'http://localhost:3002';

const Container = styled.div`
    width:80vw;
    height:90vh;
    margin-left:auto;
    margin-top:10vh;

`;

let Column = styled.div`
    float:left;
    padding:1rem 2rem;
    height:100%;
    background-color:#0000000A;

`;




function App(){
    return <>
        <Container>
        
            <Column>
                <Toggler url={tlgURL} Ajax={AjaxToTlg}/>
            </Column>
            <Column>
                <UserList url={tlgURL} Ajax={AjaxToTlg}/>
            </Column>
            <Column>
                <AminControl url={tlgURL} Ajax={AjaxToTlg}/>
            </Column>
            
            
        </Container>
        
    </>
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);