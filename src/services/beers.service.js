import axios from 'axios';

class BeersService {
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
        })
    }

    getBeers = () => this.instance.get("/");
    getOneBeer = (id) => this.instance.get(`/${id}`);
    getRandomBeer = () => this.instance.get("/random");
    createBeer = (beer) => {return this.instance.post("/new", beer)};
    searchBeer = (searchTerm) => this.instance.get(`/search?q=${searchTerm}`);

}

export default BeersService;