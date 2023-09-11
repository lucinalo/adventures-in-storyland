import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export const StoryCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link to={link}>
        <div className="stor-imgbx">
          <img src={imgUrl} alt={title} className="rounded-image" />
          <div className="stor-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};
