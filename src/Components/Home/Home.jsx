import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header and Main Content */}
            <Header />
            
            {/* Placeholder for main content */}
            <div className="flex-grow"></div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;