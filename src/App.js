//import logo from './logo.svg';
import './App.css';
//import  Hello from  './components/Hello' 
import Profile from './components/Profile';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">     
       <Profile name="dushyantha">
         this is profile of person
       </Profile>
       <Profile name="manthi"></Profile>
       <Profile name="pudasri"></Profile>
       <Message MessageCode ="10"  MessageContent ="this Class Message Content "></Message>
      <Counter></Counter>  
    </div>
  );
}

export default App;
