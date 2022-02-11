import React, { useState } from 'react';
import './App.css';
import { Button } from 'components';

function App() {
  const [isToggled, setToggled] = useState(true);
  return (
    <div className="App">
      <Button
        primary={true}
        backgroundColor={isToggled ? "darkturquoise" : "lightgray"}
        label={
          isToggled ? "AKTIF" : "TIDAK AKTIF"
        }
        onClick={() => setToggled(!isToggled)}
      ></Button>
    </div>
  );
}

export default App;
