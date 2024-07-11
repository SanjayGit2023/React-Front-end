import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const items = await fetchData();
        setData(items);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App is ready</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h2>{item.attributes.Compile}</h2> {/* Adjust this to your correct attribute name */}
              <div>
                {item.attributes.Content && item.attributes.Content.map((contentItem, index) => (
                  <div key={index}>
                    {contentItem.type === 'heading' && (
                      <p>{contentItem.children.map(child => child.text).join(' ')}</p>
                    )}
                    {/* Handle other content types here if necessary */}
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;



