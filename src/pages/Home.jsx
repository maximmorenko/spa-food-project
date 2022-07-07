// на главной странице будем отрисовывать список категорий еды
import React, {useState, useEffect} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
//импортируем метод (функцию) получения всех категорий из API
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader'
import CategoryList from '../components/CategoryList'
import Search from '../components/Search';

function Home(props) {

    const [catalog, setCatalog] = useState([]) // по умолчанию каталог пустой
    // мы отрисовуем либо каталог по умолчанию пришедший, либо отфильтрованный каталог по поиску, 
    // для отфильтрованного создадим стейт
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    // для реализации добавления в адресную строку дополнительных гет параметров, а именно наш поиск, 
    // т.е когда мы запустили поиск нам нужно изменить адресную строку
    // для этого будем использовать метод пуш из юзХистори
    // воспользуемся возможностями хуков useLocation, useHistory
    // достанем из юзлокейшн путь и поиск
    // search это наше поисковое слово, это тот гет параметр который мы хотим добавить в адресную строку
    const {pathname, search} = useLocation();

    // из юзхистори достанем метод пуш
    const {push} = useHistory();
    

    // создадим функцию управления поиском
    const handleSearch = (str) => {
        // на входе получаем строку
        // наш фильтркаталог будет фильтроваться от текущего каталога
        setFilteredCatalog(
            // бежим по каждому елементу каталога strCategory и проверяем содержит ли он нашу поисковую строку str,
            // если да то записываем ее в стейт
            // предварительно обе строки переводим в нижний регистр toLowerCase()
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        // используем метод пуш для добавления поска в адресную строку (передаем объект с полями pathname и search)
        // поля автоматически будут склеиваться
        push({
            pathname,
            search: `?search=${str}`,
        })
    }

    useEffect(() => {
        getAllCategories() // метод возвращаем промис
        .then(data => { 
            setCatalog(data.categories);
            // отфильтрованный каталог тоже будем наполнять, но!
            // делаем проверку на случай если есть поиск
            // если есть серч то делаем фильтрацию каталога по гет параметру серч но не по всему, а ту часть что после '='
            // для этого серч разделим на массив из двух элементов по знаку '=' split('=') и возьмем второй елемент [1]
            // также зададим нижний регистр обеим строкам item и search
            setFilteredCatalog(search 
                ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) 
                : data.categories);
        });
    }, [search]); // зависимость будет search

    return (
        <>
            <Search cb={handleSearch}/>
           {/* если каталог пустой, то показываем прелоадер, 
           если не пустой то отрисовываем компонент (список категорий) и спускаем туда весь каталог*/}
           {/* спускаем вниз отфильтрованный каталог filteredCatalog*/}
           {!catalog.length ? <Preloader /> : (<CategoryList catalog={filteredCatalog}/>)}
        </>
    );
}

export default Home;