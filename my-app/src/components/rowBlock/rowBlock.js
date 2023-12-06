import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md='6' className='mb-4'>
                {left}
            </Col>
            <Col md='6' className='mb-4'>
                {right}
            </Col>
        </Row>
    )
}
export default RowBlock;