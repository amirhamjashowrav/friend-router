import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;

    const history = useHistory();
    const handleClick = (friendId)=> {
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    const friendStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px' 
    }
    return (
        <div style = {friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p><Link to = {`/friend/${id}`}>Show Details of ID Number {id} </Link></p>
            <button onClick = {()=> handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;