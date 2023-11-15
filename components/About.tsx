"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Image,
  ScrollShadow,
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

export default function About() {
  const [isFollow, setIsFollow] = useState<boolean>(false);

  const handleFollow = () => {
    setIsFollow(!isFollow);
  };

  const notify = () =>
    toast.info("We'll have more info about your dream car soon!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div
        className="w-full h-[160vh] my-10 mt-20 flex flex-col pt-[5%]"
        id="about"
      >
        <div className="w-[100%] p-5 flex gap-[5%]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="flex relative xl:w-8/12 h-fit bg-white/10 rounded-lg p-8 backdrop-blur-sm backdrop-filter shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-6/5 rounded "
            >
              <Image
                isZoomed
                isBlurred
                src="https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
                alt="cars section"
                className="hidden sm:flex rounded-lg w-[1200px] h-[300px]"
              />
            </motion.div>
            <div className="flex flex-col pl-5">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-6/5 rounded "
              >
                <Image
                  isZoomed
                  isBlurred
                  src="https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
                  alt="cars section"
                  className="xl:hidden mb-6 rounded-lg w-[1200px] h-[300px]"
                />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl"
              >
                Find the Best Cars that you ever seen
              </motion.h1>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-5 text-gray-600"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid, commodi minima. Error velit perspiciatis enim. Neque
                dolorum ullam quae ea delectus velit, <br /> consequuntur
                tenetur in reprehenderit excepturi aperiam natus aliquid? Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Sit aperiam
                libero, voluptatibus nulla ducimus natus rem corrupti excepturi
                possimus numquam sint ullam aspernatur est distinctio quia,
                voluptate recusandae laboriosam doloribus!
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="w-full flex justify-end pt-8"
              >
                Written by: Francisco de Miranda
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="pr-12 hidden sm:flex"
          >
            <ScrollShadow className="w-[400px] h-[350px] ">
              <motion.span className="text-gray-600">
                <h1 className="text-xl font-bold">About our Cars</h1>
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, molestias odio id quis nulla sint facere quaerat.
                Facere laboriosam dolor ut autem officiis? Pariatur a eos nobis
                sit beatae alias? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Repudiandae recusandae dignissimos praesentium
                facere commodi veniam eligendi ut. Voluptatibus incidunt.
                <br />
                <br />
                <h1 className="text-xl font-bold">Vision</h1>
                <br />
                doloribus blanditiis commodi facilis harum ad laborum magni,
                impedit illum aliquam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur, molestias odio id quis nulla
                sint facere quaerat. Facere laboriosam dolor ut autem officiis?
                Pariatur a eos nobis sit beatae alias? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Repudiandae recusandae
                dignissimos praesentium facere commodi veniam eligendi ut.
                Voluptatibus incidunt, doloribus blanditiis commodi facilis
                harum ad laborum magni, impedit illum aliquam. Lorem ipsum dolor
                sit amet
                <br />
                <br />
                <h1 className="text-xl font-bold">Memberships</h1>
                <br />
                consectetur adipisicing elit. Consequuntur, molestias odio id
                quis nulla sint facere quaerat. Facere laboriosam dolor ut autem
                officiis? Pariatur a eos nobis sit beatae alias? Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Repudiandae
                recusandae dignissimos praesentium facere commodi veniam
                eligendi ut. Voluptatibus incidunt, doloribus blanditiis commodi
                facilis harum ad laborum magni, impedit illum aliquam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
                molestias odio id quis nulla sint facere quaerat. Facere
                laboriosam dolor ut autem officiis? Pariatur a eos nobis sit
                beatae alias? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Repudiandae recusandae dignissimos praesentium
                facere commodi veniam eligendi ut. Voluptatibus incidunt,
                doloribus blanditiis commodi facilis harum ad laborum magni,
                impedit illum aliquam.
                <br />
                <br />
                <h1 className="text-xl font-bold">Ubication</h1>
                <br />
                <ul>
                  <li>- USA, Miami, Pompano Beach📍</li>
                  <li>- Canada, Vancouver, East 5 📍</li>
                  <li>- Argentina, Mar de Plata, calle 45 📍</li>
                  <li>- Colombia, Medellin, Antioqua 📍</li>
                  <li>- Venezuela, Caracas, Av. La estrella 📍</li>
                </ul>
                <br />
              </motion.span>
            </ScrollShadow>
          </motion.div>
        </div>
        <>
          {" "}
          <div className="w-full h-[120vh] sm:h-[80vh] flex relative items-center justify-around mt-[10%]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // transition={{ delay: 0.1 }}
              className="flex w-full sm:w-5/12 items-center justify-center gap-12 pl-20 pr-5 sm:pr-0"
            >
              <div className="flex flex-col items-center gap-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="w-20 sm:w-40 h-20 sm:h-40 text-large shadow-xl"
                  />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="font-bold text-gray-600 text-sm sm:text-base"
                >
                  Mke Smitch
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    onClick={handleFollow}
                    className="backdrop-blur-sm backdrop-filter bg-blue-500/40 text-white hover:text-black-100/80 hover:bg-gray-200/40"
                  >
                    {isFollow ? "Unfollow" : "Follow +"}
                  </Button>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className=" text-sm sm:text-base"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ut consequatur ullam praesentium delectus
                voluptatum fuga, alias possimus reiciendis dolor rerum odit!
                Numquam error commodi quam dolor, rerum repellat maiores?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus, ut consequatur ullam praesentium delectus
                voluptatum fuga, alias possimus reiciendis dolor rerum odit!
                Numquam error commodi quam dolor, rerum repellat maiores? Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </motion.p>
            </motion.div>
            

            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              // transition={{ delay: 1 }}
              className="hidden sm:flex flex-col gap-2 items-center"
            >
              <Card
                isFooterBlurred
                className="w-full h-[300px] mr-[70%] col-span-12 sm:col-span-7"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-black/60 uppercase font-bold">
                    Your day your way
                  </p>
                  <h4 className="text-black/90 font-medium text-xl">
                    Your checklist for better sleep
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  isZoomed
                  isBlurred
                  alt="porsche car background"
                  className="z-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="tesla logo"
                      className="rounded-full w-10 h-11 bg-black"
                      src="https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/90">CarsHub App</p>
                      <p className="text-tiny text-white/60">
                        Get a good days with your dream Car.
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm" onClick={handleScroll}>
                    View Car
                  </Button>
                </CardFooter>
              </Card>
              <motion.div
                // initial={{ opacity: 0, scale: 0, y: -50, x: -50 }}
                whileInView={{ opacity: 0.5, scale: 0.8, y: 0, x: 0 }}
                whileHover={{ scale: 1.1, opacity: 1, y: 20, x: 60 }}
                // transition={{ duration: 0.2 }}
                className="shadow-xl rounded-xl"
              >
                <Card isFooterBlurred radius="lg" className="w-auto h-50">
                  <Image
                    isBlurred
                    alt="Woman listing to music"
                    className="object-contain"
                    height={300}
                    src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    width={300}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">Available soon.</p>
                    <Button
                      className="text-tiny text-white bg-black/20"
                      variant="flat"
                      color="default"
                      radius="lg"
                      size="sm"
                      onClick={notify}
                    >
                      Notify me
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </>
      </div>
    </>
  );
}
