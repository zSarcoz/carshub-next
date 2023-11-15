"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Tooltip,
} from "@nextui-org/react";
import UserLogo from "../public/user-logo.svg";
// import { LoginProps } from "../types";
import { MailIcon } from "../public/icons/UserIcon";
import { EyeFilledIcon } from "@/public/icons/EyePassIcon";
import { EyeSlashFilledIcon } from "@/public/icons/EyeSlashPassIcon";
// import {LockIcon} from './LockIcon.jsx';

// export default function Login({isOpen, openChange, onOpen, title, containerStyles}:LoginProps) {
export default function Login() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log("🚀 ~ file: Register.tsx:27 ~ Login ~ isOpen:", isOpen);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [terms, setTerms] = useState(false);

//   const handleTerms = () => {
//     if (isOpen === true) {
//       terms ? setTerms(false) : setTerms(true);
//       console.log(terms, "aaaaa");
//     } else if (isOpen === false) {
//       setTerms(false);
//     }
//   };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Button
        onPress={()=>{onOpen(),setTerms(false)}}
        color="primary"
        className="bg-transparent text-blue-500 font-blod"
      >
        Sign Up
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        className="shadow-xl"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              scale: 0.6,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  //   endContent={
                  //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  //   }
                  label="Name"
                  placeholder="Enter your Name"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  //   endContent={
                  //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  //   }
                  label="Lastname"
                  placeholder="Enter your Lastname"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  //   endContent={
                  //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  //   }
                  label="Phone Number"
                  placeholder="Enter your Phone Number"
                  variant="bordered"
                />
                <Input
                  autoFocus
                  //   endContent={
                  //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  //   }
                  label="Email"
                  placeholder="Enter your Email"
                  variant="bordered"
                />
                <Input
                  label="Password"
                  variant="bordered"
                  placeholder="Enter your password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-lg"
                />
                <div className="flex py-2 px-1 justify-center">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                    onClick={()=>{setTerms(!terms)}}
                  >
                    I accept the terms and conditions
                  </Checkbox>
                  {/* <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link> */}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={()=>{onClose(),setTerms(false)}}>
                  Close
                </Button>

                <Button
                  color="primary"
                  onPress={()=>{onClose(),setTerms(false)}}
                  isDisabled={terms === false}
                >
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
