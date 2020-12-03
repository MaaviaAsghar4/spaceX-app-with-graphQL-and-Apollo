import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import {
  Badge,
  Container,
  Row,
  Col,
  Image,
  Card,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import "../App.css";

const GET_MISSION_DETAIL = gql`
  query getMissionDetail($id: ID!) {
    launch(id: $id) {
      details
      launch_site {
        site_name
      }
      launch_success
      launch_year
      links {
        flickr_images
        wikipedia
        video_link
      }
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

const CardDetail: React.FC<{}> = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_MISSION_DETAIL, {
    variables: { id },
  });
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  if (error) return <h1>{JSON.stringify(error)}...</h1>;

  const { launch } = data;

  return (
    <>
      {
        <div>
          <h1 className="text-center">
            <Badge variant="primary">{launch.mission_name}</Badge>
          </h1>
          <Container className="d-flex flex-wrap justify-content-around">
            <Row>
              {launch.links.flickr_images.map(
                (images: string, index: number) => {
                  return (
                    <Col sm={6} md={6} key={index} className="text-center mb-3">
                      <Image src={images} rounded height={200} width={300} />
                    </Col>
                  );
                }
              )}
            </Row>
          </Container>
          <Card className="bg-dark ml-3 mb-3 mr-3">
            <Card.Header>Launch Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item variant="dark">
                Launch Year: <strong>{launch.launch_year}</strong>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Launch Success: 
                <strong>
                  {launch.launch_success ? " Successful" : " Failed"}
                </strong>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Launch Site: <strong>{launch.launch_site.site_name}</strong>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Rocket Name: <strong>{launch.rocket.rocket_name}</strong>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Rocket Type: <strong>{launch.rocket.rocket_type}</strong>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <strong>Details:</strong> <br /> {launch.details}
              </ListGroup.Item>
            </ListGroup>
            <Card.Link className="link-btn2" href={launch.links.wikipedia}>
              Read on wikipedia
            </Card.Link>
            <Card.Link className="link-btn2" href={launch.links.video_link}>
              Watch Video
            </Card.Link>
            <Link to="/" className="link-btn">
              Back
            </Link>
          </Card>
        </div>
      }
    </>
  );
};

export default CardDetail;
