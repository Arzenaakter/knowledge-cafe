import React from 'react';
import './SideCart.css';

const SideCart = ({bookmarks , times} ) => {
   
   let totalTime = 0;
   for ( const singleBlog of times){
    totalTime = totalTime + singleBlog.time;
        // console.log(totalTime);
   }


    
    return (
        <div>
            <div className='spent-time-store py-3 '>
                <h4>Spent time on read : {totalTime} min</h4>

            </div>
            <div className='bookmarked-store mt-4'>
               <h4 className='text-start ps-4 py-3'>Bookmarked Blogs : {bookmarks.length} </h4>
               
               {(bookmarks).map(blogTitle =><p className='bg-white mx-4 p-4 rounded fw-bold'>{blogTitle.title}  
               </p> )}

            </div>
        </div>
    );
};

export default SideCart;