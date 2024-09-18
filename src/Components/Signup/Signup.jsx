import PropTypes from 'prop-types';
import '../ErrorPage/ErrorPage.css';
import useGoBack from "../handleGoBack";
import back from '../../assets/Icons/back.png';

const SignUp = ({handleSubmit, submitBtnText ='Submit'}) => {

    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    const handleGoBack = useGoBack();

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
            <div className="text-center text-white mb-4">
                <h1 className='my-10 text-3xl font-bold text-center epilogueFont'>Join Us! Become A Member Today</h1>
            </div>
            <form 
                onSubmit={handleLocalSubmit} 
                className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-800">Sign Up:</h2>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Enter User Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-400 transition duration-300" 
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Enter Your Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-400 transition duration-300" 
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-300 mb-2">Create password</label>
                    <input 
                        type="password" 
                        name="password" 
                        className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-400 transition duration-300" 
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full submitStyle bg-yellow-600 hover:bg-black text-black hover:text-white font-bold py-2 rounded focus:outline-none transition duration-300">
                    {submitBtnText}
                </button>
                {/* back button */}
                <div className="mt-9 flex justify-center">
                    <button onClick={handleGoBack}>
                        <img className="w-8 rounded-full backBtn" src={back} alt="Go Back" />
                    </button>
                </div>
            </form>
        </div>

    );
};

SignUp.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitBtnText: PropTypes.string,
    children: PropTypes.node
}

export default SignUp;