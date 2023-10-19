import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import classes from './material.module.css';
import axios from 'axios';
import Loader from '../elements/loader';
import capitalizeString from '../../utils/capital';
import { AiFillCaretLeft } from 'react-icons/ai';

const MaterialPage = () => {
    const [Questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { bookName, chapterName, materialName } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getQuestions = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/all_questions?book_name=${bookName}&chapter_name=${chapterName}&material_name=${materialName}`
                );
                setQuestions(response.data);
            } catch (error) {
                if (error.response) {
                    setError('No Data Found!');
                } else if (error.request) {
                    setError('Network Error');
                } else {
                    setError('Something went wrong, Please try again!');
                }
            } finally {
                setIsLoading(false);
            }
        };

        getQuestions();
    }, [bookName, chapterName, materialName]);

    const questionNavigationHandler = (url) => {
        navigate(url);
    };

    const bookNavigationHandler = (bookName) => {
        navigate(`/worksheets/${bookName}`, { replace: true });
    };
    const worksheetNavigationHandler = () => {
        navigate(`/worksheets`, { replace: true });
    };

    const materialNavigationHandler = (bookName, chapterName, materialName) => {
        navigate(`worksheets/${bookName}/${chapterName}/${materialName}`, { replace: true });
    };

    return (
        <div className={classes.section}>
            <div className={classes.navigation}>
                <div className='container'>
                    <div className={classes.navigationBook}>
                        <div
                            className={classes.navigationPrevious}
                            onClick={() => worksheetNavigationHandler()}
                        >
                            <AiFillCaretLeft /> All Workbooks
                        </div>
                        <div
                            className={classes.navigationPrevious2}
                            onClick={() => bookNavigationHandler(bookName)}
                        >
                            <AiFillCaretLeft /> {capitalizeString(bookName.replace(/-/g, ' '))}
                        </div>
                    </div>
                    <div className={classes.navigationCurrent}>
                        {capitalizeString(materialName.replace(/-/g, ' '))}
                    </div>
                </div>
            </div>
            <div className={classes.header}>
                <h2>{capitalizeString(bookName.replace(/-/g, ' '))}</h2>
                <h3>{capitalizeString(materialName.replace(/-/g, ' '))}</h3>
            </div>
            <div className={classes.container}>
                {isLoading && <Loader />}

                {error && <p className='error-message'>{error}</p>}
                {!error && !isLoading && (
                    <div>
                        <ul className={classes.materialList}>
                            {Questions.length > 0 ? (
                                Questions?.map((question, index) => {
                                    return (
                                        <div
                                            className={classes.materialItem}
                                            onClick={() => questionNavigationHandler(question.uuid)}
                                        >
                                            <li key={question.uuid}>Question {index + 1} </li>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className='text-center text-blue'>Qustions Not Found!</p>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MaterialPage;
