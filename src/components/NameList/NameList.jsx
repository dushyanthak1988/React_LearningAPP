 
import React from "react";
import NameListItem from "./NameLIstitem";
function  NameList(){
 
     return (
        <div>
            <h1> Name List </h1>
            <hr></hr>
            <ul>
                <NameListItem name="Dushyantha Kalehewatte" course="React"  ></NameListItem>
                <NameListItem name="Pudasari Kalehewatte" course="C#"></NameListItem>
                <NameListItem name="manthi Gamage" course="java" ></NameListItem>
                <NameListItem name="Kasuni Kalehewatte" course="Angular" ></NameListItem>
                <NameListItem name="Ajanth soriarchchi" course="React" ></NameListItem>
                <NameListItem name="Shantha Kalehewatte" course="React"></NameListItem>
            </ul>
        </div>
     );


}

export default NameList;
