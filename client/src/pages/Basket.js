import React from 'react';
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import empty from "../assets/empty.png"


const Basket = () => {

    return (
        <Container style={{background : 'lightcyan', fontSize: 24, width: 600, height: 600}} className="mt-5  justify-content-center align-items-center">
            <div>
                <h1 style={{width: 600, height: 600, marginLeft:120,}}>Your cart is empty
                </h1>
            </div>

        </Container>
    );
};

export default Basket;