import { useState } from "react";

const getDescription = (book,showFull) => {
    const description = book.description || book.name;
    if(description.length <= 300 || showFull) {
        return description;
    } else{
        return description.substr(0,300) + '...';
    }
}
const BookDetails = ({ book }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const description = getDescription(book,showFullDescription);
    return (
        <div className="book-detail">
            <h2 className="book-title">{book.name}</h2>
            <p className="book-description">{description}</p>
            {!showFullDescription && <a className="more-link" onClick={() => setShowFullDescription(true)}>Show more</a>}
        </div>
    )
}

export default BookDetails;