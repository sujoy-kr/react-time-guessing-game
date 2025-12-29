import { useRef, useState } from 'react'
import ResultModal from './ResultModal'

const TimerChallenge = ({ title, targetTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timer = useRef()
    const dialog = useRef()

    const handleTimerStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10)
        }, 10)
    }

    const handleTimerStop = () => {
        clearInterval(timer.current)
        dialog.current.open()
    }

    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining < 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }

    const handleTimeReset = () => {
        setTimeRemaining(targetTime * 1000)
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                timeRemaining={timeRemaining}
                onReset={handleTimeReset}
            />
            <section className='challenge'>
                <h2>{title}</h2>

                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>

                <p>
                    <button
                        onClick={
                            isTimerActive ? handleTimerStop : handleTimerStart
                        }
                    >
                        {isTimerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : ''}>
                    {' '}
                    {isTimerActive ? 'Time is running..' : 'Timer inactive'}.
                </p>
            </section>
        </>
    )
}

export default TimerChallenge
