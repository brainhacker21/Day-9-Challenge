
import CompTiIn from './Component/CompTiIn';
import CompTable from './Component/CompTable';
import './App.css';
import CompButton from './Component/CompButton';

function App() {


return (
<div className="App">
  <h1>Form Input Data</h1>
<form>
<CompTiIn /> <br/>
<CompButton/>
</form>
<CompTable/>
</div>
);
}

export default App;