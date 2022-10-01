
import './App.css';
import List from './components/List'
function App() {
  //array of items
 const Items= [{text:"rama krishna1",index:1},{text:"rama krishna2",index:2},{index:3}]
  return (
    <List items={Items}/>
  );
}

export default App;
