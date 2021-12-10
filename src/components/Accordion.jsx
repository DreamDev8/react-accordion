import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Accordion(props) {

    const [showInfo, setShowInfo] = useState(false);

    function handleClick() {
        setShowInfo(!showInfo)
    }

    return (
        <article className="accordion-container">
            <div className="question-cta">
                <h2>{props.title}</h2>
                <button onClick={handleClick} className="cta">{showInfo ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}</button>
            </div>
            <p className="info">{showInfo && props.info}</p>
        </article>
    );
}

export default Accordion;
