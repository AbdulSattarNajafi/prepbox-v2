import Button from '../../components/button/Button';
import HeroImage from './../../assets/images/home-hero.jpg';
import classes from './Hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className='container'>
                <div className={classes.heroContent}>
                    <div className={classes.heroContentTexts}>
                        <h1>
                            <span className='text-blue'>Free yourself</span> from marking math
                            questions
                        </h1>
                        <h2>
                            Have them solve questions on PrepBox, and we will mark it for you and
                            send you a report
                        </h2>
                        <Button
                            type='external-link'
                            url='https://apps.apple.com/us/app/prepbox/id1635011155'
                        >
                            Download PrepBox
                        </Button>
                    </div>

                    <div className={classes.heroContentImage}>
                        <img src={HeroImage} alt='Banner' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
