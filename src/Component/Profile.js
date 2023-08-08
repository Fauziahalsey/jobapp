import React from 'react';

function Profile({ user }) {
  return (
    <div>
      <h1>Welcome to Your Profile</h1>
      <h2>Personal Information</h2>
      {/* Display user's personal information here */}
      
      <h2>Courses</h2>
      {/* Display user's courses here */}
      
      <h2>Reports</h2>
      {/* Display user's reports here */}
    </div>
  );
}

export default Profile;
