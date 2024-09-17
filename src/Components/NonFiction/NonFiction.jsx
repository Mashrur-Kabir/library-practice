import PropTypes from 'prop-types';
import '../../index.css';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../bookService';
import GenreShow from '../genreShow/genreShow';

const NonFiction = () => {

    const [genreData, setGenreData] = useState([]); // Initialize as an object

    useEffect(() => {
        const dataLoad = async () => {
            try {
                const data = await fetchBooks('https://gist.githubusercontent.com/Mashrur-Kabir/4c2f4472893065c6f0b358c4f07b2ad7/raw/e79ab0e8cc6070aaa52c75ca5b09e876b72157ce/bookCategories.json');
                const selectedCategory = data.find(category => category.id === 'cat3'); // Filter by 'cat1' category
                setGenreData(selectedCategory); // Set the selected category data
            } catch (error) {
                console.error("Error loading genres:", error);
            }
        };

        dataLoad(); // Load data when the component mounts
    }, []);

    if (!genreData) {
        return <p className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto">Loading...</p>;
    }

    const sections = genreData.sections || [];

    return (
        <div>
            <h2 className="my-10 text-3xl font-bold text-center figtreeFont">Welcome to the {genreData.name} section</h2>
            <GenreShow key={genreData.id} sections={sections}></GenreShow>
        </div>
    );
};

NonFiction.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object),
};

export default NonFiction;