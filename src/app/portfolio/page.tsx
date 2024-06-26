import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/button";

const Portfolio = () => {
  return (
    <div className="p-2">
      <h1>PORTFOLIO</h1>
      <p>Featured collection of my work. All illustrations used in the below projects are my own original creations.</p>
      <br />
      <Button>
        <a
          href="Jessica Chiu - Creative Portfolio.pdf"
          target="_blank"
          rel="noreferrer"
          className="my-1 px-2 border-orange-300 border-2 border-dotted hover:border-black"
        >
          Open My Creative Portfolio (PDF) ↗
        </a>
      </Button>
      <br />
      <hr />
      <div className="flex flex-col">
        <h2>Webpage - Blue Days Podcast</h2>
        <p className="pb-4">
          Mental health podcast landing page. Bold, minimal, and modern.
          <br /><br />
          Built using HTML, CSS, Javascript, Bootstrap, and JQuery. 
        </p>
        <Image
          src="/images/blue-days-preview.png"
          alt="Text that says Jessica Q Chiu - developer and illustrator and an image of a home, baba yaga's hut"
          width={675}
          height={750}
          className="border-2 border-blue-600"
        />
        <div className="flex row mt-2 mb-4">
          <Link
            href="https://blue-days.vercel.app/"
            className="mr-2 border-white dark:border-zinc-900 border-2 border-dotted hover:border-black dark:hover:border-white"
          >
            <Button>Live Demo</Button>
          </Link>
          <Link
            href="https://github.com/JessicaQChiu/podcast-website"
            className="border-white dark:border-zinc-900 border-2 border-dotted hover:border-black dark:hover:border-white"
          >
            <Button>Source Code</Button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <h2>Game - Ladybug Jumper</h2>
        <p className="py-4">
          2D platformer game created to learn how to program basic game mechanics and logic.
          <br /><br />
          Built using HTML, CSS, and Javascript.
        </p>
        <Image
          src="/images/ladybug-jump-preview.png"
          alt="Text that says Jessica Q Chiu - developer and illustrator and an image of a home, baba yaga's hut"
          width={675}
          height={750}
          className="border-2 border-orange-200"
        />
        <div className="flex row mt-2 mb-4">
          <Link
            href="https://jessicaqchiu.github.io/ladybug-jumper-game/"
            className="mr-2 border-white dark:border-zinc-900 border-2 border-dotted hover:border-black dark:hover:border-white"
          >
            <Button>Live Demo</Button>
          </Link>
          <Link
            href="https://github.com/JessicaQChiu/ladybug-jumper-game"
            className="border-white dark:border-zinc-900 border-2 border-dotted hover:border-black dark:hover:border-white"
          >
            <Button>Source Code</Button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <h2>Website - Portfolio</h2>
        <p className="py-4">
          Inspired by neubrutalism and the Windows 98 interface. Original pixel art and icons.
          <br /><br />
          Built using React, Next.js, Tailwind CSS, and TypeScript.
        </p>
        <Image
          src="/images/landing-img.png"
          alt="Text that says Jessica Q Chiu - developer and illustrator and an image of a home, baba yaga's hut"
          width={675}
          height={750}
          className="bg-blue-200 dark:bg-teal-600 border-2 border-black dark:border-white"
        />
        <div className="flex row mt-2 mb-4">
          <Link
            href="https://jessicaqchiu.vercel.app/"
            className="mr-2 border-white dark:border-zinc-900 border-2 border-dotted hover:border-black dark:hover:border-white"
          >
            <Button>Live Demo</Button>
          </Link>
          <Link
            href="https://github.com/JessicaQChiu/jessica-q-chiu-portfolio"
            className="border-white dark:border-zinc-900 border-2 border-dotted hover:border-black dark:hover:border-white"
          >
            <Button>Source Code</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
