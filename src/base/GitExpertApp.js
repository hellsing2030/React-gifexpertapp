import React from 'react';
import { useState } from 'react';
import { AddCategory } from '../components/AddCategory';
import GifGrid from '../components/GifGrid';
// import React, { Fragment } from 'react';

const GitExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories,setCategories] = useState(['Dragon Ball']);

    // const handleAdd =()=>{
        
    //     // setCategories([...categories,'Naruto']);
    //     setCategories(cats=>[...cats,'naruto'])
        
    // }

    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>
           <hr/>

            

           <ol>
               {
                   categories.map( category =>(<GifGrid 
                    
                        category={category}
                        key={category}

                    />))
               }
           </ol>
        </>
    );
        
} 

export default GitExpertApp;