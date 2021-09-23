import React from "react";
import { Container, Form } from "react-bootstrap";
import BeersList from "./BeersList";

class BeersPage extends React.Component {

        state = {
            searchedTerm: ""
        }

        handleChange = (e) => {
            this.setState({
                ...this.state,
                searchedTerm: e.target.value
            })

            
        }



    render() {


        return ( 
            <Container>
                <h1 className="text-center">Beers List</h1>
                    <Form.Group className="mb-3" controlId="search">
                        <Form.Label>Search for a beer</Form.Label>
                        <Form.Control onChange={this.handleChange} type="text" name="searchedTerm" />
                    </Form.Group>
                <BeersList searchedTerm={this.state.searchedTerm}/>
            </Container>
        );
    }
}

export default BeersPage;