import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Elevator from './elevator/elevator'
import { About } from './pages/About'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Elevator} exact />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
