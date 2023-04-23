//import {Messageduka} from '../components/Messageduka';   
import Messageduka from '../components/Messageduka';

const name = "Dushyantha";

const DisspalyMessage =() => {
    return "I need help ";
}

function Hello() {
return  <div> 
    <h1> Hello  world ..!! {name} </h1>
    <h1> the Message is : { DisspalyMessage() } </h1>
    <Messageduka></Messageduka>
    </div>
 }
//<Messageduka></Messageduka>
//const Hello = ()=> <h1> Hello there</h1>

export default Hello; 