import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../components/elements/loader';
import SecondaryButton from '../../components/button/secondary-button';
import BookCard from '../../components/cards/BookCard';
import BookFile from './../../assets/books/fullbook.pdf';
import classes from './Books.module.css';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedCurriculum, setSelectedCurriculum] = useState('');

    const filteredBooks = selectedCurriculum
        ? books.filter((book) => book.country === selectedCurriculum)
        : books;

    useEffect(() => {
        const getBooks = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    'https://app.prepanywhere.com/api/stu/static_books/all_books'
                );
                setBooks(response.data);
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

        getBooks();
    }, []);

    const handleCurriculumChange = (curriculum) => {
        setSelectedCurriculum(curriculum);
    };

    return (
        <div className={classes.section}>
            <div className={classes.header}>
                <h1>FREE Curriculum-aligned Workbook</h1>
            </div>
            <div className={classes.container}>
                <div className={classes['section__header']}>
                    <SecondaryButton
                        text='All'
                        isActive={selectedCurriculum === '' ? true : false}
                        onClick={() => handleCurriculumChange('')}
                    />
                    <SecondaryButton
                        text='United States'
                        isActive={selectedCurriculum === 'USA' ? true : false}
                        onClick={() => handleCurriculumChange('USA')}
                    />
                    <SecondaryButton
                        text='Canada'
                        isActive={selectedCurriculum === 'CA' ? true : false}
                        onClick={() => handleCurriculumChange('CA')}
                    />
                </div>
                {isLoading && <Loader />}
                {error && <p className='error-message'>{error}</p>}
                {!error && !isLoading && (
                    <div className={classes['section__grid']}>
                        {filteredBooks.map((book) => {
                            return (
                                <BookCard
                                    key={book.id}
                                    name={book.name}
                                    commonName={book.common_name}
                                    image={book.cover_image}
                                    bookFile={BookFile}
                                    bookFileName='fullbook.pdf'
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Books;
