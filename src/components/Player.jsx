import { useRef, useState } from 'react'

export default function Player() {
    const [playerName, setPlayerName] = useState(null)
    const playerNameRef = useRef()

    const handlePlayerNameChange = () => {
        setPlayerName(playerNameRef.current.value)
    }

    return (
        <section id='player'>
            <h2>
                Welcome{' '}
                {playerName && playerName.length > 0
                    ? playerName
                    : 'unknown entity'}
            </h2>
            <p>
                <input type='text' ref={playerNameRef} />
                <button onClick={handlePlayerNameChange}>Set Name</button>
            </p>
        </section>
    )
}
