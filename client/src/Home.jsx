import './Home.css';

function Home(props){

    return(
        <>
        <div className = {props.isOpen ? "is-open" : "not-open"} >
            Your Decks
        </div>
        </>
    )
}

export default Home;