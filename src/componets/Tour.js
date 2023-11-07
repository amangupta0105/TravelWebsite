import data from './data';
import { useState } from 'react';
import Card from './Card';
import ShowAll from './ShowAll';

function Tour(props){
    const [info,setData] = useState(data);

    function deleteData(newdata){        
        setData( info.filter(info => info.id !== newdata));
    }
    function resetData(){
        setData(data);
    }
    
    return(
        <div>
            <Card data={info} idReturn= {deleteData}/>
            <ShowAll resetClick= {resetData}/>
        </div>
    )
}

export default Tour;