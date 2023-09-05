import React from 'react';

const SingleBlog = ({ params }) => {
    const [year, id] = params.semt || []
    return (
        <div>
            SingleBlog {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default SingleBlog;