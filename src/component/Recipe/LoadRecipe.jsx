import React, { useEffect, useState } from 'react';
import ShowRecipe from './ShowRecipe';

const LoadRecipe = () => {
    const [recipe,setRecipe]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch(`product.json`)
            const data=await response.json()
            setRecipe(data);
            
        }
        fetchData()
    },[])
    const [preparing,setPreparing]=useState([])

    const handlePreparing=(recipe)=>{
        console.log(recipe);
        const extraPreparing=preparing.find(preparingItem => preparingItem.recipe_id === recipe.recipe_id)
        console.log('ex',extraPreparing);
        
        if (extraPreparing) {
            alert('Sorry This Item Already Add')
        }
        else{
            setPreparing([...preparing,recipe])
        }
        
    }
    const [cooking,setCooking]=useState([])
    const [cookingTime,setCookingTime]=useState(0)
    const [calory,setCalory]=useState(0)
    const handleCalculator=(time,calori)=>{
        setCookingTime(cookingTime+time)
        setCalory(calory+calori)
    }
    console.log(cookingTime,calory);
    
    const cookingHandle=(recipe)=>{
        const removePreying=preparing.filter(pre=>pre.recipe_id!==recipe.recipe_id)
        console.log(recipe);
        setPreparing(removePreying)
        const newCooking=preparing.find(preparing=>preparing.recipe_id===recipe.recipe_id)
        setCooking([...cooking,newCooking])
        console.log(newCooking.preparing_time,cooking.preparing_time);
        
       
        
    }
    console.log('cokking',cookingTime);
    
    return (
        <div>
            <ShowRecipe recipe={recipe}
             preparing={preparing} 
             handlePreparing={handlePreparing}
             cookingHandle={cookingHandle}
             cooking={cooking}
             handleCalculator={handleCalculator}
             cookingTime={cookingTime}
             calory={calory}

             

             
             >

             </ShowRecipe>
        </div>
    );
};

export default LoadRecipe;