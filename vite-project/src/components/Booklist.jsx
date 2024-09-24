import { useState } from "react";
import Book from "./book";

const Booklist = () => {

    const[books, setBooks] = useState([
        {title: "Why i hate Ziggers.", image: "./Zigger.jpg", author:"Zieflorb Lorbalorb"},
        {title: "I cant breath.", image: "./iCantBreathe.jpg", author:"George Floyd"},
        {title: "The story behind the Guillotine", image: "./guilotineman.jpg", author:"Joseph-Ignace Guillotin"},
    ]);

    return ( 
        <section>
        {books.map((book) =>(
            <Book title={book.title} author={book.author} image={book.image}/>
        ))}
        </section>
     );
}
 
export default Booklist;