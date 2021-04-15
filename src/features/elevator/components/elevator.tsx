/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment } from 'react'
import { Direction } from '../../../types/common'

export const ElevatorBody = () => {
    return <div className="w-8 h-16 bg-gray-600" />
}

export const ElevatorEnclosure = ({
    containsElevator,
}: {
    containsElevator: boolean
}) => {
    return (
        <div
            className="w-12 h-20 bg-gray-400 flex border-b-2
        items-center justify-center border-gray-700"
        >
            {containsElevator && <ElevatorBody />}
        </div>
    )
}

const ElevatorExternalDisplayPanel = ({
    currentFloor,
    direction,
}: {
    currentFloor: number
    direction: Direction
}) => {
    return (
        <div className="border-gray-800 border-2 min-w-sm h-10 p-2 m-4">
            {currentFloor + 1} {direction}
        </div>
    )
}

const ElevatorInternalDisplayPanel = ({
    requestElevator,
    numberOfFloors,
    currentFloor,
    currentDirection,
}: {
    requestElevator: Function
    numberOfFloors: number
    currentFloor: number
    currentDirection: Direction
}) => {
    const floorButtons = []
    for (let i = 0; i < numberOfFloors; i++) {
        floorButtons.push(
            <button
                className="rounded-full h-20 w-20 bg-yellow-600"
                type="button"
                onClick={() => requestElevator(i)}
            >
                {i + 1}
            </button>
        )
    }
    return (
        <div className="border-gray-800 border-2 ">
            <ElevatorExternalDisplayPanel
                currentFloor={currentFloor}
                direction={currentDirection}
            />
            <div className="w-64 h-80 flex flex-wrap justify-around items-center">
                {floorButtons}
            </div>
        </div>
    )
}

const RequestElevatorPanel = ({
    requestedFloor,
    requestElevator,
}: {
    requestedFloor: number
    requestElevator: Function
}) => {
    return (
        <div className="w-20 flex justify-around items-center">
            {Object.keys(Direction).map((key) => {
                return (
                    <button
                        type="button"
                        className="rounded-md bg-red-300 w-5"
                        onClick={() => requestElevator(requestedFloor, key)}
                    >
                        {key === Direction[Direction.UP] ? (
                            <>&uarr;</>
                        ) : (
                            <>&darr;</>
                        )}
                    </button>
                )
            })}
        </div>
    )
}

export const ElevatorPass = ({
    numberOfFloors,
    currentFloor,
    setCurrentFloor,
    currentDirection,
    setCurrentDirection,
}: {
    numberOfFloors: number
    currentFloor: number
    currentDirection: Direction
    setCurrentFloor: Function
    setCurrentDirection: Function
}) => {
    const elevatorPass = []
    let containsElevator = false

    const requestElevator = (requestedFloor: number, key: Direction) => {
        let currentSetFloor = currentFloor
        const tm = setInterval(() => {
            if (currentSetFloor < requestedFloor) {
                setCurrentDirection(Direction.UP)
                currentSetFloor += 1
                setCurrentFloor(currentSetFloor)
            } else if (currentSetFloor > requestedFloor) {
                setCurrentDirection(Direction.DOWN)
                currentSetFloor -= 1
                setCurrentFloor(currentSetFloor)
            } else {
                clearInterval(tm)
            }
        }, 500)
    }

    for (let i = 0; i < numberOfFloors; i++) {
        containsElevator = currentFloor === numberOfFloors - i - 1
        elevatorPass.push(
            <div className="flex">
                <ElevatorEnclosure containsElevator={containsElevator} />
                <RequestElevatorPanel
                    requestedFloor={numberOfFloors - i - 1}
                    requestElevator={requestElevator}
                />
            </div>
        )
    }
    return (
        <div className="flex flex-col-reverse items-center ">
            <ElevatorInternalDisplayPanel
                requestElevator={requestElevator}
                numberOfFloors={numberOfFloors}
                currentFloor={currentFloor}
                currentDirection={currentDirection}
            />
            <div className="flex justify-start items-center">
                <div className="flex-row-reverse">{elevatorPass}</div>
            </div>
        </div>
    )
}
