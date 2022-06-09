import { MdOutlineAttachMoney } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { FcCalculator } from 'react-icons/fc'
import { FaReact } from 'react-icons/fa'
import { useState } from 'react'


function App() {
    const [billValue, setBillValue] = useState(0)
    const [numPeople, setNumPeople] = useState(1)
    const [tipPerc, setTipPercent] = useState(0)


    const getBillValue = (event) => {
        setBillValue(event.target.value)
      }
    
    const getTipValue = (event) => {
        setTipPercent(event.target.value / 100)
      }  

    const getNumPeople = (event) => {
        if (event.target.value < 1) {
            setNumPeople(1)
        } else {
            setNumPeople(event.target.value)
        }
    }

    const resetAll = () => {
        setBillValue(0)
        setNumPeople(1)
    }





  return (
    <div className="App">
        {/* <h3>billValue:  {billValue}</h3>
        <h3>tipAmount: {billValue * tipPerc}</h3>
        <h3>numPeopl: {numPeople}</h3>
        <h3>totPerPerson: {(billValue * tipPerc) / numPeople}</h3>
        <h3>tipPerc: {tipPerc}</h3> */}
        <h1><FaReact /> Tip Calculator <FcCalculator /> </h1>
      <div className="container">
        <div id="leftside">
            <div id='left-top'>
                <label>Bill</label>
                <input id='bill' className='number-input' type='number' value={billValue} onChange={getBillValue}/>
                <MdOutlineAttachMoney id='bill-icon'/>
            </div>

            <div>
                <label>Select Tip %</label>
                <div className='radio-button'>
                    <input name='tip-perc' 
                        id='5' 
                        type='radio' 
                        value="005"
                        // checked={tip === '0.05'}
                        onChange={getTipValue}/>
                    <label htmlFor='5'>5%</label>
                    <input name='tip-perc' 
                        id='10' 
                        type='radio' 
                        value="10"
                        onChange={getTipValue}/>
                    <label htmlFor='10'>10%</label>
                    <input name='tip-perc' 
                        id='15' 
                        type='radio' 
                        value="15"
                        onChange={getTipValue}/>
                    <label htmlFor='15'>15%</label>
                    <input name='tip-perc' 
                        id='25' 
                        type='radio' 
                        value="25"
                        onChange={getTipValue}/>
                    <label htmlFor='25'>25%</label>
                    <input name='tip-perc' 
                        id='50' 
                        type='radio' 
                        value="50"
                        onChange={getTipValue}/>
                    <label htmlFor='50'>50%</label>
                    <input name='tip-perc' 
                        id='custom' 
                        type='number' 
                        step='1' 
                        placeholder='Custom'
                        onChange={getTipValue}
                        />
                </div>
            </div>

            <div id='left-bottom'>
                <label>Number of People</label>
                <input id='num-people' 
                    className='number-input' 
                    type='number' 
                    placeholder='1' 
                    required 
                    value = {numPeople}
                    onChange =
                        { getNumPeople }>

                    </input>
                <BsFillPersonFill id='num-icon'/>
            </div>
        </div>


         {/* below is the right side */}


        <div id="rightside">
          <div id='tip'>
              <div id='top-tip'>
                  <h5>Tip Amount <br /> <span>/ person</span></h5>
                  <h1>$<span id='tip-amt'>{(billValue * tipPerc).toFixed(2)}</span></h1>
              </div>
              <div id='bottom-tip'>
                  <h5>Total <br /> <span>/ person</span></h5>
                  <h1>$<span id='total'>{((billValue * tipPerc) / numPeople).toFixed(2)}</span></h1>
              </div>
          </div>
          <button id='reset' onClick={resetAll}>RESET</button>
      </div>
      </div>
    </div>
  );
}

export default App;
