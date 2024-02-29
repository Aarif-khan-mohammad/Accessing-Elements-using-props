import './index.css'

const UserProfile = (props) => {
  const { userDetails } = props;
  const { imageUrl, heading, para, uniqueNo } = userDetails;

  return (
    <li className= {`card-${uniqueNo}`} >
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name"> {heading} </h1>
        <p className="user-designation"> {para} </p>
        <button className= {`button-${uniqueNo}`}>Show More</button>
      </div>
    </li>
  );
};
export default UserProfile;
