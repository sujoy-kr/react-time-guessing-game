import Header from './components/Header.jsx'
import Player from './components/Player.jsx'
import TimerChallenge from './components/TimerChallenge.jsx'

function App() {
    return (
        <>
            <Header />
            <Player />
            <div id='challenges'>
                <TimerChallenge title='Easy' targetTime={1} />
                <TimerChallenge title='Medium' targetTime={5} />
                <TimerChallenge title='Hard' targetTime={10} />
                <TimerChallenge title='Professional' targetTime={15} />
            </div>
        </>
    )
}

export default App
