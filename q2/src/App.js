import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('')
  const getData = () => {
    setLoading(true);
    fetch('https://api.publicapis.org/categories')
      .then(response => response.json())
      .then(d => {
        setData(d)
        setLoading(false)
      });
  }
  useEffect(() => {
    getData()
  },[])
  if(loading) return <h1>Loading...</h1>
  return (
    <div className="App">
      <input type="text" id="filter" name="filter" placeholder="Filter" onChange={(e) => setFilter(e.target.value)}/>
      <table>
        {
          data
          .filter(d => d.toLowerCase().includes(filter.toLowerCase()))
          .map(d => (
            <tr key={d}>
              <td>{d}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default App;
