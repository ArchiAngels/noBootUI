import React from 'react';
import styled from 'styled-components';

let Container = styled.div`
    width:400px;
    min-height:200px;
    border-radius:30px;
    background-color:#000;
    padding:10px;
    color:#fff;

`;

export default function AdminControl(props){

    return <>
        <Container>
            <p>Admin</p>
        </Container>
    </>
}