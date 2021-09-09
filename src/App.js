import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Hello from './components/Hello'
import Message from './components/Message'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBinding from './components/EventBinding'
import ParentComponen from './components/ParentComponent'
import UserGreeting from './components/UserGreeting' 
import NameList from './components/NameList'
function App() {
  return (
    <div className="App">
      <NameList />
    {/* <ParentComponen /> */}
    {/* <UserGreeting /> */}
    {/* <Greet name="Bruce" /> */}
    {/* <Greet name="Json" /> */}
    {/* <Welcome name="Bruce" heroName="Wonder Woman" /> */}
    {/* <Message /> */}
    {/* <Greet name="diana" heroName="Wonder Woman" /> */}
    {/* <FunctionClick /> */}
    {/* <ClassClick /> */}
    {/* <EventBinding /> */}
    </div>
  );
}

export default App;
