import Button from '../../components/button/Button';
import classes from './Start.module.css';

const Start = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes.sectionContent}>
                    <h2>
                        PrepBox is free to try. <span className='text-blue'>Start today.</span>
                    </h2>
                    <Button
                        type='external-link'
                        url='https://apps.apple.com/us/app/prepbox/id1635011155'
                    >
                        Download PrepBox
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Start;
