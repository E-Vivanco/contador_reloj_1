import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types'
//import App from './App'
import './styles.css'

function SecondsCounter(props){
    return(
    
        <div className='Contador_Reloj container w-50'>
            <div className='calendario'>
             <i class="fa-solid fa-clock fa-1x"></i>
             </div>
                <div className='cuatro'>{props.digitocuatro % 10}</div>
                <div className='tres'>{props.digitotres % 10}</div>
                <div className='dos'>{props.digitodos % 10}</div>
                <div className='uno'>{props.digitouno % 10}</div>
            
        </div>)
}
SecondsCounter.propTypes={
    digitocuatro: PropTypes.number,
    digitotres:PropTypes.number,
    digitodos:PropTypes.number,
    digitouno:PropTypes.number
}
let counter=0
setInterval(function(){
    const cuatro = Math.floor(counter/1000)
    const tres = Math.floor(counter/100)
    const dos = Math.floor(counter/10)
    const uno = Math.floor(counter/1)
    console.log(cuatro,tres,dos,uno)
    counter++;

ReactDOM.createRoot(document.querySelector('#root')).render(<SecondsCounter digitouno={uno} digitodos={dos} digitotres={tres} digitocuatro={cuatro} />)
},1000)