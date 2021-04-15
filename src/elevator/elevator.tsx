import React, { useState } from 'react'
import { ElevatorPass } from './components/elevator'

const Elevator = () => {
    const [numberOfFloors] = useState(5)
    const [currentFloor, setCurrentFloor] = useState(1)
    return (
        <div className="flex flex-col items-center p-1">
            <ElevatorPass
                numberOfFloors={numberOfFloors}
                currentFloor={currentFloor}
                setCurrentFloor={setCurrentFloor}
            />
        </div>
    )
}

export default Elevator
