import './PageContents.css';

function YourLibrary(props){

    return(
        <>
            <div className= {props.isOpen == true ? "is-open" : "not-open"}>
                I am the YourLibrary page
            </div>
        </>
    )
}

export default YourLibrary;