import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './User.css';
import employee from '../../assets/Icons/employees.png'
import { TbListDetails } from "react-icons/tb";
import '../../index.css';

const User = ({ user}) => {
    const { id, username } = user; // Destructure all needed properties

    return (
        <div>
            <div className='userContainer flex flex-col items-center'>
                <img src={employee} alt="" />
                <h2 className='my-5 border py-1 px-2 rounded-xl'>{username}</h2>
                <NavLink to={`/user/${id}`} className='hover:underline flex items-center gap-3 figtreeFont'>Show details <TbListDetails className='hover:text-black hover:bg-white' /></NavLink> {/* Dynamic routing */}
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        username: PropTypes.string,
        image: PropTypes.string,
    }).isRequired,
};

export default User;
