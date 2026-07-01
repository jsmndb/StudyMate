import { useState } from "react";
import api from "../services/api";

function CreateDeckModal({ closeModal, refreshDecks }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("Blue");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            await api.post(
                "/decks",
                {
                    title,
                    description,
                    color,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            refreshDecks();
            closeModal();

        } catch (error) {
            console.error(error);
            alert("Failed to create deck.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">

                <h2>Create New Deck</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Deck title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <select
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    >
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Purple</option>
                        <option>Orange</option>
                        <option>Red</option>
                    </select>

                    <div className="modal-buttons">
                        <button
                            type="button"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>

                        <button type="submit">
                            Create
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default CreateDeckModal;