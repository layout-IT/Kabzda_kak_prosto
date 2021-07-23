import React, {useState} from "react";



export function Rating(props: any) {
    let [on, setOn] = useState(0)
    return (
        <div className={'star'}>
            <Star selected={on > 0} setOn={setOn} value={1}/>
            <Star selected={on > 1} setOn={setOn} value={2}/>
            <Star selected={on > 2} setOn={setOn} value={3}/>
            <Star selected={on > 3} setOn={setOn} value={4}/>
            <Star selected={on > 4} setOn={setOn} value={5}/>

        </div>)
}

type StarType = {
    selected: boolean
    setOn: (value: 1 | 2 | 3 | 4 | 5) => void
    value: 1 | 2 | 3 | 4 | 5
}

export function Star(props: StarType) {
    console.log('star rendering')
    return <div className={'text'} onClick={() => {
        props.setOn(props.value)
    }}>
        {props.selected ? <b>star</b> : 'star'}</div>
}