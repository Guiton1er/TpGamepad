export default function Gamepad({Up,Side}) {
    
    return (
      <>
        <div id="gamepad">
            <span id='up' onClick={() => Up(-10)}>⬆️</span>
            <span id='left' onClick={() => Side(-10)}>⬅️</span>
            <span id='down' onClick={() => Up(10)}>⬇️</span>
            <span id='right' onClick={() => Side(10)}>➡️</span>
        </div>
      </>
    );
}