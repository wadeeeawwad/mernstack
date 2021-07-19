import React, { useState } from 'react';
const DisplayForm = (props) => {
    const { value, setValue } = props;

    const [color, setColor] = useState(""); //this for color
    const [length, setWidth] = useState(0); //this for hiegh and width
    const createBox = (e) => {
        e.preventDefault();

        const newBoxes = {
            color: color,
            length: length
        };
        setValue([...value, newBoxes]);
        setColor("");
        setWidth(0);
    }
    

    return (
        <form onSubmit={createBox}>
            <div>
                <label>Color</label>
                <input onChange={(e) => setColor(e.target.value)} type="text" value={color} />
            </div>
            <div>
                <label>Width and Height</label>
                <input onChange={(e) => setWidth(e.target.value)} type="number" step="1" value={length} />
            </div>
            <input type="submit" value="Create box" />
        </form>
    );
}

export default DisplayForm;