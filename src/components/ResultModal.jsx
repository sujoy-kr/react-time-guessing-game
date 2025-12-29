import { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(
    ({ targetTime, timeRemaining, onReset }, ref) => {
        const dialog = useRef()

        const userLost = timeRemaining < 0
        timeRemaining = timeRemaining < 0 ? 0 : timeRemaining
        const formattedTimeInSeconds = (timeRemaining / 1000).toFixed(2)
        const score = Math.round(
            (1 - timeRemaining / (targetTime * 1000)) * 100
        )

        useImperativeHandle(ref, () => {
            return {
                open: () => {
                    dialog.current.showModal()
                },
            }
        })
        return (
            <dialog ref={dialog} className='result-modal'>
                {userLost && <h2>You lost</h2>}
                {!userLost && <h2>Your score: {score}</h2>}
                <p>
                    Your target time was{' '}
                    <strong>
                        {targetTime} second{targetTime > 1 ? 's' : ''}
                    </strong>
                </p>
                <p>
                    You stopped the timer with{' '}
                    <strong>{formattedTimeInSeconds} seconds left.</strong>
                </p>
                <form method='dialog' onSubmit={onReset}>
                    <button>Close</button>
                </form>
            </dialog>
        )
    }
)

export default ResultModal
