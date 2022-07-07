import { API_URL } from "./config";


// Async/await
// У слова async один простой смысл: эта функция всегда возвращает промис.
// await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. 
// После чего оно вернёт его результат, и выполнение кода продолжится.

// создаем методы приложения:
//1. получаем пищу (блюдо) по id
const getMealById = async (mealId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
};
export {getMealById};

//2. получаем категории пищи
const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
};
export {getAllCategories};

//3. метод фильтрации категорий
const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return await response.json();
};
export {getFilteredCategory};
