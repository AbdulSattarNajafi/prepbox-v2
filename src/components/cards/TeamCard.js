import classes from './TeamCard.module.css';

const TeamCard = ({ image, name, occupation, description }) => {
    return (
        <div className={classes.card}>
            <div className={classes['card__image']}>
                <img src={image} alt={name} />
            </div>
            <div className={classes['card__body']}>
                <h5>{name}</h5>
                <p>{occupation}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TeamCard;
