import PropTypes from 'prop-types';

const GenreShow = ({sections}) => {
    return (
        <div>
            {
                sections.length > 0 ? (
                    sections.map(section => (
                        <div className="my-8 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-900" key={section.id}>
                            <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-400">{section.name}</h2>
                            <ul className="space-y-4">
                                {section.books.map(book => (
                                    <li key={book.id} className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md">
                                        <p className="text-lg font-medium text-white">{book.title}</p>
                                        <p className="text-sm text-gray-300">by {book.author} ({book.publicationYear})</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <p className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto text-gray-400">
                        No data found :(
                    </p>
                )
            }
        </div>
    );
};

GenreShow.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object),
};

export default GenreShow;