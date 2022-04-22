import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

function Navi() {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/">무한루프 코딩</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" href="/Mogako">모각코</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" href="/detail">스터디</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    운영진
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default Navi;