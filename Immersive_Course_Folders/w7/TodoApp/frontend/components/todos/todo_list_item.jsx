import React from 'react';

export default ({ id, item }) => (
    <li key={id}>{item.title}</li>
)