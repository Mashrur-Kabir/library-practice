import { useLoaderData } from "react-router-dom";
import User from "../User.jsx/User";
import '../userDetails/UserDetails.css'
import back from '../../assets/Icons/back.png';
import useGoBack from '../handleGoBack';
import '../../index.css';
import './Users.css'

const Users = () => {
    const users = useLoaderData(); // Loading from Loader

    const handleGoBack = useGoBack();

    return (
        <div>
            <h2 className='my-10 text-3xl font-bold text-center figtreeFont'>A collection of our members:</h2>
            <div className="users grid md:grid-cols-3 lg:grid-cols-4">
                {/* Render combined users */}
                {
                    users.map( (user, idx) => <User key={idx} user={user}></User>)
                }
            </div>
            <button className="mt-9 flex flex-col items-center justify-center mx-auto mb-10 gap-3" onClick={handleGoBack}>
                <span className="text-2xl font-bold backTxtBtn">Back</span>
                <img className="w-8 rounded-full backBtn" src={back} alt="" />
            </button>
        </div>
    );
};

export default Users;
