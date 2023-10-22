import classes from './Newsletter.module.css';

const Newsletter = () => {
    return (
        <section className={classes.section}>
            <div className='container'>
                <div className={classes.sectionContent}>
                    <h3>Subscribe to Our Newsletter</h3>
                    <p>Sign up with your email address to receive news and updates.</p>

                    <form className={classes.form}>
                        <div className={classes.formRow}>
                            <input
                                className={classes.formInput}
                                type='text'
                                placeholder='Email Address'
                            />
                            <button className={classes.formBtn} type='submit'>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
