import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "DIVISION",
    icon: "bi bi-house-door-fill",
    color: "primary",
    date: "PT.",
  },
  {
    title: "Cardiology",
    icon: "bi bi-heart-pulse",
    color: "info",
    date: "247",
  },
  {
    title: "Neurology",
    icon: "bi bi-hdd",
    color: "danger",
    date: "184",
  },
  {
    title: "Surgery",
    icon: "bi bi-scissors",
    color: "success",
    date: "86",
  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5" style={{borderBottom:"1px solid grey"}}>Patients By Division</CardTitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
