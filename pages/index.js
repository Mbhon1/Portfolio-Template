import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Head>
        <title>Mbhoni Portfolio</title>
        <meta
          name="description"
          content="A portfolio website that represents Mbhoni Baloyi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar toggleSidebar={toggleSidebar} name="Mbhoni Baloyi" />
      </header>

      <main className={`${inter.className}`}>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Hero
          titl="I'm Gypsy King"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              eligendi ex dicta tenetur magnam ipsam, deserunt eum dolorum,
              animi, magni repellat earum delectus? Cum voluptatum nemo, nisi
              illo quos perspiciatis."
        />
        <About
          date="29.10.1997"
          tertiary="Rosebank College"
          website="www.gypsy.com"
          interests="Reading and Blogging"
          street="11803 Maseli Street"
          title="I'm Gypsy and a Fontend Developer"
          description="Hi my name is Gypsy King. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quis sapiente cupiditate repudiandae alias minus
              incidunt nihil aspernatur culpa vel id!"
        />
        <WhatIDo />
        <Skills
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              aspernatur, in distinctio modi velit architecto. Numquam corrupti
              itaque, necessitatibus sapiente excepturi quos saepe sit laboriosam."
          skill1="Next.js"
          skill2="HTML"
          skill3="JavaScript"
          skill4="React"
          skill5="Tailwind CSS"
        />
        <Work />
        <Contact />
        <Footer date="2023" rights="All Rigths reserved." />
      </main>
    </>
  );
}
