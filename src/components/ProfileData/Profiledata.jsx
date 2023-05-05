import React from "react";
import ProfileDataItem  from "./ProfileDataItem";

function ProfileData() {
const ProfileDataList =[{
    "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {         
        "city": "Billings",        
      },
      "email": "jennie.nichols@example.com",
      "Aniversarydate" : "2012-01-01",
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "picture": {       
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",        
      },
    
}];
 /*

for (const [i, ProfileDataItemobj] of ProfileDataList.entries()) {
   // list.push(<li>{product}</li>)
  
    <ProfileDataItem 
    name={ ProfileDataList[i].name.title +". "+  ProfileDataList[i].name.first  +" "+  ProfileDataList[i].name.last}
    location ={ ProfileDataList[i].location.city}
    email = { ProfileDataList[i].email}
    DOB = { ProfileDataList[i].dob.date} 
    avatar = { ProfileDataList[i].picture.medium}
    Aniversarydate = {  ProfileDataList[i].Aniversarydate}
    ></ProfileDataItem>
} 
*/ 
var i = 0 
return (
<React.Fragment>
<h1>Profile data</h1>
<hr/>
<ul>
 
<ProfileDataItem 
    name={ ProfileDataList[i].name.title +". "+  ProfileDataList[i].name.first  +" "+  ProfileDataList[i].name.last}
    location ={ ProfileDataList[i].location.city}
    email = { ProfileDataList[i].email}
    DOB = { ProfileDataList[i].dob.date} 
    avatar = { ProfileDataList[i].picture.medium}
    Aniversarydate = {  ProfileDataList[i].Aniversarydate}
    ></ProfileDataItem>
</ul>
</React.Fragment>
);


}

export default ProfileData;