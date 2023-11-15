"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomButton from "./CustomButton";
import Login from "./Login";
import Register from "./Register"

export default function NavBarUI() {
  const [open, setOpen] = useState(false);
  const handleOpenChange = () => {
    setOpen(!open);
  };
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
      <Link color="foreground" href="#">
      Cars
      </Link>
      </NavbarItem>
      <NavbarItem isActive>
      <Link href="#" aria-current="page">
      Users
      </Link>
      </NavbarItem>
      <NavbarItem>
      <Link color="foreground" href="#">
      Form
      </Link>
      </NavbarItem>
    </NavbarContent> */}
      <NavbarContent justify="end">
        <NavbarItem>
          {/* <Link href="#">Login</Link> */}
          {/* <Login title="Login" isOpen={open} openChange={handleOpenChange}/> */}
          <Login/>
        </NavbarItem>
        <NavbarItem>
          {/* <Button as={Link} href="#" variant="flat">
            Sign Up
          </Button> */}
          {/* <CustomButton
            title="Sign Up"
            btnType="button"
            containerStyles="ml-5 bg-blue-500 text-white hover:text-black hover:bg-gray-200"
            // handleClick={handleScroll}
          /> */}
          <Register/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
