import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { 
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler,MDBCollapse,
  MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView 
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
          <header>
            <Router>
              <MDBNavbar color="bg-primary" fixed="top" expand="md" dark scrolling transparent>
                <MDBNavbarBrand href="#">
                  <strong>React CV</strong>
                </MDBNavbarBrand>
                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}

                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    
                    <MDBNavItem active>
                      <MDBNavLink to="#">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                      <MDBNavLink to="#">About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                      <MDBNavLink to="#">Contact</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active>
                      <MDBNavLink to="#">Portfolio</MDBNavLink>
                    </MDBNavItem>

                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
            </Router>

            <MDBView src="./assets/img/bghome.jpg">
              <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
                <h2>HomePage</h2>
                <MDBContainer>
                <h5>Officia id ullamco anim commodo nulla proident voluptate excepteur sit. Aliqua enim esse occaecat quis minim eiusmod et nulla. Magna aliqua consectetur veniam aliqua est ex fugiat nulla consectetur eu reprehenderit.</h5>
                </MDBContainer>
              </MDBMask>
            </MDBView>

          </header>

      </div>
    );
  }
}

export default Navbar;