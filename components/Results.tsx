import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move";

function Results(props: any) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {props.results.results.map((result: any) => {
                const id = result.id;
                return (<Thumbnail key={id} result={result} />)
            })}
        </FlipMove>
    )
}

export default Results