import React from 'react';
import { Link } from 'react-router-dom';

function Meal(props) {
    const {
        idMeal, 
        strMeal, 
        strMealThumb
    } = props;

    return (
        <div className="card" id={idMeal}>
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                {/* ссылка на категорию по именя */}
                <Link to={`/meal/${idMeal}`} className='btn'>Watch recipe</Link>
            </div>
        </div>
    );
}

export default Meal;
