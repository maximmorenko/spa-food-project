import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
// импортируем из api метод функцию getMealById, которая по id будет доставать данные в юзЭффекте
import {getMealById} from '../api'
import Preloader from '../components/Preloader';

function Recipe(props) {
    // будем использовать id из параметров (useParams)
    // также добавим кнопку назад (useHistory)
    const [recipe, setResipe] = useState({});
    const {id} = useParams();
    const {goBack} = useHistory();

    useEffect(() => {
        getMealById(id)
        // теперь то, что мы достали по id, положим в стейт через функцию обновления стейта 
        .then(data => setResipe(data.meals[0]))
        // смотрим в постмане что получим на выходе
    }, [id])

    return (
        <>
            <button className='btn' onClick={goBack} >Go Back</button>
            {/* проверяем есть ли что то в ресипи (id), ели нет то рисуем перлоадер. 
        если есть то рисуем разметку*/}
        {!recipe.idMeal ? <Preloader /> : (
            <div className="recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h2>{recipe.strMeal}</h2>
                <h6>Category: {recipe.strCategory}</h6>
                {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                <p>{recipe.strInstructions}</p>
                {/* добавим таблицу с ингридиентами, разметка с материалайс. обязательно в таблице тхэд и тбоди*/}
                <table className='centered'>
                    <thead>
                        {/* два заголовка */}
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {/* наполняем динамически */}
                        {/* 1. получаем массив со всеми ключами Object.keys(recipe)*/}
                        {/* 2. пробегаем по массиву (по ключам) мапом */}
                        {/* 3. проверяем два условия 
                                1 - включает ли ключ в свое название слово ингридиент. if (key.includes('Ingredient'))
                                2 - и второе условие что наш объект recipe с этим ключем не пустой recipe[key]*/}
                        {
                            Object.keys(recipe).map(key => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    // тогда возвращаем разметку
                                    return (
                                        <tr key={key}>
                                            {/* и две ячейки */}
                                            <td>
                                                {/* название ингридиента */}
                                                {recipe[key]} 
                                            </td>
                                            <td>
                                                {/* формируем ключ динамически, 
                                                берем ключ  recipe[`strMeasure`] и добавляем к нему цифры из нашего ключа key, они в конце.
                                                поэтому обрезаем первые 13 символов слайсом key.slice(13)*/}
                                                {
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }
                                            </td>
                                        </tr>
                                    )
                                }
                                return null; // если ключа нет то ничего не рисуем
                            })
                        }
                    </tbody>
                </table>

                {/* сделаем проверку, если видео есть то покажем блоок с видет, если нет то null*/}
                {recipe.strYoutube ? (
                    // видещ отрисуем в отдельном блоке
                    <div className="row">
                        <h5 style={{margin: '2rem 0 1.5rem'}}>Video Recipe</h5>
                        <iframe
                        title={id}
                        // 1. берем ссылку с любого ролика на утуб. правой кнопкой мыши на видео (копировать штмл код)
                        // 2. у ссылки отрезаем все кроме https://www.youtube.com/embed/
                        // 3. берем ссылку из постмана, в ней нужны только последние 11 символов, обрезаем ее слайсом
                        // 4. эта часть будет меняться динимически ${recipe.strYoutube.slice(-11)}
                        src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                        allowfullscreen // добавляем атрибут оловфулскрин
                        />
                        

                    </div>
                ) : null}
            </div>
        )}
            
        </>
    );
}

export default Recipe;