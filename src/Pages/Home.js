import React, {Component, Fragment} from 'react';

import {Container, Row, Card, Button, Col, Placeholder, Stack} from 'react-bootstrap';

import CarouselBox from '../Components/CarouselBox';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <CarouselBox/>
        <Container>
          <h2 className="text-center m-4">
            Our team
          </h2>
          <Row
            md="3"
            className="home__row"
          >
            <Card
              className="home__card"
            >
              <Card.Img
                className="home__card-img"
                variant="bottom"
                src="https://images.pexels.com/photos/1595386/pexels-photo-1595386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>
                  UI/UX Designers
                </Card.Title>
                <Card.Text>
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                </Card.Text>
                <Button variant="primary"> About team </Button>
              </Card.Body>
            </Card>

            <Card className="home__card">
              <Card.Img
                className="home__card-img"
                variant="bottom"
                src="https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <Card.Body>
                <Card.Title>
                  QA Engineers
                </Card.Title>
                <Card.Text>
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                </Card.Text>
                <Button variant="primary"> About team </Button>
              </Card.Body>
            </Card>

            <Card className="home__card">
              <Card.Img
                className="home__card-img"
                variant="bottom"
                src="https://images.pexels.com/photos/3183190/pexels-photo-3183190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>
                  Developers
                </Card.Title>
                <Card.Text>
                  "At vero eos et accusamus et iusto odio dignissimos ducimus
                  qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                </Card.Text>
                <Button variant="primary"> About team </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Fragment>
    );
    }
}