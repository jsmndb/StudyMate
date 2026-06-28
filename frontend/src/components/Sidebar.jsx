import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#f5f5f5",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>StudyMate</h2>

      <hr />

      <p>
        <Link to="/dashboard">
          Dashboard
        </Link>
      </p>

      <p>
        <Link to="/create-deck">
          Create Deck
        </Link>
      </p>

      <p>My Decks</p>

      <p>Progress</p>
    </div>
  );
}

export default Sidebar;