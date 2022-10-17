import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Portfolio() {
    const projects = [
        {
            name: "Eat Your Luck",
            info: "Test your luck and see what's for dinner!",
            image: "./card_back.png",
            deployed: "https://lillielovatt.github.io/eat-your-luck/",
            githubRepo: "https://github.com/lillielovatt/eat-your-luck",
        },
        {
            name: "Smorgasbord",
            info: "Order food from your favorite (fake) restaurants!",
            image: "./Smorgasbord.png",
            deployed: "https://sleepy-headland-09400.herokuapp.com/",
            githubRepo: "https://github.com/LDagnese/smorgasbord",
        },
        {
            name: "Genu",
            info: "A restaurant without a website isn't right! Build one with Genu today.",
            image: "./restaurant.jpeg",
            deployed: "https://codetrip-33a81.web.app/",
            githubRepo: "https://github.com/Hephaestus01/codetrip-project-3",
        },
        {
            name: "Weather Forecaster",
            info: "How's this rain treating you? Never fail at small talk again with Weather Forecaster.",
            image: "./Meteorology.jpeg",
            deployed: "https://lillielovatt.github.io/weather-forecast-api/",
            githubRepo: "https://github.com/lillielovatt/weather-forecast-api",
        },
        {
            name: "Pizza Hunt",
            info: "Fight it out online about the ultimate dividing topic: pizza toppings.",
            image: "./pizza.png",
            deployed: "https://rocky-basin-44388.herokuapp.com/",
            githubRepo: "https://github.com/lillielovatt/pizza-hunt",
        },
        {
            name: "Zookeeper",
            info: "Check out all the animals in the zoo's database.",
            image: "./zoo.png",
            deployed: "https://evening-headland-92865.herokuapp.com/",
            githubRepo: "https://github.com/lillielovatt/zookeeper",
        },
    ];
    return (
        <div className="row">
            {projects.map((project) => (
                <div className="col-sm-4" key={project.name}>
                    <Card id="card-body">
                        <Card.Img
                            variant="top"
                            src={require(`${project.image}`)}
                            id="card-image"
                        />
                        <Card.Body>
                            <Card.Title className="fw-bold text-uppercase">
                                {project.name}
                            </Card.Title>
                            <Card.Text>{project.info}</Card.Text>
                            <a href={project.githubRepo} target="_blank">
                                <Button variant="primary">
                                    GitHub repository
                                </Button>
                            </a>
                            <br></br>
                            <a href={project.deployed} target="_blank">
                                <Button variant="primary">Deployed site</Button>
                            </a>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
}
