import NavBar from "./componetes/NavBar";
import Main from "./componetes/Main";
import Footer from "./componetes/Footer";


const App = () => {

    return (
        <>
            <NavBar/>
            <Main greeting={"main"} />
            <Footer/>
        </>
    )
}

export default App;