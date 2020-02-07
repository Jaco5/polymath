import React from 'react';

// import './UserInput.css';

const UserInput = (props) => {
    return (
        <form className="user-input">
            <label>
                {props.label}
                <input type="text" name={props.name} onChange={props.onChange} />
            </label>
            <button type="submit" value={props.value} onClick={props.onClick}>Poof</button> 
        </form>
    )
};

export default UserInput;