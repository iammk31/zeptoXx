import './SubjectList.css';

const SubjectList = () => {
    return (
      <div className="subject-container">
        <h1>Subject List</h1>
        <div className="subject-buttons">
          <button className="subject-button">English</button>
          <button className="subject-button">Hindi</button>
          <button className="subject-button">Maths</button>
          <button className="subject-button">Science</button>
        </div>
      </div>
    );
  }
  
  export default SubjectList;
  