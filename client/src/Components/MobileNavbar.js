"use client";
import { APP_NAME } from "@/lib/constants";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Drawer from "../ui/drawer";
import { FadeImg } from "./fadeImg";
import LinkItem from "./LinkItem.js";
import { ContactComponent } from "../shared/contact";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div className="block md:hidden w-full">
      <Drawer
        isOpen={isOpen}
        className="!bg-white h-screen overflow-x-hidden overflow-y-scroll p-10  md:p-0 block md:hidden"
      >
        <Link className="items-center gap-x-2 flex" href="/">
          <FadeImg
            src="./icons/close.svg"
            className="w-6 h-6 cursor-pointer text-white !mt-4"
            onClick={() => setIsOpen(false)}
          />
        </Link>
        <div className="flex flex-col h-full pb-5 bg-white">
          <div className="w-full h-full flex flex-col items-start mt-9">
            <LinkItem setIsOpen={setIsOpen} isMobile href="/">
              Home
            </LinkItem>
            <LinkItem setIsOpen={setIsOpen} isMobile href="/about">
              Who We Are
            </LinkItem>
            <LinkItem setIsOpen={setIsOpen} isMobile href="/services">
              Our Services
            </LinkItem>
            <LinkItem setIsOpen={setIsOpen} isMobile href="/properties">
              Our Properties
            </LinkItem>
            <LinkItem setIsOpen={setIsOpen} isMobile href="/contact">
              Contact us
            </LinkItem>
            <ContactComponent />
          </div>
        </div>
      </Drawer>
      <div
        className="w-full flex items-center  justify-between py-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FadeImg src="/logo-primary.png" alt={APP_NAME} className="w-32" />
        <Button
          variant={"outline"}
          className="border-none p-1 md:hidden"
          size={"icon"}
        >
          <FadeImg
            src="/icons/menu.svg"
            alt={"menu"}
            className="aspect-square w-[22px]"
          />
        </Button>
      </div>
    </div>
  );
};

export default Mobile;
