import React, { useState } from "react";

const Calculators = () => {
    const [result, setResult] = useState("");

    const handleclick = (event) => {

        setResult(result.concat(event.target.value))
    }

    const handleclear = () => {
        setResult("");

    }

    const calculate = () => {
        const res = eval(result)
        setResult(res.toString())
    };

    return(
              <div className="container">
              <input type="text" placeholder="0" value={result} id="answer"></input>
              <input type="button" value="9" className="button" onClick={handleclick}></input>
              <input type="button" value="8"  className="button" onClick={handleclick}></input>
              <input type="button" value="7"  className="button" onClick={handleclick}></input>
              <input type="button" value="6"  className="button" onClick={handleclick}></input>
              <input type="button" value="5"  className="button" onClick={handleclick}></input>
              <input type="button" value="4"  className="button" onClick={handleclick}></input>
              <input type="button" value="3"  className="button" onClick={handleclick}></input>
              <input type="button" value="2"  className="button" onClick={handleclick}></input>
              <input type="button" value="1"  className="button" onClick={handleclick}></input>
              <input type="button" value="0"  className="button" onClick={handleclick}></input>
              <input type="button" value="."  className="button" onClick={handleclick}></input>
              <input type="button" value="+"  className="button" onClick={handleclick}></input>
              <input type="button" value="-"  className="button" onClick={handleclick}></input>
              <input type="button" value="*"  className="button" onClick={handleclick}></input>
              <input type="button" value="/"  className="button" onClick={handleclick}></input>
              <input type="button" value="%"  className="button" onClick={handleclick}></input>
              <input type="button" value="Clear" className=" button button1" onClick={handleclear}></input>
              <input type="button" value="=" className="button button1" onClick={calculate}></input>

              </div>
    )
}

export default Calculators;


