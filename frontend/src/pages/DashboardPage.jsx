import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

import "../styles/Dashboard.css";

function DashboardPage() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [decks, setDecks] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchDecks();

    }, []);

    const fetchDecks = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get("/decks", {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            });

            setDecks(response.data);

        }

        catch (error) {

            console.error(error);

        }

    };

    const filteredDecks = decks.filter((deck) =>
        deck.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="content">

                <Navbar />

                <div className="container">

                    <h1>

                        Welcome Back, {user?.name} 👋

                    </h1>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search your decks..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="cards">

                        <div className="card">
                            <h2>{decks.length}</h2>
                            <p>Total Decks</p>
                        </div>

                        <div className="card">
                            <h2>0</h2>
                            <p>Flashcards</p>
                        </div>

                        <div className="card">
                            <h2>0%</h2>
                            <p>Progress</p>
                        </div>

                    </div>

                    <div className="deck-header">

                        <h2>My Decks</h2>

                        <button className="create-btn">

                            + New Deck

                        </button>

                    </div>
                    <h2>My Decks</h2>

                    {filteredDecks.length === 0 ? (

                        <p>No decks yet.</p>

                    ) : (

                        <div className="deck-grid">

                            {filteredDecks.map(deck => (

                                <div
                                    key={deck.id}
                                    className="deck-card"
                                >

                                    <h3>{deck.title}</h3>

                                    <p>{deck.description}</p>

                                    <small>{deck.color}</small>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default DashboardPage;