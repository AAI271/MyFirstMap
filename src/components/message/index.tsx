import {useSelector} from "react-redux";
import './index.scss'
import {IRouting, IState} from "../../models/models";

const Message = () => {
    const message =useSelector((state:IState) => state.routingReducer.message)
    const routing =useSelector((state:IState) => state.routingReducer.routing)
    return (
        <div className={`message ${message==='Response true!'?'message-true':'message-false'}`}>
            <h4>
                {message}
            </h4>
            {message==='Response true!'?(
                <div>
                    <span>Locations:</span>
                    {routing.map((item:IRouting)=>(<p>{item.location[0]}, {item.location[1]}</p>))}

                </div>
            ):<></>}
        </div>
    );
};

export default Message;
