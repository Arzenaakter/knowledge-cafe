import React from 'react';
import './SideCart.css';

const SideCart = () => {
    return (
        <div>
            <div className='spent-time-store py-3 '>
                <h4>Spent time on read :  min</h4>

            </div>
            <div className='bookmarked-store mt-4'>
               <h4 className='text-start ps-4 py-3'>Bookmarked Blogs : </h4>
               <p className='bg-white mx-4 p-4 rounded'>title</p>

            </div>
        </div>
    );
};

export default SideCart;