import PropTypes from 'prop-types';
import ScienceFic from '../ScienceFic/ScienceFic';
import Fantasy from '../Fantasy/Fantasy';
import NonFiction from '../NonFiction/NonFiction';

const Genre = ({genre}) => {

    const {id, sections} = genre;

    // console.log(sections)

    return (
        <div>
            {
                // Check the genre's id and send the entire sections array to the correct component
                id === 'cat1' ? <ScienceFic sections={sections} /> :
                id === 'cat2' ? <Fantasy sections={sections} /> :
                <NonFiction sections={sections} />
            }
        </div>
    );
};

Genre.propTypes = {
    genre: PropTypes.object.isRequired,
}

export default Genre;

/* To achieve the result you're looking for, where each section along with its associated books is passed to the correct component (ScienceFic, Fantasy, NonFiction), you need to pass the entire sections array to these components instead of just individual objects like { id: 'sec1', name: 'Space Opera', books: Array(2) }.

Here's how to modify your Genre component and corresponding logic to make this work:

Steps:
Pass the entire sections array: Instead of mapping over individual sections, pass the entire array of sections to the appropriate component.
Handle the rendering of the sections within each specific component (ScienceFic, Fantasy, NonFiction). */