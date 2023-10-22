import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './BookCard.module.css';

const BookCard = ({ name, commonName, image, bookFile, bookFileName }) => {
    const navigate = useNavigate();

    const bookHandler = (event) => {
        navigate(commonName);
        // localStorage.setItem('__book_id', id);
    };

    const buttonHandler = (bookFile, bookFileName, event) => {
        event.stopPropagation();

        const pdfUrl = bookFile;
        const fileName = bookFileName;

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={classes.card} onClick={bookHandler}>
            <div className={classes['card__image']}>
                <LazyLoadImage src={image} alt={name} width='200' height='200' />
            </div>
            <div className={classes['card__body']}>
                <h3 className={classes['card__body-title']}>{name}</h3>
                <button
                    onClick={(event) => buttonHandler(bookFile, bookFileName, event)}
                    className={classes['card__body-button']}
                >
                    Get the Book
                </button>
            </div>
        </div>
    );
};

export default BookCard;
