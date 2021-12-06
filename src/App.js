import React, {useState}  from 'react';
import './App.css';

const App = () => {
    const [result, setResult] = useState("");

    const click = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("")
    }
    const B = () => {
        setResult(result.slice(0, - 1));
    }
    const doMath = () => {
        try {
            setResult(eval(result).toString())
        } catch (err) {
            setResult("Error")
        }
        
    }
    return (
        <>
            <div className="container">
                <form>
                    <input type="text" value={result} />
                </form>

                <div className="numpad">
                    <button onClick={clear} id="AC" class="topbtn">AC</button>
                    <button onClick={B} id="B" class="topbtn">B</button>
                    <button onClick={click} class="topbtn">%</button>
                    <button name="/" onClick={click} class="math">&divide;</button>
                    <button name="7" onClick={click} class="numbers">7</button>
                    <button name="8" onClick={click} class="numbers">8</button>
                    <button name="9" onClick={click} class="numbers">9</button>
                    <button name="*" onClick={click} class="math">&times;</button>
                    <button name="4" onClick={click} class="numbers">4</button>
                    <button name="5" onClick={click} class="numbers">5</button>
                    <button name="6" onClick={click} class="numbers">6</button>
                    <button name="-" onClick={click} class="math">&ndash;</button>
                    <button name="1" onClick={click} class="numbers">1</button>
                    <button name="2" onClick={click} class="numbers">2</button>
                    <button name="3" onClick={click} class="numbers">3</button>
                    <button name="+" onClick={click} class="math">+</button>
                    <button name="0" onClick={click} id="zero" class="numbers">0</button>
                    <button name="." onClick={click} class="numbers">.</button>
                    <button onClick={doMath} id="result" class="math">=</button>
                </div>
            </div>
        </>

    )
}
export default App;