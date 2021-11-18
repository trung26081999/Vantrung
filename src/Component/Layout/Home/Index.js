import React, { Component } from 'react';
import Menu from'./Menu';
import Container from'./Container';
import Container_2 from'./Container_2';
import Container_3 from'./Container_3';
import Animate from'./Animate';
import Blog from'./Blog';
import Footer from './Footer';
import Section from './Section';


class Index extends Component {
    render() {
        return (
            <>
            <Menu/>
          <Container></Container>
          <Section></Section>
          <Container_2></Container_2>
          <Container_3></Container_3>
          <Animate></Animate>
          <Blog></Blog>
          <Footer></Footer>
            </>
        );
    }
}

export default Index;