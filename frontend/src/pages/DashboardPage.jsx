import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DashboardPage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: "40px" }}>
          <h1>Hello, {user?.name} 👋</h1>

          <p>
            Ready to study today?
          </p>

          <button>
            Create New Deck
          </button>

          <h2 style={{ marginTop: "40px" }}>
            Recent Decks
          </h2>

          <p>No decks yet.</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;