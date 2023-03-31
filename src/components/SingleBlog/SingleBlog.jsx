import './SingleBlog.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = ({blog}) => {
    const {id, authorName, coverPicture,date,personPicture,time,title } = blog;
    return (
        <div className='singleBlog mb-4'>
            <img className='w-100 rounded' src={coverPicture} alt="Cover picture" />
            <div className='d-flex justify-content-between w-100 m-auto mt-4 '>
                <div className='d-flex justify-content-between gap-3'>
                    <img className='person-img' src={personPicture} alt="author picture" />
                    <div className='text-start'>
                        <h5>{authorName}</h5>
                        <p>{date}</p>
                    </div>

                </div>
                <div className='d-flex justify-content-center align-items-center  gap-2  mb-4'>
                    <p className='px-2'>{time} min read</p>
                    <button className='btn btn-outline-dark '><FontAwesomeIcon  icon={faBookmark} /></button>

                </div>
            </div>
            
            
        </div>
    );
};

export default SingleBlog;