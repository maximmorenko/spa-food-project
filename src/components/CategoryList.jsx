import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryList(props) {

    const {catalog = []} = props;

    return (
        <div className='list'>
            {catalog.map(el => (
                // передаем все ключи el
            <CategoryItem key={el.idCategory} {...el}/> 
            ))}
            
        </div>
    );
}

export default CategoryList;