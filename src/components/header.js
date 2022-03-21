import {useState, useEffect} from 'react'

export default function Header(props) {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        setInterval(() => {
            setCounter(counter => counter + 1);
          }, 250);
    }, [])

    let title = 'A beatiful title'

    return (
        <header>
            <div>
                <h1>{[...title].filter((e, i)=>i < counter).join('')} </h1>
                <h2>experiments</h2>
                {props.children}
            </div>
        </header>
    )
};