import PropTypes from 'prop-types';
import '../../index.css';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../bookService';
import GenreShow from '../genreShow/genreShow';

const Fantasy = () => {
    
    const [genreData, setGenreData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const dataLoad = async () => {
            try {
                const data = await fetchBooks('https://gist.githubusercontent.com/Mashrur-Kabir/4c2f4472893065c6f0b358c4f07b2ad7/raw/e79ab0e8cc6070aaa52c75ca5b09e876b72157ce/bookCategories.json');
                const selectedCategory = data.find(category => category.id === 'cat2'); // the selectedCategory will correctly hold the object with id of "cat2" if the JSON data is fetched successfully. 
                setGenreData(selectedCategory); // Set the selected category data
                setLoading(false); // Set loading state to false when data is loaded successfully.
            } catch (error) {
                console.error("Error loading genres:", error);
            }
        };

        dataLoad(); // Load data when the component mounts
    }, []);

    if (loading) {
        return <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto">Loading...</div>;
    }

    // Check if sections exist and handle potential cases
    const sections = genreData.sections || []; // "sections" property in the genreData object corresponds to an array of section objects

    return (
        <div>
            <h2 className="my-10 text-3xl font-bold text-center figtreeFont">Welcome to the {genreData.name} section</h2>
            <GenreShow key={genreData.id} sections={sections}></GenreShow>
        </div>
    );
};

Fantasy.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object),
};

/* The sections array contains multiple section objects, each with its own unique id, name, and books. 
To display each section and its associated books, you need to iterate over the sections array. 
By using .map(), you can generate a list of elements (<div>, <h2>, <ul>, etc.) for each section. */

export default Fantasy;
