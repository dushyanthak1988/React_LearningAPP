
function Profile(props){

    console.log(props); 
    const  { name , lastname, age} = props; 

    return < div>  <h1> Name :  {name } {lastname} , age : {age} 
    
     </h1>
     <h3> {props.children} </h3>
     </div>
}    

export default Profile; 