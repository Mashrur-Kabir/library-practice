import { LineChart as LChart, BarChart, Bar, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';
import '../../index.css';
import { useEffect, useState } from 'react';
import { fetchBooks } from '../bookService';
import useGoBack from "../handleGoBack";
import back from '../../assets/Icons/back.png';

const Dashboard = () => {
    const [genreData, setGenreData] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleGoBack = useGoBack();

    useEffect(() => {
        const dataLoad = async () => {
            try {
                const data = await fetchBooks('https://gist.githubusercontent.com/Mashrur-Kabir/4c2f4472893065c6f0b358c4f07b2ad7/raw/e79ab0e8cc6070aaa52c75ca5b09e876b72157ce/bookCategories.json');
                const selectedCategory = data;
                // Add random readCount to each book and assign them to a random number
                selectedCategory.forEach(category => {
                    category.sections.forEach(section => {
                        section.books.forEach(book => {
                            book.readCount = Math.floor(Math.random() * 100); // Random read count between 0 and 100
                        });
                    });
                });
                setGenreData(selectedCategory);
                setLoading(false);
            } catch (error) {
                console.error("Error loading genres:", error);
            }
        };

        dataLoad();
    }, []);

    // Prepare data for the most read books chart
    const bookReadData = [];
    genreData.forEach(category => {
        category.sections.forEach(section => {
            section.books.forEach(book => {
                bookReadData.push({ title: book.title, readCount: book.readCount });
            });
        });
    });

    // Sample pseudo data for membership growth rate
    const membershipGrowthData = [
        { month: 'Jan', users: 50 },
        { month: 'Feb', users: 75 },
        { month: 'Mar', users: 100 },
        { month: 'Apr', users: 140 },
        { month: 'May', users: 145 },
        { month: 'Jun', users: 190 },
        { month: 'Jul', users: 268 },
        { month: 'Aug', users: 350 },
        { month: 'Sep', users: 387 },
        { month: 'Oct', users: 479 },
        { month: 'Nov', users: 530 },
        { month: 'Dec', users: 773 }
    ];

    if (loading) {
        return <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto">Loading...</div>;
    }

    return (
        <div className="p-8 min-h-screen flex flex-col items-center justify-center">

            <h2 className="mt-10 mb-20 text-4xl font-bold text-center figtreeFont">Stats Don&apos;t Lie. See For Yourselves :D</h2>

            {/* Chart for most read books */}
            <div className="mb-10">
                <h2 className="bg-gradient-to-r from-teal-600 via-cyan-700 to-indigo-800 bg-clip-text text-transparent text-2xl mb-6 figtreeFont font-bold">Most Read Books:</h2>
                <BarChart width={600} height={300} data={bookReadData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid stroke="#444" strokeDasharray="3 3" />
                    <XAxis dataKey="title" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#333', color: '#fff', border: '1px solid #888' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Legend
                        wrapperStyle={{ color: '#ccc' }}
                    />
                    <Bar dataKey="readCount" fill="#82ca9d" barSize={30} />
                </BarChart>
            </div>

            {/* Chart for user membership growth */}
            <div>
                <h2 className="bg-gradient-to-r from-pink-600 via-fuchsia-700 to-purple-800 bg-clip-text text-transparent text-2xl mb-6 figtreeFont font-bold">User Membership Growth: (2024)</h2>
                <LChart width={600} height={300} data={membershipGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid stroke="#444" strokeDasharray="3 3" />
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#333', color: '#fff', border: '1px solid #888' }}
                        itemStyle={{ color: '#fff' }}
                    />
                    <Legend
                        wrapperStyle={{ color: '#ccc' }}
                    />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} dot={{ r: 4, fill: '#82ca9d' }} />
                </LChart>
            </div>

            <div className="my-9 flex justify-center">
                <button onClick={handleGoBack}>
                    <img className="w-8 rounded-full backBtn" src={back} alt="Go Back" />
                </button>
            </div>
        </div>

    );
};

Dashboard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dashboard;


/* what is flatMap? 

Mapping Result (Before Flattening):

const mappedResult = data.map(category =>
  category.sections.map(section => ({
    name: section.name,
    readCount: Math.floor(Math.random() * 100)
  }))
);

Output:

[
  [
    { name: "Space Opera", readCount: 45 },
    { name: "Time Travel", readCount: 78 }
  ],
  [
    { name: "Epic Fantasy", readCount: 62 },
    { name: "Urban Fantasy", readCount: 34 }
  ]
]

This is an array of arrays: one array for each category, each containing section objects.


Flattening with flatMap:

const sectionsData = data.flatMap(category =>
  category.sections.map(section => ({
    name: section.name,
    readCount: Math.floor(Math.random() * 100)
  }))
);

Output:

[
  { name: "Space Opera", readCount: 45 },
  { name: "Time Travel", readCount: 78 },
  { name: "Epic Fantasy", readCount: 62 },
  { name: "Urban Fantasy", readCount: 34 }
]

flatMap combines all the section objects into one flat array instead of nested arrays.

Summary:
map: Transforms each item and creates an array of arrays if the inner map returns arrays.
flatMap: Transforms each item and automatically flattens the resulting array of arrays into a single array. */