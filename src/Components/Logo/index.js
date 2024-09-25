import "./App.css";
import tree from "./Assets/tree.png";
import briefcase from "./Assets/briefcase.png";

const Logo = () => {
  return (
    <div style={{marginTop:"50px"}} className="container logo">
      <div className="imageBox">
        <img src={tree} alt="tree" />
      </div>
      <h1>Main hun Logo</h1>
      <div className="imageBox">
        <img src={briefcase} />
      </div>
    </div>
  );
};

export default Logo;
