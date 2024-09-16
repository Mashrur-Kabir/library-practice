import PropTypes from 'prop-types';
import '../../index.css'

const ScienceFic = ({sections}) => {

    console.log(sections);

    const filteredSections = sections.filter(section => section.id === 'sec1' || section.id === 'sec2');

    return (
        <div>
            <h2 className="my-10 text-3xl font-bold text-center figtreeFont">Welcome to the {name} section</h2>
            {
                filteredSections.map(section => (
                    <div key={section.id}>
                        <h2>{section.name}</h2>
                        <ul>
                            {section.books.map(book => (
                                <li key={book.id}>
                                    {book.title} by {book.author} ({book.publicationYear})
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    );
};

ScienceFic.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ScienceFic;