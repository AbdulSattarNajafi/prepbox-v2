import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './book-card-detail.module.css';

const BookCardDetail = ({ name, preReqs, questionCount, lectureCount, image, id }) => {
    return (
        <div className={classes.card}>
            <div className={classes.coverImage}>
                <LazyLoadImage src={image} alt={name} width='200' height='200' />
            </div>
            <div className={classes.description}>
                <h3 className='text-blue'>{name}</h3>

                <div className={classes.descriptionItem}>
                    <h4>Questions: </h4>
                    <p>{questionCount}</p>
                </div>

                <div className={classes.descriptionItem}>
                    <h4>Lecture Videos:</h4>
                    <p>{lectureCount}</p>
                </div>

                <h4>Prerequisites:</h4>
                <ul className={classes.descriptionList}>
                    {preReqs.map((preReq) => {
                        return <li>{preReq}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BookCardDetail;
