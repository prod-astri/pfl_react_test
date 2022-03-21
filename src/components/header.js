export default function Header(props) {
    return (
        <header>
            <div>
                <h1>A beatiful title</h1>
                <h2>experiments</h2>
                {props.children}
            </div>
        </header>
    )
};