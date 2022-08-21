import Header from './components/Header';
import Footer from './components/Footer';
// для начала работы достаем из реакт роутер дом три компанента:
// 1. BrowserRouter роутинг внутри браузера (переименовуем его на Router - BrowserRouter as Router)
// 2. Route дочерний компонент для роутера
// 3. Switch
// Импортируем страницы на которые бедем переключаться
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Recipe from './pages/Recipe';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
    return (
        // используем реакт фрагмент <></>
        <>
            <Router basename='/spa-food-project'>
                <Header />
                <main className='container content'>
                {/* все наши страници должны быть обернуты в  Router*/}
                    <Switch>
                        {/* дочерними компонентами для роутера будут роуты */}
                        {/* чтобы домашняя страница не дублировалать на других страницах нужно добавить exact (точный путь)*/}
                        <Route exact path='/' component={Home}/>
                        {/* у роутера есть путь, по которому пользователи будет искать страницу 
                        также указываем компонент который прендлежит этому пути */}
                        <Route path='/about' component={About}/>
                        <Route path='/contact' component={Contact}/>
                        {/* даже если роутер найдет нужный путь с пкомпонентом, он все равно пробежит по всем роутерам, 
                        чтобы роутер не пробегал по всем роутам используем свитч (это своего рода опртимизация), 
                        оборачиваем в свитч все роуты*/}
                        <Route path='/category/:name' component={Category}/>
                        <Route path='/meal/:id' component={Recipe}/>
                        <Route component={NotFound}/> 
                        {/* если по какому-то пути не бедет найден нужная страница, то свитч переключит на компонент NotFound */}
                    </Switch>
                </main>
                <Footer />
            </Router>
        </>
    );
}

export default App;
