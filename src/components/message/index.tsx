import React from 'react';
import {useSelector} from "react-redux";
import './index.scss'

const Message = () => {
    const message =useSelector(state => state.routingReducer.message)
    const routing =useSelector(state => state.routingReducer.routing)
    return (
        <div className={`message ${message==='Response true!'?'message-true':'message-false'}`}>
            <h4>
                {message}
            </h4>
            {message==='Response true!'?(
                <div>
                    <span>Locations:</span>
                    {routing.map(item=>(<p>{item.location[0]}, {item.location[1]}</p>))}

                </div>
            ):<></>}
        </div>
    );
};

export default Message;
