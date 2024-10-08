import { useState } from "react";
import Book from "./book";
import data from "../data.js";

const Booklist = () => {

    const[books, setBooks] = useState
    (data);

    return ( 
        <section>
        {books.map((book) =>
        (
            <Book title={book.title} author={book.author} image={book.image}/>
        )
        )
        }
        </section>
     );
}
 
export default Booklist;