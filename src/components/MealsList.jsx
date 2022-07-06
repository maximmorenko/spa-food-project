import React from 'react';
import Meal from './Meal';

function MealsList(props) {

    const {meals} = props;

    return (
        <div className='list'>
            {meals.map(el => (<Meal key={el.idMeal} {...el}/>))}
        </div>
    );
}

export default MealsList;