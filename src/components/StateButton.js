import { useState } from "react";

const StateButton = (props) => {
    const [count, setCount] = useState(0)

    const clickHandler = () => {
        setCount(count + 1);
        console.log('Clicks have been updated')
    }

    return (
        <div>       
          <button id="ClickMe" className="click-me" onClick={() => clickHandler()}>Click Me</button>
          <p>You have clicked: {count} {count === 1 ? 'time' : 'times'}</p>
        </div>
      )
};

export default StateButton;