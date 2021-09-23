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
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyle.css'
import styles from './appStyles.module.css'
function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    <Inline />
    {/* <Stylesheet primary={true} /> */}
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
