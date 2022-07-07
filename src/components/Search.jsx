// так как это поиск у него будет стейт
import React, {useState} from 'react';

function Search(props) {
    // на входе ожидаем колбек (cb)
    const {cb = Function.prototype} = props;
    // создадим состояние значения
    const [value, setValue] = useState('');

    // метод обработки клавиши enter
    const handleKey = (e) => {
        // если событие по ключю равно Enter, то будем отправлять нашу форму
        if (e.key === 'Enter') {
            // вызываем метод отправки
            handleSubmit();
        }
    };
    
    // метод отправки
    const handleSubmit = () => {
        // вызываем полученый из пропса колбек и передаем ем текущий стейт (value)
        cb(value)
    };

    const handleChange = (e) => {
        // при событии перезаписываем стейт (value)
        setValue(e.target.value)
    };


    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input 
                type='search'
                id='search-field'
                placeholder='search'
                onKeyDown={handleKey}
                onChange={handleChange}
                // value динамическое, берем из стейта
                value={value}
                />
                <button className='btn' onClick={handleSubmit} style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}>
                search
                </button>

            </div>
        </div>
    );
}

export default Search;