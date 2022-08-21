import React from 'react';
import { Link } from 'react-router-dom';
// для кнопки назад используем хук юзХистори

function CategoryItem(props) {

    const {
        idCategory, 
        strCategory, 
        strCategoryDescription, 
        strCategoryThumb,
    } = props;

    return (
        <div className="card" id={idCategory}>
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory}/>
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>
                    {strCategoryDescription.slice(0, 60)} 
                    {/* обрежем описание для всех елементов с попощью слайс и в конце многоточие */}
                </p>
            </div>
            <div className="card-action">
                {/* ссылка на категорию по именя */}
                <Link to={`/category/${strCategory}`} className='btn'>Watch caregory</Link>
            </div>
        </div>
    );
}

export default CategoryItem;
