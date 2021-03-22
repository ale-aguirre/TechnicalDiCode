import React from "react";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import "./Logout.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };
  return (

        <MeetingRoomIcon className="header__icono" onClick={(e) => handleLogout(e)} />

  );
};

export default Logout;
