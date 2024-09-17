import { useLoaderData } from "react-router-dom";
import '../../index.css';
import './UserDetails.css'
import back from '../../assets/Icons/back.png';
import useGoBack from "../handleGoBack"; //importing the custom hook

const UserDetails = () => {

    const details = useLoaderData();
    const {name, address:{city}, address:{street}, address:{suite}, company:{name : companyName}, email, phone} = details;

    const handleGoBack = useGoBack(); /* Calling the Hook: When you call custom hooks like useGoBack() inside your component, you are setting up the hook and getting the result. The result is a function (handleBack) that you can then use in event handlers or other places in your component. */

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="flex flex-col items-center my-8 p-6 border border-gray-700 rounded-lg shadow-lg bg-gray-800">
                <h2 className="epilogueFont text-xl font-semibold mb-6">{name}</h2>
                <div className="figtreeFont text-center"> {/* Optional: Center the text */}
                    <p>{suite} {street}, {city}</p>
                    <p>currently working at {companyName}</p>
                    <p className="mt-4 font-bold">Contact me:</p>
                    <p>email: {email}</p>
                    <p>phone: {phone}</p>
                </div>
                <button className="mt-9" onClick={handleGoBack}>
                    <img className="w-8 rounded-full backBtn" src={back} alt="Go Back" />
                </button>
            </div>
        </div>

    );
};

// Do not use parentheses in onClick={handleGoBack()} because it calls the function immediately rather than providing a reference to it.

export default UserDetails;