import React from "react";  
import moment from "moment/moment";

function ProfileDataItem (Propos){
    return  (
        <li>  
             <img src= { Propos.avatar} alt="Profile pic" /> 
            <p>   {Propos.name} </p>
            <p> location : {Propos.location}</p>
            <p> Email : {Propos.email} </p>
            <p> Aniversarydate :  {' '} 
              { new Intl.DateTimeFormat ( 'en-US' ).format( new Date( Propos.Aniversarydate) )} </p>
              <p> Birthday date :  { moment( Propos.DOB).format ("yyyy-MM-DD")} </p>

        </li>
    ); 
 

}

export  default ProfileDataItem;
