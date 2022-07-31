import React from "react";
import styled from 'styled-components';

import SuccesTransaction from "./SuccesTransaction.jsx";

let UserInfo = styled.ol`
    list-style-type: decimal-leading-zero;
    font-size:1rem;
    background-color:lightcoral;
    border-radius:15px;
    padding:1rem 3rem;
    margin-bottom:1rem;
    & li{
        margin-bottom:4px;
    }
`;

let HeaderInfo = styled.span`
    font-weight:bold;
    padding:0 2px;
`;

let ValueInfo = styled.span`
    font-weight:medium;
    padding:0 2px;
`;

function User(props){
    return <>
        <br/>
        <UserInfo>
            <li>
                <HeaderInfo>
                    roomID
                </HeaderInfo>
                :
                <ValueInfo>
                    {props.roomID}
                </ValueInfo>
            </li>
            <li>
                <HeaderInfo>
                    name
                </HeaderInfo>
                :
                <ValueInfo>
                    {props.name}
                </ValueInfo>
            </li>
            <li>
                <HeaderInfo>
                    surname
                </HeaderInfo>
                :
                <ValueInfo>
                    {props.surname}
                </ValueInfo>
            </li>
            <li>
                <HeaderInfo>
                    email
                </HeaderInfo>
                :
                <ValueInfo>
                    {props.email}
                </ValueInfo>
            </li>
            <li>
                <HeaderInfo>
                    possibleTransaction
                </HeaderInfo>
                :
                <ValueInfo>
                    {props.possibleTransaction}
                </ValueInfo>
            </li>
            <SuccesTransaction url={props.url} Ajax={props.Ajax} roomID={props.roomID}/>
        </UserInfo>
    </>
}

export default function UserList(props){

    let [isLoading,setLoading] = React.useState(false);
    let [fetchedData,setFetchedData] = React.useState({users:[]});

    let usersWithTransactions = fetchedData.users.filter(e=> e.possibleTransaction && e.possibleTransaction.length > 0 && e.roomID) || [];
    console.log(usersWithTransactions);
    React.useEffect(()=>{
        if(fetchedData.length === 0){
            // fetch auto mode
        }else{
            setLoading(false);
        }
        
    })

    function HandleClick(){
        let result = props.Ajax(props.url + '/userControl','GET');
            result.then((e)=>{
                console.log(e);
                setLoading(false);
                let data = JSON.parse(e.value);
                setFetchedData(data);
                // setFetchedData()
            });
        setLoading(true);
    }


    if(isLoading){
        return <>...</>
    }

    return <>
        <p>UserList</p>

        <p onClick = {HandleClick}>Get users</p>

        <p>{usersWithTransactions ? 'Actually users: ' + usersWithTransactions.length : ''}</p>

        {usersWithTransactions.map((e,i)=>{
            function isObject(value){
                let result = typeof value === 'object' && value !== null;
                return !result ? value : false;

            }
            let userData = {
                name:isObject(e.name) || 'no name',
                surname :isObject(e.surname) || 'no surname',
                roomID :isObject(e.roomID) || 'no room id',
                email :isObject(e.email) || 'no email',

                possibleTransaction :isObject(e.possibleTransaction ? e.possibleTransaction[0] : false) || 'no possibleTransaction',
                acceptRules :isObject(e.acceptRules)+'' || 'no acceptRules',
                fillFormState :isObject(e.fillFormState) || 'no fillFormState',

            }

            if(userData.roomID === 'no room id'){
                return ""
            }else{
                return <User 
                name={userData.name}
                surname ={userData.surname}
                roomID={userData.roomID}
                email={userData.email}

                possibleTransaction={userData.possibleTransaction}
                acceptRules={userData.acceptRules}
                fillFormState={userData.fillFormState}
                key={i}

                Ajax={props.Ajax}
                url={props.url}

            />
            }
            
        })}
    
    </>
}