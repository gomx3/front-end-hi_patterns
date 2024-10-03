import React from 'react';
import '../App.css';
import useSecureUserData from '../hooks/useSecureUserData';

const UserProfile = () => {
  const userData = useSecureUserData(); // 커스텀 훅

  if (!userData) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className="user-profile">
      <p><strong>Username: </strong> {userData.username}</p>
      <p><strong>Password: </strong> 
        {userData.password ? userData.password : 'Access Denied'}
      </p>
    </div>
  );
};

export default UserProfile;