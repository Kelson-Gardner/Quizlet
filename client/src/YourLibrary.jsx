import './PageContents.css';

function YourLibrary(props){

    return(
        <>
            <h1 className= {props.isOpen == true ? "is-open" : "not-open"}>
                Your Library
            </h1>
        </>
    )
}

export default YourLibrary;