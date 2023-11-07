import { useState } from 'react';
import './Card.css';

function Card(props) {

    const [showMoreStates, setShowMoreStates] = useState(
        props.data.reduce((acc, item) => {
          acc[item.id] = false; // Initialize each item's state to false
          return acc;
        }, {})
      );
      const toggleMore = (itemId) => {
        setShowMoreStates((prevState) => ({
          ...prevState,
          [itemId]: !prevState[itemId],
        }));
      };

      const bookHandler = (itemId,itemName) => {
        // You can perform any action here when the "Book Now" button is clicked
        alert(`Booking for item with ID ${itemId} and name ${itemName}`);
      };
    return (
        <div className="card">
            {
                props.data.map(function (item, index) {
                    
                    function deleteHandler (){
                        props.idReturn(item.id);
                    }

                        return (
                            <div className="card-box">
                                <div className="image-container" key={index}>
                                    <img src={item.image} alt="destination-pic" className="image"/>
                                </div>
                                <div className="name">
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="price">
                                    <p>{item.price}</p>
                                </div>
                                <div className="description">
                                    <p>
                                        {showMoreStates[item.id]? item.info: `${item.info.substring(0, 100)}...`}
                                        <span className="morebtn" onClick={() => toggleMore(item.id)}>
                                        {showMoreStates[item.id] ? 'Show Less' : 'Show More'}
                                        </span>         
                                    </p>
                                </div>
                                <div >
                                    <button className="book" onClick={() => bookHandler(item.id,item.name)}> Book Now</button>
                                    <button className="click-btn" onClick={deleteHandler}>Not Intrested</button>
                                </div>
                            </div>
                        )
                    })
            }

        </div>
    )
}

export default Card;