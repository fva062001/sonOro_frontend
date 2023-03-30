import { Inter } from "next/font/google";
import Header from "@/components/Header";
import PersonCard from "@/components/PersonCard";
import Classifier from "@/components/Classifier";

import personTest from "../../public/personTest.jpeg";
import personTest1 from "../../public/personTest1.jpeg";
import personTest2 from "../../public/personTest2.jpeg";
import Modal from "@/components/Modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="w-full h-[55vh] relative">
        <Header></Header>
      </header>
      <div className="flex flex-row space-x-4 mb-4">
        <main className="flex flex-col w-fit ml-2 space-y-4">
          <PersonCard
            image={personTest}
            description={
              <p className="text-[#bebebe] w-[90%]">
                <span className="text-[#9cddfe]">Fernando Valerio:</span> I'm
                the project manager of SonOro, I'm a frontend developer and
                ui/ux designer
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            }
            doing={"Frontend Developer, UI/UX"}
          />
          <PersonCard
            image={personTest1}
            description={
              <p className="text-[#bebebe] w-[90%]">
                <span className="text-[#9cddfe]">Alex Serafini:</span> I'm the
                Model Maker of SonOro, I'm a Backend developer and Data Analist
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            }
            doing={"Backend Developer"}
          />
          <PersonCard
            image={personTest2}
            description={
              <p className="text-[#bebebe] w-[90%]">
                <span className="text-[#9cddfe]">Oliver Castillo:</span> I'm the
                Model Trainer in SonOro, I'm a Backend developer and Data
                Analist
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            }
            doing={"Backend Developer, UI/UX"}
          />
        </main>

        <main className="w-full">
          <Classifier></Classifier>
          <div className="text-center border-[#606060] border-dashed mt-4 w-[99%] h-[32%]  border-[1px] rounded-2xl relative">
            <p className="absolute text-[#606060] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[70%]">
              Once upon a time, there was a talking dog named Biscuit. Biscuit
              was a very talented dog, but he had one problem: he couldn't stop
              chasing his tail. One day, Biscuit was chasing his tail so
              vigorously that he spun himself into a frenzy and ended up
              crashing into a tree. The tree was so surprised that it promptly
              dropped an apple on Biscuit's head. <br />
              <span className="font-bold">
                Copyright © 2023 Fernando Valerio
              </span>
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
