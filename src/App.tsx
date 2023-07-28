
import './App.css'
import MapTest from "./components/map-test/index";
import TableRoutes from "./components/table/index";
import Message from "./components/message/index";

function App() {


    return (
    <>
        <div className="container">
            <div className="table__info">
                <TableRoutes/>
                <Message/>
            </div>
            <MapTest/>
        </div>
    </>
  )
}

export default App
