import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
function App() {
  return (
    <div className="App">
      
      <div className='container'>
        <div className='row d-flex justify-content-center'>

          <div className='col-12 col-md-6 mb-4'>
            <Form />
          </div>

          <div className='col-12 ' style={{backgroundColor:"#ebede8"}}>
            <Table />
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
