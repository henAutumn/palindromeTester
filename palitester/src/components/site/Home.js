import React from 'react';
import { Jumbotron } from 'reactstrap';


const Home = () => {
        return(
            <div className = "main">
            <Jumbotron>
                <h1 className="display-3">Welcome to the Palin"DOME"</h1>
                <h3 className="lead">Test a word here to see if its a palindrome!</h3>
            </Jumbotron>
            </div>
        )
    };
export default Home;