import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/Dashboard.css";

function DashboardPage(){

    const user = JSON.parse(localStorage.getItem("user"));

    return(

        <div className="dashboard">

            <Sidebar/>

            <div className="content">

                <Navbar/>

                <div className="container">

                    <h1>

                        Welcome Back,

                        {user?.name}

                        👋

                    </h1>

                    <div className="cards">

                        <div className="card">

                            <h2>0</h2>

                            <p>Total Decks</p>

                        </div>

                        <div className="card">

                            <h2>0</h2>

                            <p>Flashcards</p>

                        </div>

                        <div className="card">

                            <h2>0</h2>

                            <p>Study Streak</p>

                        </div>

                    </div>

                    <h2>

                        Recent Decks

                    </h2>

                    <p>

                        You haven't created any decks yet.

                    </p>

                </div>

            </div>

        </div>

    )

}

export default DashboardPage;