import { useEffect, useState } from "react";
import { fetchBooks } from "../bookService";
import Genre from "../Genre/Genre";
// import { useParams } from "react-router-dom";

const Genres = () => {

    // const { bookId } = useParams(); // Extract bookId from URL
    const [genreData, setGenreData] = useState([]);

    useEffect(() => {
        const dataLoad = async () => {
            try {
                // Use the bookId in the fetchBooks function
                const data = await fetchBooks(`https://gist.githubusercontent.com/Mashrur-Kabir/4c2f4472893065c6f0b358c4f07b2ad7/raw/e79ab0e8cc6070aaa52c75ca5b09e876b72157ce/bookCategories.json`);
                setGenreData(data);
            } catch (error) {
                console.error("Error loading genres:", error);
            }
        };

        dataLoad(); // Load data when the component mounts
    }, []);

    return (
        <div>
            {
                genreData.map((genre, idx) => <Genre key={idx} genre={genre}></Genre> )
            }
        </div>
    );
};

export default Genres;

/* workflow: 

Book Component:
It displays the book details.
When clicking the "Show Books" link, it navigates to a dynamic route using NavLink, embedding the id into the URL.

Genres Component:
This component is rendered when the user navigates to /genres/:id.
It uses useParams to extract the id from the URL. 

When you navigate to the Genres component using a route like /genres/:bookId, React Router extracts the bookId parameter (When you navigate to genres route using a NavLink or Link, you specify the actual bookId you want to embed in the URL) from the URL. When you use useParams() inside the Genres component, it gives you access to these URL parameters.

Note:

APIs like JSONPlaceholder: These are dynamic, and the server is designed to handle queries. When you add ?postId=1, the server processes the query and returns only the data that matches postId=1.

Static JSON files (like our Gist): These are static and served as a whole document. There is no backend logic to process queries, so you cannot filter or access specific sections of the JSON via URL parameters. You'll always get the full JSON document, and filtering has to be done client-side, in your code.*/