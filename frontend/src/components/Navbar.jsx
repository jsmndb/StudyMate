function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav
      style={{
        height: "70px",
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
      }}
    >
      <h2>StudyMate</h2>

      <h3>
        Welcome, {user?.name}
      </h3>
    </nav>
  );
}

export default Navbar;