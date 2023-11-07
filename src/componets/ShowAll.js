
import './ShowAll.css';

function ShowAll(props){

    function resetHandler(){
        props.resetClick();
    }
    return(
        <div  className='reset-container'>
            <button onClick={resetHandler} className='reset'> 
                RESET
            </button>
        </div>
    )
}

export default ShowAll;