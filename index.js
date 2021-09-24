function App() {
    
    const signs = ["+", "-", "/", "*"];
    const signMinus = ["+", "/", "*"]

    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);

    const display = (symbol) => {
        if(expression[expression.length - 1] === "=") {
            if(signs.includes(symbol)) {
                setExpression(answer + symbol);
            } else{
                setExpression(symbol);
                setAnswer(0);
            }
        } else if(expression[expression.length - 1] === "0"  && symbol === "0") {
            setExpression(expression);
        } else {
            setExpression(prev => prev + symbol);
        }
    }

    const total = () => {
        setAnswer(eval(expression));
        setExpression(prev => prev + "=");
    }
    const allClear = () => {
        setExpression("");
        setAnswer(0);
    }

   return (
       <div className="container">
           <div className="grid">
           <div id = "display" className="padButton dis">
               <div className="row">
               <div className="col-sm">
                   <input className="display ml-6" type="text" value={expression} placeholder="0" disabled />
                    <div className="total ml-6" placeholder="0">{answer}</div>
                </div>
               </div>
               
            </div>
            <div id="clear" onClick={allClear}className="padButton AC purple">AC</div>
            <div id="divide" onClick={() => display("/")} className="padButton div green">/</div>
            <div id="multiply" onClick={() => display("*")} className="padButton mult green">X</div>
            <div id="seven" onClick={() => display("7")} className="padButton seven numbers">7</div>
            <div id="eight" onClick={() => display("8")} className="padButton eight numbers">8</div>
            <div id="nine" onClick={() => display("9")} className="padButton nine numbers">9</div>
            <div id="subtract" onClick={() => display("-")} className="padButton min green">-</div>
            <div id="four" onClick={() => display("4")} className="padButton four numbers">4</div>
            <div id="five" onClick={() => display("5")} className="padButton five numbers">5</div>
            <div id="six" onClick={() => display("6")} className="padButton six numbers">6</div>
            <div id="add" onClick={() => display("+")} className="padButton plus green">+</div>
            <div id="one" onClick={() => display("1")} className="padButton one numbers">1</div>
            <div id="two" onClick={() => display("2")} className="padButton two numbers">2</div>
            <div id="three" onClick={() => display("3")} className="padButton three numbers">3</div>
            <div id="equals" onClick={total} className="padButton equals bluer">=</div>
            <div id="zero" onClick={() => display("0")} className="padButton zero numbers">0</div>
            <div id="decimal" onClick={() => display(".")} className="padButton decimal numbers">.</div>
               
           </div>
       </div>
   )
}; 

ReactDOM.render(<App/>, document.getElementById("app"))