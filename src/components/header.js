import { useState, useEffect } from 'react'

export default function Header(props) {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        // naming it to be able to clear it if I wanted to unmount the component
        const interval = setInterval(() => {
            setCounter(counter => counter !== title.length ? counter + 1 : 0);
        }, 200);

        // clearing on unmount
        return () => clearInterval(interval);
    }, [])

    const title = 'A beatiful title'

    return (
        <header>
            <div id='titleBlock'>
                <h1> {[...title].filter((e, i) => i < counter).join('')}_</h1>
                <h2>experiments</h2>
            </div>
                {props.children}
        </header>
    )
};