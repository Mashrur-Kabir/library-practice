import Book from "../Book/Book";
import { useEffect, useState } from 'react';
import { fetchBooks } from "../bookService"; // Adjust the import path as needed

const Books = () => {
    const [bookData, setBookData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBooks = async () => {
            const data = await fetchBooks('https://gist.githubusercontent.com/Mashrur-Kabir/4c2f4472893065c6f0b358c4f07b2ad7/raw/e79ab0e8cc6070aaa52c75ca5b09e876b72157ce/bookCategories.json');
            setBookData(data);
            setLoading(false);
        };

        loadBooks(); // after setting the loading state to false, we call the function
    }, []);

    if (loading) {
        return <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto">Loading...</div>;
    }

    return (
        <div>
            <h2 className='my-10 text-3xl font-bold text-center figtreeFont'>Choose A Category:</h2>
            <div className="flex items-center justify-center gap-5">
                {
                    bookData.map((book, idx) => <Book key={idx} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;