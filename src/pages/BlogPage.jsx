import React from 'react';
import Blog from '../components/Blog';

const BlogPage = () => {
    return (
        <div className="subpage">
            <Blog detailed={true} />
        </div>
    );
};

export default BlogPage;
