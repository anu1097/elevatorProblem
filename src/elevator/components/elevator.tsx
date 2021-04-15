/* eslint-disable no-console */
import React, { Fragment } from 'react'

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
            className="w-10 h-20 bg-gray-400 flex border-b-2 
        items-center justify-center border-gray-700"
        >
            {containsElevator && <ElevatorBody />}
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
        <div className="m-1 p-3 flex justify-start items-center">
            {['Up', 'Down'].map((key) => {
                return (
                    <button
                        type="button"
                        className="rounded-md"
                        onClick={() => requestElevator(key, requestedFloor)}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

// const ElevatorStatusPanel = ({})

export const ElevatorPass = ({
    numberOfFloors,
    currentFloor,
    setCurrentFloor,
}: {
    numberOfFloors: number
    currentFloor: number
    setCurrentFloor: Function
}) => {
    const elevatorPass = []
    let containsElevator = false
    // const requestElevator = (key: string, requestedFloor: number) => {
    //     setCurrentFloor(requestedFloor)
    // }
    console.log('outside', { currentFloor })

    const moveElevator = (newFloor: number) => {
        setCurrentFloor(newFloor)
        setTimeout(() => {
            console.log('waiting')
        }, 1000)
    }

    const requestElevator = (key: string, requestedFloor: number) => {
        while (currentFloor !== requestedFloor) {
            if (currentFloor > requestedFloor) {
                moveElevator(currentFloor - 1)
            } else if (currentFloor < requestedFloor) {
                moveElevator(currentFloor + 1)
            } else break
        }
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < numberOfFloors; i++) {
        containsElevator = currentFloor === i
        elevatorPass.push(
            <div className="flex">
                <ElevatorEnclosure containsElevator={containsElevator} />
                <RequestElevatorPanel
                    requestedFloor={i}
                    requestElevator={requestElevator}
                />
            </div>
        )
    }
    return <Fragment>{elevatorPass}</Fragment>
}
