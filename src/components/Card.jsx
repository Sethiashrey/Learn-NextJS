import Button from "./Button";
function Card({name = "Sunny",desc = "CLICK ME"}){
    return (
        <>
           <h1>{name}</h1>
           <Button label={desc} />
        </>
    )
}

export default Card;