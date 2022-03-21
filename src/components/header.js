import burger from "../assets/burger.svg"

function Header(props) {
    return (
        <header>
            <div>
                <h1>A beatiful title</h1>
                <h2>experiments</h2>
                {props.smallScreen ?
                    <img src={burger} alt='menu icon' style={{ width: '20px' }} />
                    :
                    <>
                        <button>btn</button>
                        <button>btn</button>
                        <button>btn</button>
                    </>}
            </div>
        </header>
    )
};

export default Header;