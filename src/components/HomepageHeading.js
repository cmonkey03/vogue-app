import PropTypes from 'prop-types';
import React from 'react';
import {
  Button,
  Grid,
  Header,
  Search
} from 'semantic-ui-react';

/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
* such things.
*/

const HomepageHeading = ({ mobile }) => (
  <React.Fragment>
    <Header
      as='h1'
      content='The Vogue Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Learn death drops in no time!'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  <Grid centered>
      <Grid.Row>
        <Grid.Column>
        <Search placeholder='Find new moves'/>
        </Grid.Column>
        <Grid.Column>
        <Button primary size='huge'>
          Find new moves
        </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </React.Fragment>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;
