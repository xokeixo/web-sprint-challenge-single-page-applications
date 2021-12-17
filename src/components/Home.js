import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import OrderForm from './OrderForm';

function Home() {
    return (
        <div>
            <div>
                <h1>Lambda Pizza</h1>
            </div>
            <div className='button'>
                <BrowserRouter>
                    <button className='move'>
                        <Link id='order-pizza' to='/pizza'>Order Pizza</Link>
                    </button>
                    <Switch>
                        <Route exact path='/pizza'>
                            <OrderForm />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Home