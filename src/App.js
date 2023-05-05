//import logo from './logo.svg';
import './App.css';
//import  Hello from  './components/Hello' 
import Profile from './components/Profile';
import Message from './components/Message';
import Counter from './components/Counter';
import Resume from './components/Resume';
import  ProductList from './components/ProductList/ProductList'
import NameList  from './components/NameList/NameList'
import Ajaxcall from './components/AjexCall/Ajaxcall'
import AxiosAjexCall  from './components/AjexCall/AxiosAjexCall'

function App() {
  return (
    <div className="App">     
       <Profile name="dushyantha" lastname ="kalehewatte" age ="34" >
         this is profile of person
       </Profile>
       <Profile name="manthi" lastname ="gamage" age ="33" ></Profile>
       <Profile name="pudasri" lastname ="kalehewatte" age ="4"></Profile>
       <Message MessageCode ="10"  MessageContent ="this Class Message Content "></Message>
      <Counter></Counter>  
      <Resume name="Dushyantha kalehewatte"></Resume>
      <ProductList></ProductList>
      <NameList></NameList>
      <Ajaxcall></Ajaxcall>
      <AxiosAjexCall></AxiosAjexCall>

    </div>
  );
}

export default App; 
