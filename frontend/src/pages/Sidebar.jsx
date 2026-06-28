import {
    FaHome,
    FaBook,
    FaPlusCircle,
    FaChartLine,
    FaCog
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "../styles/Sidebar.css";

function Sidebar() {

    return (

        <div className="sidebar">

            <h2 className="logo">
                StudyMate
            </h2>

            <Link to="/dashboard">
                <FaHome />
                Dashboard
            </Link>

            <Link to="/create-deck">
                <FaPlusCircle />
                Create Deck
            </Link>

            <Link to="#">
                <FaBook />
                My Decks
            </Link>

            <Link to="#">
                <FaChartLine />
                Progress
            </Link>

            <Link to="#">
                <FaCog />
                Settings
            </Link>

        </div>

    );

}

export default Sidebar;