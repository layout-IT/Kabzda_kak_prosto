import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";
import {isBoolean} from "util";

function App() {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return (
        <div>

            <PageTitle title={'My friends'}/>
            <PageTitle title={'This is APP com'}/>

            <Accordion title={'accordion one'}
                       collapsed={accordionCollapsed}
                       onChange={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>

            <Rating/>
        </div>
    );
}

function PageTitle(props: any) {

    return <h1>{props.title}</h1>
}

export default App;
