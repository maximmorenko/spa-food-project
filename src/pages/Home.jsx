// на главной странице будем отрисовывать список категорий еды
import React, {useState, useEffect} from 'react';
//импортируем метод (функцию) получения всех категорий из API
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader'
import CategoryList from '../components/CategoryList'

function Home(props) {

    const [catalog, setCatalog] = useState([]) // по умолчанию каталог пустой

    useEffect(() => {
        getAllCategories() // метод возвращаем промис
        .then(data => { setCatalog(data.categories) })
    }, [])

    return (
        <>
           {/* если каталог пустой, то показываем прелоадер, 
           если не пустой то отрисовываем компонент (список категорий) и спускаем туда весь каталог*/}
           {!catalog.length ? <Preloader /> : (<CategoryList catalog={catalog}/>)}
        </>
    );
}

export default Home;