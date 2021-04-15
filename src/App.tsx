import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ElevatorContainer from './features/elevator/elevatorContainer'

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="flex flex-col items-center m-20">
                <Switch>
                    <Route path="/" component={ElevatorContainer} exact />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
