import "./App.css";

const Stats = ({ itemList }) => {
  return (
    <p className="container stats">
      You have {itemList.length} items on your list, and you have package 0%
    </p>
  );
};

export default Stats;