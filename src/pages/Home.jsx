import { useEffect, useRef, useState } from "react";
import avazbek from "../../axios";
import { useNavigate } from "react-router-dom";

function Home() {
    const [information, setIformation] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);  
    const navigate = useNavigate();
    const minRef = useRef();
    const maxRef = useRef();

    const [loder , setLoader] = useState(false)

    useEffect(() => {
        setLoader(true);
        avazbek.get("/books")
            .then((response) => {
                const data = response.data;
                console.log(data);
                
                setIformation(data);
                setFilteredBooks(data);  
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(()=>{
                setLoader(false)
            })
    }, []);

    function handelDeteles(id) {
        navigate(`/books/${id}`);
    }

    function handelFilter(event) {
        event.preventDefault();
        const min = parseInt(minRef.current.value, 10);
        const max = parseInt(maxRef.current.value, 10);

        const filtered = information.filter((element) => {
            const pageCount = element.pageCount;
            return (
                pageCount >= min &&
                pageCount <= max
            );
        });
        setFilteredBooks(filtered);
    }

    const filteredBooksBySearch = filteredBooks.filter((element) => {
        return element.title.toLowerCase().includes(search.toLowerCase());
    });
    {loder && (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-4 border-white rounded-full" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )}
    return (
        <div className='flex flex-wrap flex-col p-8'>
            <div className="container mx-auto max-w-7xl flex justify-between mb-10 mt-6">
                <form>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent backdrop-blur-xl border border-white p-3 rounded-2xl text-white outline-none focus:shadow-[0_0_60px_-10px_rgba(255,255,255,0.9)]"
                    />
                </form>
                <form className="flex gap-5">
                    <input
                        ref={minRef}
                        type="number"
                        placeholder="min"
                        className="bg-transparent backdrop-blur-xl border border-white p-3 rounded-2xl text-white w-32 outline-none focus:shadow-[0_0_60px_-10px_rgba(255,255,255,0.9)]"
                    />
                    <input
                        ref={maxRef}
                        type="number"
                        placeholder="max"
                        className="bg-transparent backdrop-blur-xl border border-white p-3 rounded-2xl text-white w-32 outline-none focus:shadow-[0_0_60px_-10px_rgba(255,255,255,0.9)]"
                    />
                    <button onClick={handelFilter} className="w-1/2 px-4 py-2 rounded-lg bg-[linear-gradient(135deg,_#fdca10,_#fdc70c,_#f3903f,_#ed683c,_#e93e3a)] text-white text-lg  active:scale-95 ">
                        Filter
                    </button>
                </form>
            </div>

            <div className="container mx-auto max-w-7xl flex justify-center">
                <div className="grid grid-cols-4 gap-6 cursor-pointer ">
                    {filteredBooksBySearch.length > 0 && filteredBooksBySearch.map((information) => (
                        <div
                            key={information.id}
                            className="border p-4 mb-4 shadow-md w-72 object-cover rounded-3xl backdrop-blur-lg transition-[1s] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] hover:scale-105"
                            onClick={() => handelDeteles(information.id)}
                        >
                            <img className='mx-auto h-56 object-cover' src={information.thumbnailUrl} alt="book img" />
                            <h2 className="text-xl font-bold mb-2 text-white mt-5">{information.title}</h2>
                            <div className='flex gap-5 text-white'>
                                <div className="mb-2 text-gray-400">
                                    <strong className="text-gray-300">Authors:</strong>
                                    <ul>
                                        {information.authors && information.authors.map((author, index) => (
                                            <li key={index}>{author}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
