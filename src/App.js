import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <div>
        <Button name='OUT BID'
          styleForButton='redButton'
        />
      </div>
      <div>
        <Button name='BID'
          styleForButton='regularButton'
        />
      </div>
      <div>
        <Button name='START'
          styleForButton='whiteButton'
        />
      </div>
    </div>
  )
}

export default App;
