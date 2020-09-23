import React from "react";
import { useDispatch } from "react-redux";
import { firebaseAuth } from "../../lib/firestore";
import { resetUser } from "../../redux/user/user.action";
import CustomButton from "../custom-button";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    firebaseAuth.signOut();
    dispatch(resetUser());
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <CustomButton onClick={handleLogOut}>Log Out</CustomButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
