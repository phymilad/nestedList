import Tree from './tree/tree'
import './App.css';
import treeData from './tree/treeData'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
function App() {
  return (
    <Tree data={treeData} onClick={(id) => console.log(id)}/>
  );
}

export default App;
