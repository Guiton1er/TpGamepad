export default function Player(position) {

    return (
        <>
            <div id="board">
                <span id="player" style={{left: `${position.position[0]}%`,top: `${position.position[1]}%`}}>🐅</span>
            </div>
        </>
    );
}