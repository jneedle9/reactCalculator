import OverallRender from "./OverallRender";
import SetNumContextProvider from "./context/setNum";
import { DisplayNumber } from "./DisplayNumber";


const App = () => { 
    return(
        <div>
        <SetNumContextProvider>
                <OverallRender />
        </SetNumContextProvider>
        </div>
    )
 }

 export default App