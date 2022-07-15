function Receipt(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Main: {props.main}</p>
            <p>Protien: {props.protein}</p>
            <p>Rice: {props.rice}</p>
            <p>Sauce: {props.sauce}</p>
            <p>Drink: {props.drink}</p>
            <p>Cost: {props.cost}</p>
        </div>
    )   
}

export default Receipt