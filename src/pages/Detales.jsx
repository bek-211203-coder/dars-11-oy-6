import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avazbek from "../../axios";

const Deteils = () => {
    const { id } = useParams();
    const [books, setBooks] = useState({});

    useEffect(() => {
        if (id) {
            console.log(id);

            avazbek
                .get(`/books/${id}`)
                .then((data) => {
                    console.log(data.data);
                    setBooks(data.data);
                })
                .catch((err) => {
                    console.log("Error fetching data:", err);
                });
        }
    }, [id]);

    return (
        <div className="container mx-auto max-w-7xl justify-center">
            <div className="flex  gap-5  justify-center mt-32  mb-32">
                <div className="border p-5 mb-4 shadow-xl w-96 object-cover rounded-xl cursor-pointer  backdrop-blur-2xl">
                    <img
                        className="mx-auto mb-2 h-full object-cover "
                        src={books.thumbnailUrl}
                        alt="book img"
                    />
                </div>

                <div className="border p-5 mb-4 shadow-xl w-96 object-cover  rounded-xl  backdrop-blur-2xl text-white">
                    <h2 className="text-xl font-bold mb-2">{books.title}</h2>
                    <p className="mb-2">
                        <strong>Page Count:</strong> {books.pageCount}
                    </p>
                    <div className="flex gap-5">
                        <div className="mb-2">
                            <strong>Authors:</strong>
                            <ul className="text-gray-300">
                                {books.authors &&
                                    books.authors.map((author, index) => (
                                        <li key={index}>{author}</li>
                                    ))}
                            </ul>
                        </div>
                        <div className="mb-2">
                            <strong>Categories:</strong>
                            <ul className="text-gray-300">
                                {books.categories &&
                                    books.categories.map((category, index) => (
                                        <li key={index}>{category}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <h3 className="font-bold">Description</h3>
                    <p className="text-gray-300">{books.shortDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default Deteils;
