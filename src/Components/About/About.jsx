import useGoBack from "../handleGoBack";
import back from '../../assets/Icons/back.png';

const About = () => {

    const handleGoBack = useGoBack();

    return (
        <div className="flex flex-col items-center justify-center text-justify min-h-screen bg-gray-900 text-white px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-800">About Us</h2>
                <p className="mb-6 text-lg leading-relaxed">
                    Welcome to <span className="font-bold">Judas Archive</span>, your online sanctuary for exploring, reading, and discovering a vast universe of books. We believe that books have the power to transform lives, open minds, and transport you to new worlds. Our mission is to bring the joy of reading to everyone, anywhere, at any time.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                    At <span className="font-bold">Book Haven</span>, we offer an extensive collection of genres ranging from science fiction and fantasy to non-fiction and more. Whether you are looking for the latest bestsellers, timeless classics, or hidden gems, we have something for every reader. Our carefully curated library is designed to cater to all ages and interests, ensuring that you always find the perfect book to dive into.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                    Our platform is user-friendly and accessible, allowing you to browse and explore our collection with ease. With personalized recommendations, reader reviews, and a seamless browsing experience, <span className="font-bold">Judas Archive</span> is more than just a library—its a community for book lovers. We invite you to join us on this literary journey and experience the magic of reading like never before.
                </p>
                <p className="mb-12 text-lg leading-relaxed">
                    Start your adventure with us today, and let your imagination soar.
                </p>

                <div className="mt-9 flex justify-center">
                    <button onClick={handleGoBack}>
                        <img className="w-8 rounded-full backBtn" src={back} alt="Go Back" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
