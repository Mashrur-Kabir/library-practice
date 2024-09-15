import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react"; // Correct import for useEffect
import User from "../User.jsx/User";
import '../userDetails/UserDetails.css';
import back from '../../assets/Icons/back.png';
import useGoBack from '../handleGoBack';
import './Users.css';

const Users = () => {
    const [loading, setLoading] = useState(true);
    const users = useLoaderData(); // Loading from Loader
    
    // Ensure useEffect is used correctly
    useEffect(() => {
        // Check if users exist and is an array
        if (users) {
            setLoading(false);
        }
    }, [users]); // This will run when the component mounts and whenever 'users' changes

    const handleGoBack = useGoBack();

    // Display the loading state
    if (loading) {
        return <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto">Loading...</div>;
    }

    // Main render
    return (
        <div>
            <h2 className='my-10 text-3xl font-bold text-center figtreeFont'>A collection of our members:</h2>
            <div className="users grid md:grid-cols-3 lg:grid-cols-4">
                {/* Render combined users */}
                {
                    users.map((user, idx) => <User key={idx} user={user} />)
                }
            </div>
            <button className="mt-9 flex flex-col items-center justify-center mx-auto mb-10 gap-3" onClick={handleGoBack}>
                <span className="text-2xl font-bold backTxtBtn">Back</span>
                <img className="w-8 rounded-full backBtn" src={back} alt="Back" />
            </button>
        </div>
    );
};

export default Users;
