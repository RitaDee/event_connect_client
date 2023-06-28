// /* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../images/logo.png';
// import '../styles/style.css';
// import '../styles/main.css';

// const SideBar = () => (
//   <nav>
//     <div className="sidebar-header">
//       <div className="sidebar-header-icon">
//         <img className="logo" src={logo} alt="Our logo" />
//       </div>
//     </div>
//     <ul className="sidebar-list">
//       <li className="sidebar-item">
//         <Link to="/events" className="link">
//           EVENTS
//         </Link>
//       </li>
//       <li className="sidebar-item">
//         <Link to="/add_event" className="link">
//           ADD EVENT
//         </Link>
//       </li>
//       <li className="sidebar-item">
//         <Link to="/events/delete" className="link">
//           DELETE EVENT
//         </Link>
//       </li>
//       <li className="sidebar-item">
//         <Link to="/reserve" className="link">
//           RESERVE
//         </Link>
//       </li>
//       <li className="sidebar-item">
//         <Link to="/reservations" className="link">
//           MY RESERVATIONS
//         </Link>
//       </li>
//     </ul>
//     {/* line 30 needs to be checked */}
//     <Link to="/signin" className="link sign-out-side">
//       Sign Out
//     </Link>
//   </nav>
// );

// export default SideBar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/style.css';
import '../styles/main.css';

const SideBar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      // Make an API request to sign out the user
      const response = await fetch('http://127.0.0.1:3000/api/v1/users/sign_out', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary authentication headers
        },
      });

      if (response.ok) {
        // Clear any user-related data from the local storage or state
        // For example:
        localStorage.removeItem('accessToken');

        // Log a success message
        console.log('Sign out successful');

        // Navigate to the sign-in page
        navigate('/signin');
      } else {
        // Handle sign-out failure
        // Display an error message or perform any necessary actions
        console.log('Sign out failed:', response);
      }
    } catch (error) {
      // Handle sign-out failure due to network or other errors
      // Display an error message or perform any necessary actions
      console.error('Error during sign out:', error);
    }
  };

  return (
    <nav>
      <div className="sidebar-header">
        <div className="sidebar-header-icon">
          <img className="logo" src={logo} alt="Our logo" />
        </div>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <Link to="/events" className="link">
            EVENTS
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/add_event" className="link">
            ADD EVENT
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/events/delete" className="link">
            DELETE EVENT
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/reserve" className="link">
            RESERVE
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/reservations" className="link">
            MY RESERVATIONS
          </Link>
        </li>
      </ul>
      <button type="button" className="link sign-out-side" onClick={handleSignOut}>
        Sign Out
      </button>
    </nav>
  );
};

export default SideBar;
