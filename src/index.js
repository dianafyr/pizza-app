import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
    {
        picture: "pizzas/focaccia.jpg",
        name: "Focaccia",
        ingredients: "Bread with italian olive oil",
        price: 6,
        soldOut:false
    }, 
    {
        picture: "pizzas/spinaci.jpg",
        name: "Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        soldOut:false
    }, 
    {
        picture: "pizzas/salamino.jpg",
        name: "Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        soldOut:false
    }, 
    {
        picture: "pizzas/margherita.jpg",
        name: "MArgerita",
        ingredients: "Tomato and mozarella",
        price: 10,
        soldOut:false
    }, 
    {
        picture: "pizzas/funghi.jpg",
        name: "Funghi",
        ingredients: "Tomato, mozarella, mushrooms",
        price: 12,
        soldOut:false
    }, 
    {
        picture: "pizzas/prosciutto.jpg",
        name: "Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        soldOut:false
    }

]


function Header() {
    return (
        <div className="header">
            <h1 style={{fontSize: "48px", textTransform: "uppercase"}}>Fyrdiana's Pizza Co.</h1>;
            <h2>Our Menu</h2>
            <h3>Authentic Italian cuisine, all from our stove oven</h3>
        </div>
    )
};

function Pizza ({name, picture, ingredients, price, soldOut}) {
    return (
        <div className="pizza">
            <img src={picture} alt={name}/>
            <h2>{name}</h2>
            <p>{ingredients}</p>
            <p>{soldOut ? "Sold Out" : `$${price}`}</p>
        </div>
    );
};

function Menu() {
    return (
        <div className="menu">
            {pizzaData.map((pizza, index) => (
                <Pizza
                    key={index}
                    picture={pizza.picture}
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                />
            ))}
        </div>
    );
};
       

function App(){
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
            <Button />
        </div>
    );
};


function Footer() {
    let currentTime = new Date().getHours();
    return (
        <footer className="footer">
        {currentTime >= 10 && currentTime< 22 ? "We're currently open" : "Sorry, we're closed"}
        </footer>
        );
    
};

function Button(){
    const handleClick = () => {
        alert("Redirecting you to order page...")
    };

    return (
        <button className="btn" onClick={handleClick}>Order Now</button>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
