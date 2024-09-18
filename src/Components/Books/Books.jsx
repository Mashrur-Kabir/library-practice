import { NavLink } from "react-router-dom";
import '../../index.css';
import './Books.css'

const Books = () => {

    return (
        <div>
            <h2 className='my-10 text-3xl font-bold text-center figtreeFont'>Choose A Category:</h2>
            
            <div className="flex flex-col items-center gap-8 text-center">
                <NavLink to={`/sciFi`} className='figtreeFont cateCard rounded-lg p-8 w-full'>
                    <h2 className='text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>
                        Science Fiction
                    </h2>
                </NavLink>

                <NavLink to={`/fantasy`} className='figtreeFont cateCard rounded-lg p-8 w-full'>
                    <h2 className='text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>
                        Fantasy
                    </h2>
                </NavLink>
                
                <NavLink to={`/nonFic`} className='figtreeFont cateCard rounded-lg p-8 w-full'>
                    <h2 className='text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>
                        Non-Fiction
                    </h2>
                </NavLink>

            </div>
        </div>
    );
};

export default Books;