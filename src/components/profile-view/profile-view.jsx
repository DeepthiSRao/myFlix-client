import React from 'react';
import { Row, Col } from 'react-bootstrap';
import UpdateUser from './update-user';
import UserInfo from './user-info';

const ProfileView = ({user}) => {
    return (
        <Row>
            <Col xs={12} sm={4}>
                <UserInfo name={user.Username} email={user.Email} />
            </Col>
            <Col xs={12} sm={8}>
                <UpdateUser user={user} />
            </Col>
        </Row>
    );
}
 
export default ProfileView;