import { useState } from "react";
import "./App.css";

const PackagingList = ({ itemList, setItemList }) => {
  const [selectedNumber, setSelectedNumber] = useState(1); 
  const [selectAll, setSelectAll] = useState(false);  // New state to track Select All checkbox

  // Toggle select all checkboxes
  const toggleSelectAll = () => {
    const updatedList = itemList.map(item => ({
      ...item,
      isChecked: !selectAll // Set all items to the opposite of selectAll state
    }));
    setItemList(updatedList);
    setSelectAll(!selectAll);  // Toggle the state of Select All
  };

  const deleteCheckedHandler = () => {
    const updatedList = itemList.filter(item => !item.isChecked); // Remove checked items
    setItemList(updatedList);
  };

  const deleteByNumberHandler = () => {
    const updatedList = itemList.filter(item => item.itemNumber !== selectedNumber); // Remove selected items by dropdown
    setItemList(updatedList);
  };

  const toggleCheckHandler = (index) => {
    const updatedList = [...itemList];
    updatedList[index].isChecked = !updatedList[index].isChecked; // Toggle individual checkboxes
    setItemList(updatedList);
  };

  return (
    <div className="container packaging">
      {/* Select All Checkbox */}
      <div style={{ marginBottom: "10px" }}>
        <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
        <label>Select All</label>
      </div>

      <div className="itemList">
        {itemList.map((item, index) => (
          <ItemList 
            key={index} 
            item={item} 
            toggleCheck={() => toggleCheckHandler(index)} 
          />
        ))}
      </div>
      
      <div>
        <select onChange={(e) => setSelectedNumber(Number(e.target.value))}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => (
            <option key={elem} value={elem}>{elem}</option>
          ))}
        </select>
        <button onClick={deleteByNumberHandler}>Delete Selected</button>
        <button onClick={deleteCheckedHandler}>Clear Checked</button>
      </div>
    </div>
  );
};

export default PackagingList;

const ItemList = ({ item, toggleCheck }) => {
  return (
    <div className="item">
      <input type="checkbox" checked={item.isChecked || false} onChange={toggleCheck} />
      <p>{item.itemNumber} kg</p>
      <p>{item.inputText}</p>
      {/* <button>x</button> */}
    </div>
  );
};
