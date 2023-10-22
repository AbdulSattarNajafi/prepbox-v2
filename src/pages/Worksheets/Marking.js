import Button from '../../components/button/Button';
import classes from './Marking.module.css';

const Marking = () => {
    return (
        <section className={classes.marking}>
            <div className='container'>
                <div className={classes.markingContent}>
                    <h2>Free yourself from marking</h2>
                    <Button url='/'>Download PrepBox</Button>
                </div>
            </div>
        </section>
    );
};

export default Marking;
