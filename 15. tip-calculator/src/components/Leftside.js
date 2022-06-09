import { BsFillPersonFill } from 'react-icons/bs';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { React, useState }  from 'react'

function Leftside() {
    const [billValue, setBillValue] = useState(0)
    const [tipPercent, setTipPercent] = useState(0)
    // const [total, setTotalValue] = useState('')
    // const [billValue, setBillValue] = useState('')
    // let billValue = 0;
    // let totalValue = 0;

    const getBillValue = (event) => {
        // billValue = (event.target.value);
        // console.log(billValue)
        setBillValue(event.target.value)
        console.log('bill value', billValue);
        console.log('event target', event.target.value)
    }
    
    // const [tip, setTipPercent] = useState('')
    const getTipValue = (event) => {
        // setTipPercent(event.target.value)
        // console.log(tip)
        setTipPercent(event.target.value)
        console.log('tip perc: ', tipPercent)
        console.log('event target: ', event.target.value)
        // totalValue = (event.target.value * billValue)
        // console.log('total', totalValue)
    }  

    return (
        <div id="leftside">
            <div id='left-top'>
                <label>Bill</label>
                <input id='bill' className='number-input' type='number' onChange={getBillValue}/>
                <MdOutlineAttachMoney id='bill-icon'/>
            </div>

            <div>
                <label>Select Tip %</label>
                <div className='radio-button'>
                    <input name='tip-perc' 
                        id='5' 
                        type='radio' 
                        value="0.05"
                        // checked={tip === '0.05'}
                        onChange={(e) => getTipValue(e)}/>
                    <label htmlFor='5'>5%</label>
                    <input name='tip-perc' 
                        id='10' 
                        type='radio' 
                        value=".10"
                        onChange={getTipValue}/>
                    <label htmlFor='10'>10%</label>
                    <input name='tip-perc' 
                        id='15' 
                        type='radio' 
                        value=".15"
                        onChange={getTipValue}/>
                    <label htmlFor='15'>15%</label>
                    <input name='tip-perc' 
                        id='25' 
                        type='radio' 
                        value=".25"
                        onChange={getTipValue}/>
                    <label htmlFor='25'>25%</label>
                    <input name='tip-perc' 
                        id='50' 
                        type='radio' 
                        value=".50"
                        onChange={getTipValue}/>
                    <label htmlFor='50'>50%</label>
                    <input name='tip-perc' 
                        id='custom' 
                        type='number' 
                        step='1' 
                        placeholder='Custom' 
                        />
                </div>
            </div>

            <div id='left-bottom'>
                <label>Number of People</label>
                <input id='num-people' className='number-input' type='number' placeholder='1' required></input>
                <BsFillPersonFill id='num-icon'/>
            </div>

        </div>
    )
}


export default Leftside