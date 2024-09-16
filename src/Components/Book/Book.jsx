import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import './Book.css'

const Book = ({book}) => {

    const {name} = book;

    // console.log(book);

    return (
        <NavLink to={`/genres`} className='figtreeFont cateCard border rounded-lg flex flex-1 flex-col items-center gap-6 py-8'>
            <h2 className='text-xl font-bold bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent'>{name}</h2>
        </NavLink>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    id: PropTypes.number,
    name: PropTypes.string,
};

/* In your Book component, you're using the NavLink component to navigate to a route like /genres/:id where id is the book.id. This means when you click on "Show Books," the id will be part of the URL, and you can use useParams in the Genres component to access this id. */

export default Book;