import React from 'react';

const GiphysIndexItem = ({ gif, num }) => (
        <a href={gif.url}>{num}</a>
    )
    
export default GiphysIndexItem;
    