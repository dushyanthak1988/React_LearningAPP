
function Profile(props){

    console.log(props);
    var da =  props.name+ "jake"
    return < div>  <h1> Name :  {da}
    
     </h1>
     <h3> {props.children} </h3>
     </div>
}    

export default Profile; 