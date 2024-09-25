import { useState } from "react";
import "./App.css";

const Form = ({ itemList, setItemList }) => {
  const [inputText, setInputText] = useState("");
  const [itemNumber, setItemNumber] = useState(0);

  const addHandler = () => {
    // Create a copy of itemList and add a new item
    const myList = [...itemList];
    myList.push({
      inputText,
      itemNumber,
    });
    setItemList(myList); // Update the state
  };

  return (
    <div className="container form">
      {/* text */}
      <p>Kya kya chahiye hai trip k liye??</p>

      {/* dropdown */}
      <select onChange={(e) => setItemNumber(Number(e.target.value))}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
          <option key={elem} value={elem}>{elem}</option>
        ))}
      </select>

      {/* input */}
      <input
        onChange={(e) => setInputText(e.target.value)}
        placeholder="items you need"
        value={inputText}
      />

      {/* button */}
      <button onClick={addHandler}>Add</button>
      
    </div>
  );
};

export default Form;
