import React, { useState } from 'react'
import './Style.css';

const Tabs = (props) => {
    const [state, setState] = useState({
        tab: 1


    });
    const click = (e, value) => {
        setState({
            tab: value
        });

    };

    return (
        <center>
        <h1 >Tabs</h1>
        {[1,2,3].map((value,index)=>
            <button onClick={e=>click(e,value)} selectTabs={state.tab===value}>tab{value}</button>
            )}
            <content style={{
                display: "flex", justifyContent: "center",
                alignItems: 'center', border: "black solid", width: 200, marginTop: 40, padding: 120
            }}>
                Tab {state.tab} content is showing here
            </content>
        </center>
    )
}

export default Tabs
