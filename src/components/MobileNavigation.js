import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HomepageHeading from './HomepageHeading';
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class MobileNavigation extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  handleClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeItem } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
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
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button
                    as='a'
                    inverted
                    name='login'
                    active={activeItem==='login'}
                    onClick={this.handleClick}>
                    Login
                  </Button>
                  <Button
                    as='a'
                    style={{ marginLeft: '0.5em' }}
                    name='support'
                    active={activeItem==='support'}
                    onClick={this.handleClick}
                    >
                    Support
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileNavigation.propTypes = {
  children: PropTypes.node,
}

export default MobileNavigation;
