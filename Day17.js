import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css'

function Accordion({ items }) {

    const [isContent, setIsContent] = useState(false)
    const [content, setContent] = useState("")


    const showContent = (item) => {


        let itemContent = item.content;
        if (itemContent === content) {
            setIsContent(false);
        } else {
            setIsContent(true)
            setContent(itemContent)
        }

    }

    return (
        <div>

            {items.length == 0 ? (<p>No items available</p>) : (<>{
                items.map((item, index) => <div key={index} style={{ border: "2px solid black", margin: "5px", paddingRight: "20px", paddingLeft: "20px", borderRadius: "10px" }}>

                    <h4 style={{ cursor: "pointer", display: "flex", justifyContent: "space-between" }}
                        onClick={() => showContent(item)}>{item.title}
                        {!isContent ? <FaChevronDown /> : <FaChevronUp />}
                    </h4>
                </div>)
            }
                {isContent ?
                    <p style={{ border: "1px solid gray", padding: "20px", width: "full" }}> {content} </p> : null}
            </>)}
        </div>
    );
}

export default Accordion;