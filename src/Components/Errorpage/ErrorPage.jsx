import { Link, useRouteError } from "react-router-dom";
import './ErrorPage.css';
import oops from '../../assets/Icons/oops.png';
import sad from '../../assets/Icons/sad.png';

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto">
            <div className="flex flex-col items-center">
                <img src={oops} alt="oops" className="" />
                <img src={sad} alt="" />
            </div>
            {/* <h3>{error.statusText || error.message}</h3> */}
            {
                error.status === 404 && <div className="flex flex-col items-center">
                    <h3 className="mt-12 mb-4">Page Not Found</h3>
                    <Link to='/'><button className="buttonStyle">Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;