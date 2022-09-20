import "./App.css";

function App() {
    return (
        <div>
            <header>
                <p>Lillie Lovatt</p>
                <About></About>
                <Portfolio></Portfolio>
                <Contact></Contact>
                <Resume></Resume>
            </header>

            <footer>
                <a href="https://github.com/lillielovatt">
                    Check me out on Github
                </a>
                <br></br>
                <a href="https://www.linkedin.com/in/lillie-lovatt-7b2475181/">
                    Or LinkedIn
                </a>
                {/* NEED THIRD PARTY PLATFORM....YOUTUBE? LOL */}
            </footer>
        </div>
    );
}

export default App;
