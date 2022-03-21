import burger from "../assets/burger.svg"

function Header() {
    return (
        <header>
            <div>
                <h1>A beatiful title</h1>
                <h2>experiments</h2>

                <button>btn</button>
                <button>btn</button>
                <button>btn</button>

                <img src={burger} alt='menu icon' style={{ width: '20px' }} />
            </div>
        </header>
    )
};

export default Header;