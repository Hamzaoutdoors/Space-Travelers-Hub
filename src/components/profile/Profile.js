import { Container, Row, Col } from 'react-bootstrap';
import MyRockets from './MyRockets';
import MyMissions from './MyMissions';

const Profile = () => (
  <Container>
    <Row className="mx-auto">
      <Col xs={12} md={5}><MyRockets /></Col>
      <Col xs={12} md={{ span: 5, offset: 2 }}><MyMissions /></Col>
    </Row>
  </Container>
);

export default Profile;
