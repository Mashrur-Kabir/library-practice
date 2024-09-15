import { useLoaderData } from "react-router-dom";
import User from "../User.jsx/User";

const Users = () => {
    const users = useLoaderData(); // Loading from Loader

    return (
        <div>
            <h2 className='text-xl'>A collection of our members:</h2>
            <div className="users grid grid-cols-3">
                {/* Render combined users */}
                {
                    users.map( (user, idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
