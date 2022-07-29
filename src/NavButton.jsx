import React from 'react';
import { useNavigate } from 'react-router-dom';
const NavButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('view-users')}>View Users</button>
      <button onClick={() => navigate('add-user')}>Add User</button>
    </div>
  );
};

export default NavButton;
