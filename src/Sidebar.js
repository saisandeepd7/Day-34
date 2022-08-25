// import { MdDashboardCustomize, MdOutlineRememberMe, MdEmojiEvents } from "react-icons/md";
// import { SiBookstack } from "react-icons/si";
// import { FiSettings } from "react-icons/fi";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import RememberMeIcon from '@mui/icons-material/RememberMe';

import { Link } from "react-router-dom";
export function Sidebar() {
  return <div className='col-lg-2 side-bar'>
    <div className='head'>
      <h2>LIBRARY</h2>
    </div>
    <hr className="solid" />
    <div className='side-bar-list'>
      <ul>
        <li><Link to="/dashboard"><DashboardCustomizeIcon /><span>Dashboard</span></Link></li>
        <li><Link to="/books"><LibraryBooksIcon /><span>Books</span></Link></li>
        <li><Link to="/members"><RememberMeIcon /><span>Members</span></Link></li>
        <li><a><EmojiEventsIcon /><span>Events</span></a></li>
        <li><a><ManageAccountsIcon /><span>Settings</span></a></li>
      </ul>
    </div>
  </div>;
}