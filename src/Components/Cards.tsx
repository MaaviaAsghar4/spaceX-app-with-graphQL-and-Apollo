import React from "react";
import { Card, Button, Container, Row, Col, CardGroup,Spinner } from "react-bootstrap";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_SPACEX_DETAILS = gql`
  query getDetails {
    launches {
      id
      launch_success
      launch_year
      mission_name
      rocket {
        rocket_name
      }
      links {
        flickr_images
      }
    }
  }
`;

interface rocketType {
  rocket_name: string;
}

interface linkType {
  flickr_images: string;
}

interface launchType {
  id: number;
  launch_success: boolean;
  launch_year: number;
  mission_name: string;
  rocket: rocketType;
  links: linkType;
}

const Cards: React.FC<{}> = () => {
  const { loading, error, data } = useQuery(GET_SPACEX_DETAILS);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  if (error) return <h1>Error...</h1>;

  const { launches } = data;
  return (
    <>
      <Container>
        <Row>
          <CardGroup className="d-flex flex-wrap justify-content-around">
            {launches?.map((launch: launchType) => {
              return (
                <Col sm={6} md={4} key={launch.id} className="mb-3">
                  <Card className="bg-dark">
                    <Card.Img
                      variant="top"
                      src={launch.links.flickr_images[0]}
                      width={200}
                      height={200}
                    />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1.4rem" }}>
                        <strong>{launch.mission_name}</strong>
                      </Card.Title>
                      <Card.Text style={{ fontSize: "1rem" }}>
                        Rocket Used:{" "}
                        <strong>{launch.rocket.rocket_name}</strong>
                      </Card.Text>
                      <Card.Text style={{ fontSize: "1rem" }}>
                        Launch Year: <strong>{launch.launch_year}</strong>
                      </Card.Text>
                      <Card.Text style={{ fontSize: "1rem" }}>
                        Launch Success:{" "}
                        <strong>{launch.launch_success ? "Yes" : "No"}</strong>
                      </Card.Text>
                      <Button variant="primary">
                        <Link
                          style={{ listStyle: "none", color: "#f7f7f7" }}
                          to={`/${launch.id}`}
                        >
                          View More
                        </Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </CardGroup>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
