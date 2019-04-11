import React from 'react';
import {
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid inverted stackable columns={5}>
          <Grid.Row>
            <Grid.Column>
              <List link inverted>
                <List.Item as='a'>
                  <Icon name='phone'/>  +1 800 SERVE IT
                </List.Item>
                <List.Item as='a'>
                  <Icon name='mail' />  werkit@vogue.com
                </List.Item>
                <List.Item as='a'>
                  <Icon name='map marker'/>
                  Religious Ceremonies</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Company' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as='h4' content='Others' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List link inverted>
                <List.Item as='a'>
                  <Icon name='facebook'/>
                </List.Item>
                <List.Item as='a'>
                  <Icon name='youtube'/>
                </List.Item>
                <List.Item as='a'>
                  <Icon name='twitter'/>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer;
