import React from 'react';

const ShowRecipe = ({recipe,handlePreparing,preparing,cookingHandle,cooking,handleCalculator,cookingTime,calory}) => {
    const {recipe_id,recipe_name,short_description,recipe_image,ingredients,preparing_time,calories}=recipe
    return (
        <div className='flex justify-between'>
            <div className="w-2/3 grid grid-cols-2 gap-4">
                {
                    recipe.map(recipe=>
                        <div className=" p-3 border-2 rounded shadow-xl">
                            <figure>
                                <img className='w-full h-64 rounded'
                                src={recipe.recipe_image}
                                alt="Shoes" />
                            </figure>
                            <div className="mt-4 ">
                                <h2 className="card-title "> {recipe.recipe_name}</h2>
                                <p className='text-[#878787] py-4'>{recipe.short_description}</p>
                                <p>Ingredients: {recipe.ingredients.length}</p>
                                
                                    <ul className='h-40'>
                                        {recipe.ingredients.map(ingre=>
                                        <li className='text-[#878787]'># {ingre}</li>
                                         )}
                                    </ul>
                                
                                <div className=" flex space-x-10 py-4">
                                    <div className="space-x-3">
                                    <span><i class="fa-regular fa-clock"></i></span>
                                    <span>{recipe.preparing_time} minutes</span>
                                    </div>
                                    <div className="space-x-3">
                                        <span><i class="fa-solid fa-fire-flame-curved"></i></span>
                                        <span>{recipe.calories} calories</span>
                                    </div>

                                </div>
                                <div className="card-actions justify-center mt-5">
                                <button className='btn bg-[#0BE58A]' onClick={()=>handlePreparing(recipe)

                                } >Want to Cook</button>
                                </div>
                            </div>
                       </div>
                                        )
                }
            </div>
            <div className="w-1/3 ml-4 border-2 rounded">
             <div className="my-7">
                <h1 className='text-center border-b-2 w-2/3 mx-auto pb-4 text-2xl font-bold'>Want to cook: {preparing.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            preparing.map((preparing,index)=>(<tr className="hover">
                                <th>{index+1}</th>
                                <td>{preparing.recipe_name}</td>
                                <td>{preparing.preparing_time} minute </td>
                                <td>{preparing.calories} calories </td>
                                <td><button className='bg-[#0BE58A] p-2 rounded-3xl' onClick={()=>{cookingHandle(preparing);
                                handleCalculator(preparing.preparing_time,preparing.calories)
                                }} >Preparing</button></td>
                            </tr>))
                        }
                        {/* row 2 */}
                        
                        </tbody>
                    </table>
                </div>

             </div>

             <div className="">
             <h1 className='text-center border-b-2 w-2/3 mx-auto pb-4 text-2xl font-bold'>Currently cooking: {cooking.length}</h1>
             <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            cooking.map((cooking,index)=>(<tr className="hover">
                                <th>{index+1}</th>
                                <td>{cooking.recipe_name}</td>
                                <td>{cooking.preparing_time} minute </td>
                                <td>{cooking.calories} calories </td>
                                
                            </tr>))
                        }
                        {/* row 2 */}
                        <tr>
                            <td></td>
                            <td></td>
                            <td>TotalTime= 
                            {cookingTime} minutes</td>
                            <td>Total Calories={calory} calories</td>
                        </tr>
                        
                        </tbody>
                    </table>
                </div>

             </div>

                
            </div>
            
        </div>
    );
};

export default ShowRecipe;