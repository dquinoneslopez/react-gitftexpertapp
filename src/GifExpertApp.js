import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = []}) => {
    
    const [categories, setCategories] = useState(defaultCategories);
    
    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']);
    //     // setCategories(cats => [...categories, 'HunterXHunter']);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            
            <AddCategory setCategories={ setCategories }/>
            
            <ol>
                {
                    categories.map( category => 
                        <GifGrid key={ category } category={ category }/>
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;