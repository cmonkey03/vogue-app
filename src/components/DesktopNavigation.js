import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HomepageHeading from './HomepageHeading';
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

const getWidth = () => {
 const isSSR = typeof window === 'undefined'

 return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopNavigation extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' header>
                  VogueApp
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item
                    as='a'
                    name='home'
                    active={activeItem==='home'}
                    onClick={this.handleClick}
                    >Home</Menu.Item>
                  <Menu.Item
                    as='a'
                    name='why us'
                    active={activeItem==='why us'}
                    onClick={this.handleClick}
                    >Why us</Menu.Item>
                  <Menu.Item
                    as='a'
                    name='contact us'
                    active={activeItem==='contact us'}
                    onClick={this.handleClick}
                    >Contact us</Menu.Item>
                  <Menu.Item
                    as='a'
                    name='login'
                    active={activeItem==='login'}
                    onClick={this.handleClick}
                    >Login</Menu.Item>
                  <Menu.Item>
                    <Button
                      as='a'
                      primary={fixed}
                      style={{ marginLeft: '0.5em' }}
                      name='support'
                      active={activeItem==='support'}
                      onClick={this.handleClick}
                      >
                      Support
                    </Button>
                  </Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopNavigation.propTypes = {
  children: PropTypes.node,
}

export default DesktopNavigation;
