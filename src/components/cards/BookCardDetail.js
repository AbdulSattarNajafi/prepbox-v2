import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './BookCardDetail.module.css';

const BookCardDetail = ({ name, preReqs, questionCount, lectureCount, image }) => {
    return (
        <div className={classes.card}>
            <div className={classes.coverImage}>
                <LazyLoadImage src={image} alt={name} width='200' height='200' />
            </div>
            <div className={classes.description}>
                <h4 className='text-blue'>{name}</h4>

                <div className={classes.descriptionItem}>
                    <h5>Questions: </h5>
                    <p>{questionCount}</p>
                </div>

                <div className={classes.descriptionItem}>
                    <h5>Lecture Videos:</h5>
                    <p>{lectureCount}</p>
                </div>

                <h5>Prerequisites:</h5>
                <ul className={classes.descriptionList}>
                    {preReqs.map((preReq, i) => {
                        return <li key={i}>{preReq}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default BookCardDetail;
