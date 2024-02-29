import UserProfile from "./components/UserProfile/index.jsx";
import './App.css';

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    heading: "The Seasons Latest",
    para: "Get the seasons all latest designs in a flick of your hand",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    heading: "Our New Designs",
    para: "Get the designs developed by our In-house team all for yourself",
},
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    heading: "Insiders",
    para: "Get the top class products for yourself with an extra off",
},
];

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map((eachItem) => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
      ))}
    </ul>
  </div>
);
export default App;
