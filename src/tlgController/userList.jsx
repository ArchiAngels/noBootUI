import React from "react";
import styled from 'styled-components';

const getUsers = require('../scripts/AjaxToTlg.js');

function User(props){
    return <>
        <br/>
        <br/>
        <br/>
        <p>{props.roomID}:</p>
        <ol>
            <li>name :{props.name}</li>
            <li>surname :{props.surname}</li>
            <li>email :{props.email}</li>

            <li>possibleTransaction :{props.possibleTransaction}</li>
            <li>acceptRules :{props.acceptRules}</li>
            <li>fillFormState :{props.fillFormState}</li>
        </ol>
    </>
}

export default function UserList(props){

    let [isLoading,setLoading] = React.useState(false);
    let [fetchedData,setFetchedData] = React.useState({users:[]});

    let usersWithTransactions = fetchedData.users.filter(e=> e.possibleTransaction) || [];
    React.useEffect(()=>{
        if(fetchedData.length === 0){
            // fetch auto mode
        }else{
            setLoading(false);
        }
        
    })

    function HandleClick(){
        let result = getUsers(props.url + '/userControl','GET');
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
            return <User 
                name={userData.name}
                surname ={userData.surname}
                roomID={userData.roomID}
                email={userData.email}

                possibleTransaction={userData.possibleTransaction}
                acceptRules={userData.acceptRules}
                fillFormState={userData.fillFormState}
                key={i}

            />
        })}
    
    </>
}