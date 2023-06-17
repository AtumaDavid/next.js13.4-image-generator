"use client";
//we use a hook here and a hook is a client side feature. bootstrap navbar is also a client component.

import Link from "next/link";
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand as={Link} href="/">
            {/* <Link href="/">NextJS 13.4 Image Gallery</Link> */}
            NextJS 13.4 Image Gallery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-nav-bar">
            <Nav>
              <Nav.Link
                as={Link}
                active={pathname === "/static"}
                href="/static"
              >
                Static
              </Nav.Link>
              <Nav.Link
                as={Link}
                href="/dynamic"
                active={pathname === "/dynamic"}
              >
                Dynamic
              </Nav.Link>
              <Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>
                ISR
              </Nav.Link>
              <NavDropdown title="Topics" id="topics-dropdown">
                <NavDropdown.Item as={Link} href="/topics/health">
                  Health
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/topics/fitness">
                  Fitness
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/topics/coding">
                  Coding
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                as={Link}
                href="/search"
                active={pathname === "/search"}
              >
                Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}