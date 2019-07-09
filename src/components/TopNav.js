import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const TopNav = () => {
  const styles = {
    marginBottom: 40
  }

  return (
    <Navbar color="primary" dark expand="md" style={styles}>
      <NavbarBrand href="/">Reddit Clone</NavbarBrand>
    </Navbar>
  )
}

export default TopNav
