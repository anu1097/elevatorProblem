import React, { useState } from 'react'
import { Direction } from '../../types/common'
import { ElevatorPass } from './components/elevator'

const ElevatorContainer = () => {
    const [numberOfFloors] = useState(5)
    const [currentFloor, setCurrentFloor] = useState(1)
    const [currentDirection, setCurrentDirection] = useState(Direction.UP)
    return (
        <ElevatorPass
            numberOfFloors={numberOfFloors}
            currentFloor={currentFloor}
            setCurrentFloor={setCurrentFloor}
            currentDirection={currentDirection}
            setCurrentDirection={setCurrentDirection}
        />
    )
}

export default ElevatorContainer
