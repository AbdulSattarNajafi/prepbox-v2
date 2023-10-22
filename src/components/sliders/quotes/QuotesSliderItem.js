import classes from './QuotesSliderItem.module.css';

const QuotesSliderItem = ({ quote, author }) => {
    return (
        <div className={classes.sliderItem}>
            <h3>{quote}</h3>
            <p>{author}</p>
        </div>
    );
};

export default QuotesSliderItem;
