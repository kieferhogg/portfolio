import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script'
import { useEffect, useState } from "react";


const Home: NextPage = () => {
  // on page scroll hide arrow
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Kiefer Hogg</title>
        <meta content="Kiefer Hogg" property="og:title" />
        <meta name="description" content="Hello, I am Kiefer" />
        <meta content="Hello, I am Kiefer" property="og:description" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta content="/images/favicon.png" property="og:image" />
        <meta content="https://www.kieferhogg.com" property="og:url" />
        <meta content="#0a0a05" data-react-helmet="true" name="theme-color" />
      </Head>
      <nav className="flex-row justify-start w-20 m-2 h-screen fixed top-0 left-0 hidden md:flex z-10 text-husqy-textColor">
        <ul className="flex flex-col items-center w-full mt-4">
          <li className="flex flex-row justify-center items-center w-full my-2 bg-black hover:bg-[#454545] rounded-xl border border-husqy-textColor">
            <Link href="/#home" scroll={false}>
              <p className="flex flex-row justify-center items-center w-full h-full py-2">
                <Image src="/images/favicon.png" alt="Home" className="w-8 h-8" width={32} height={32} />
                iefer
              </p>
              <p className="flex flex-row justify-center items-center w-full h-full py-2">
                Hogg
              </p>
            </Link>
          </li>
          <li className="flex flex-row justify-center items-center w-full my-2 bg-black hover:bg-[#454545] rounded-xl border border-husqy-textColor">
            <Link href="/#portfolio" scroll={false}>
              <p className="flex flex-row justify-center items-center w-full h-full py-2">
                Portfolio
              </p>
            </Link>
          </li>
          <li className="flex flex-row justify-center items-center w-full my-2 bg-black hover:bg-[#454545] rounded-xl border border-husqy-textColor">
            <Link href="/#contact" scroll={false}>
              <p className="flex flex-row justify-center items-center w-full h-full py-2">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col justify-center w-full flex-1 ml md:ml-24 md:pr-28 text-center relative z-10 text-husqy-textColor">
        <div id="home" className="flex flex-col w-full h-screen p-8 md:pt-24 text-left">
          <h1 className="text-6xl pb-3 font-bold break-words" data-value="Hello World,">Hello World,</h1>
          <h1 className="text-6xl pb-3 font-bold break-words" data-value="I'm Kiefer">{"I'm Kiefer"}</h1>
          <h2 className="text-4xl pb-3 break-words" data-value="Full-Stack Web Developer">Full-Stack Web Developer</h2>
          <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity animate-bounce ease-out duration-700 ${scroll ? "opacity-0" : "opacity-100"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <h3 id="portfolio" className="text-2xl font-bold pb-3 mt-8" data-value="My Portfolio">
            My Portfolio
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center w-3/4 m-4 rounded-xl text-left">
            <div>
              <div className="flex flex-row justify-between">
                <Link
                  href="https://interviewpal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row mb-3"
                >
                  <h3 className="text-2xl font-bold hover:text-husqy-mainColor" data-value="InterviewPal">InterviewPal</h3>
                  <Image src="/images/link-solid.svg" alt="Link" className="w-8 h-8 ml-2 p-0.5 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor" width={32} height={32} />
                </Link>
                <Link
                  href="https://github.com/InterviewPal/InterviewPal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row"
                >
                  <Image src="/images/github.svg" alt="Github" className="w-8 h-8 ml-2 p-0.5 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor" width={32} height={32} />
                </Link>
              </div>
              <Image src="/images/InterviewPal.png" alt="InterviewPal" className="w-3/4 m-auto rounded-lg" width={640} height={360} />
              <div className="flex flex-row flex-wrap mt-4">
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  Next.Js
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  TailwindCSS
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  TypeScript
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  GPT-3.5
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  Redis
                </p>
              </div>

              <p className="text-l py-3">
                {"On InterviewPal , I played a crucial role in creating a seamless and user-friendly experience for job seekers. Leveraging my skills in front-end development, I brought the InterviewPal platform to life by designing intuitive pages that enable users to practice for their interviews with ease. Through my contributions, users can now benefit from the cutting-edge GPT-3.5 technology that powers the platform, receiving personalized feedback on their answers to common interview questions. With my focus on delivering a top-notch user experience, I am proud to have played a pivotal role in making InterviewPal a valuable tool for job seekers everywhere."}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-3/4 m-4 rounded-xl text-left">
            <div>
              <div className="flex flex-row justify-between">
                <Link
                  href="https://word-gotchu.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row w-min mb-3"
                >
                  <h3 className="text-2xl font-bold hover:text-husqy-mainColor" data-value="WordGotchu">WordGotchu</h3>
                  <Image src="/images/link-solid.svg" alt="Link" className="w-8 h-8 ml-2 p-0.5 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor" width={32} height={32} />
                </Link>
                <Link
                  href="https://github.com/iantelli/word-gotchu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row"
                >
                  <Image src="/images/github.svg" alt="Github" className="w-8 h-8 ml-2 p-0.5 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor" width={32} height={32} />
                </Link>
              </div>
              <Image src="/images/WordGotchu.png" alt="WordGotchu" className="w-3/4 m-auto rounded-lg" width={640} height={360} />
              <div className="flex flex-row flex-wrap mt-4">
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  JavaScript
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  CSS/HTML
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  Express
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  Firebase
                </p>
              </div>
              <p className="text-l py-3">
                {"On WordGotchu, I played a key role in bringing a dynamic and engaging gaming experience to life. Leveraging my skills in back-end development, I created the necessary code to enable seamless multiplayer functionality for the game, allowing players to compete against each other in real-time. Additionally, I contributed to the development of the game's unique \"Gotchus\" characters, designing their abilities and bringing them to life through code. Through my work, I helped establish WordGotchu as a captivating and immersive game, combining the addictive gameplay of Wordle with a vibrant and original Pixel art style. As a result of my contributions, players can now battle it out in the arena with their custom Gotchus and enjoy a thrilling gaming experience."}
              </p>

            </div>
          </div>

          <div className="flex flex-col justify-center w-3/4 m-4 rounded-xl text-left">
            <div>
              <div className="flex flex-row justify-between">
                <Link
                  href="https://www.firstmaps.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row w-min mb-3"
                >
                  <h3 className="text-2xl font-bold hover:text-husqy-mainColor" data-value="FirstMaps">FirstMaps</h3>
                  <Image src="/images/link-solid.svg" alt="Link" className="w-8 h-8 ml-2 p-0.5 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor" width={32} height={32} />
                </Link>
                <Link
                  href="https://github.com/First-Maps/first-maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row"
                >
                  <Image src="/images/github.svg" alt="Github" className="w-8 h-8 ml-2 p-0.5 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor" width={32} height={32} />
                </Link>
              </div>
              <Image src="/images/FirstMaps.png" alt="FirstMaps" className="w-3/4 m-auto rounded-lg" width={640} height={360} />
              <div className="flex flex-row flex-wrap mt-4">
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  Next.js
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  Sass
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  Storybook
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  OpenMaps
                </p>
                <p className="text-l py-1.5 px-2 mr-2 mt-2 rounded-xl border border-husqy-textColor">
                  MongoDB
                </p>
              </div>
              <p className="text-l py-3">
                {"On FirstMaps, I played a vital role in creating a platform that facilitates the sharing of culture and history of First Nations communities through the power of maps. Utilizing my expertise in map API development, I enabled users to create and view points of interest on a map, providing an immersive and interactive way to learn about the unique history and language of First Nations communities in a given area. Through my contributions, I also developed a powerful search functionality that enables users to easily find locations of interest and learn more about the rich cultural heritage of First Nations communities. By leveraging cutting-edge technology to foster cross-cultural understanding and appreciation, I am proud to have played a significant role in making the FirstMaps platform a valuable resource for First Nations communities and anyone seeking to learn more about their rich and diverse history."}
              </p>

            </div>
          </div>
        </div>
        <div className="my-16">
          <div className="flex flex-row justify-center">
            <h3 id="contact" className="text-2xl font-bold pb-3" data-value="Contact Me">
              Contact Me
            </h3>
          </div>
          <p className="text-l pb-3 px-8 md:px-40">
            {"I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using any of the links below."}
          </p>
          <div className="flex flex-row justify-center">
            <Link
              href="https://www.linkedin.com/in/kiefer-hogg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center w-12 h-12 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor m-2"
            >
              <Image src="/images/linkedin-in.svg" alt="LinkedIn" className="w-8 h-8" width={32} height={32} />
            </Link>
            <Link
              href="mailto:kieferhogg@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center w-12 h-12 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor 0 m-2"
            >
              <Image src="/images/email.svg" alt="Email" className="w-8 h-8" width={32} height={32} />
            </Link>
            <Link
              href="https://www.github.com/kieferhogg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center w-12 h-12 rounded-full hover:bg-husqy-mainColor bg-husqy-subColor m-2"
            >
              <Image src="/images/github.svg" alt="GitHub" className="w-8 h-8" width={32} height={32} />
            </Link>
          </div>
        </div>
        <footer className="flex flex-row justify-center items-center w-full h-24 border-t ">
          <p>
            {`© ${new Date().getFullYear()} Kiefer Hogg`}
          </p>
        </footer>
      </main>
      <canvas id="bgCanvas" className="bgCanvas"></canvas>
      <Script src="/js/background.js"></Script>
    </>
  );
};

export default Home;
