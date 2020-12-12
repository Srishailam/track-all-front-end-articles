import './App.css';
import Card from './components/Card/Card';
import styled from 'styled-components/macro';
import DATA from './data.json'

const CardList = styled.div`
  postion: relative;
  margin: 10px;
  padding: 20px;
  border: 1px solid green;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 30px;
`;
function App() {
  return (
    <div className="App">
      <CardList>
        {
          (DATA || []).map( (item,idx) => <Card key={item.id} item={item} /> )
        }
      </CardList>
    </div>
  );
}

export default App;
