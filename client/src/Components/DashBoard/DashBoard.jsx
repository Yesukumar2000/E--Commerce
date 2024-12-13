import './DashBoard.css';
import Header from './Header/Header';
import Tasks from './Main/Tasks';
import SideBar from './SideBar/SideBar';

function DashBoard() {
  return (
    <div className="dashboard-container">
      <Header  />
      <SideBar className="side-bar" />
      <div className="main">
        <Tasks />
      </div>
    </div>
  );
}

export default DashBoard;
