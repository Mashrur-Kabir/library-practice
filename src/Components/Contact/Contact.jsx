import useGoBack from "../handleGoBack";
import back from '../../assets/Icons/back.png';

const Contact = () => {

    const handleGoBack = useGoBack();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 py-12">
            <div className="max-w-3xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">Contact Us</h2>
                <p className="mb-8 text-center leading-relaxed">
                    Have any questions, suggestions, or just want to say hello? We&apos;d love to hear from you! Fill out the form below, and we&apos;ll get back to you as soon as possible :D
                </p>
                
                <form>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-400 transition duration-300" placeholder="Your Name" required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-400 transition duration-300" placeholder="Your Email" required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                        <input type="text" id="subject" name="subject" className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-400 transition duration-300" placeholder="Subject" required />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-blue-400 transition duration-300" 
                            placeholder="Your Message" 
                            required
                        ></textarea>
                    </div>

                    <button 
                    type="submit" 
                    className="w-full submitStyle figtreeFont bg-yellow-600 hover:bg-black text-black hover:text-white font-bold py-2 rounded focus:outline-none transition duration-300">
                        Send Message
                    </button>

                    <div className="mt-9 flex justify-center">
                        <button onClick={handleGoBack}>
                            <img className="w-8 rounded-full backBtn" src={back} alt="Go Back" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
