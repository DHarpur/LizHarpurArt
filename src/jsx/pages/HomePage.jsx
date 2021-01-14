import React, { Fragment } from 'react';
import { Header, Segment, Image } from 'semantic-ui-react';
import sample1 from '../../images/sample1.jpg';

const titleStyle = {
    paddingTop: 20,
}

const segmentStyle = {
    width: '75%',
    margin: 'auto', 
    paddingBottom: 50
}

const HomePage = () => {
    return (
        <Fragment>
            <Header textAlign='left' style={titleStyle} as='h1'>
                Welcome to Liz Harpur's Art Website!!!
            </Header>
            <div style={segmentStyle}>
                <Segment inverted attached='bottom'>
                    <Image src={sample1} size='huge' />
                </Segment>
            </div>
        </Fragment>
    );
}

export default HomePage;