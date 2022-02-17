import React from 'react';
import Directory from '../../components/directory/directory';
import './homepage.styles.scss'
const HomePage = ({navigate}) => (
    <div className='homepage'>
        <Directory navigate={navigate} />
    </div>
);

export default HomePage;