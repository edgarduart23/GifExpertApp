import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai', 'Dragon Balle'];
    const [categories, setcategories] = useState(['One Punch']);

    //const handleAdd = () => {
       // setcategories(['HunterXHunter', ...categories]);
      //  setcategories(cats => [...cats, 'HunterXHunter']);
    //}
    return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setcategories={setcategories} />
           <hr />
           {/* <button onClick={handleAdd}>Agregar</button> */}
           <ol>
               {
                   categories.map( category => (
                   //return <li key={category}> {category} </li>
                    <GifGrid
                        key= {category}
                        category= {category}
                    />
                   ))
               }
           </ol>
        </>
    )
}
