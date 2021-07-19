import React from 'react';
const Box = (props) => {
    ///////////////////////////////////////
    // style
    ///////////////////////////////////////
    const styles = {
        backgroundColor: props.value.color,
        width: parseInt(props.value.length),
        height: parseInt(props.value.length),
    };
    ///////////////////////////////////////

    return (
        <div style={styles}></div>
    );
}

export default Box;