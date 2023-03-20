import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kiefer Hogg</title>
        <meta content="Kiefer Hogg" property="og:title" />
        <meta name="description" content="Hello, I am Kiefer" />
        <meta content="Hello, I am Kiefer" property="og:description" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta content="/images/favicon.png" property="og:image" />
        <meta content="https://www.kieferhogg.com" property="og:url" />
        <meta content="#0a0a05" data-react-helmet="true" name="theme-color" />
      </Head>
      <nav className="flex flex-row justify-start w-20 m-2 h-screen fixed top-0 left-0">
        <ul className="flex flex-col items-center w-full mt-4">
          <li className="flex flex-row justify-center items-center w-full my-2 bg-black hover:bg-[#454545] rounded-xl">
            <Link href="/#home">
              <p className="flex flex-row justify-center items-center w-full h-full py-2">
                <img src="/images/favicon.png" alt="Home" className="w-8 h-8" />
                iefer
              </p>
              <p className="flex flex-row justify-center items-center w-full h-full py-2">
                Hogg
              </p>
            </Link>
          </li>
          <li className="flex flex-row justify-center items-center w-full my-2 bg-black hover:bg-[#454545] rounded-xl">
            <Link href="/#portfolio">
              <p className="flex flex-row justify-center items-center w-full h-full py-2">
                Portfolio
              </p>
            </Link>
          </li>
          <li className="flex flex-row justify-center items-center w-full my-2 bg-black hover:bg-[#454545] rounded-xl">
            <Link href="/#contact">
              <p className="flex flex-row justify-center items-center w-full h-full py-2">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex flex-col justify-center w-full flex-1 ml-24 pr-28 text-center">
        <div id="home" className="flex flex-col justify-center w-full flex-1 pt-24 mb-80 text-left">
          <h1 className="text-6xl font-bold pb-3">Hello World,</h1>
          <h1 className="text-6xl font-bold pb-3">I'm Kiefer</h1>
          <h2 className="text-4xl pb-3">Full-Stack Web Developer</h2>
        </div>
        <div className="flex flex-row justify-center mt-56">
          <h3 id="portfolio" className="text-2xl font-bold pb-3">
            My Portfolio
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center w-3/4 m-4 bg-black hover:bg-[#454545] rounded-xl text-left">
            <div className="p-4">
              <h3 className="text-2xl font-bold pb-3">InterviewPal</h3>
              <img src="/images/InterviewPal.png" alt="InterviewPal" className="w-3/4 m-auto" />
              <p className="text-l pb-3">
                InterviewPal is a GPT-3.5 powered AI that helps you practice for your interviews. It will ask you common and relevant interview questions and give you insightful feedback on your answers.
              </p>
              <p className="text-l pb-3">Technologies Used:</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-3/4 m-4 bg-black hover:bg-[#454545] rounded-xl text-left">
            <div className="p-4">
              <h3 className="text-2xl font-bold pb-3">FFSandbox</h3>
              <img src="/images/FFSandbox.png" alt="FFSandbox" className="w-3/4 m-auto" />
              <p className="text-l pb-3">
                FFSandbox (work in progress) is a raid planning tool for Final Fantasy XIV. Users can create and share their own raid plans with the community. Guides and resources are also available to help users plan their raids.
              </p>
              <p className="text-l pb-3">Technologies Used:</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-3/4 m-4 bg-black hover:bg-[#454545] rounded-xl text-left">
            <div className="p-4">
              <h3 className="text-2xl font-bold  pb-3">WordGotchu</h3>
              <img src="/images/WordGotchu.png" alt="WordGotchu" className="w-3/4 m-auto" />
              <p className="text-l pb-3">
                WordGotchu is a Pixel styled web platform game based on Wordle and original characters known as "Gotchus" that battle against each other in an arena.
              </p>
              <p className="text-l pb-3">Technologies Used:</p>
            </div>
          </div>
          <div className="flex flex-col justify-center w-3/4 m-4 bg-black hover:bg-[#454545] rounded-xl text-left">
            <div className="p-4">
              <h3 className="text-2xl font-bold pb-3">First Maps</h3>
              <img src="/images/FirstMaps.png" alt="FirstMaps" className="w-3/4 m-auto" />
              <p className="text-l pb-3">
                First Maps is a web application that allows First Nations communities to share their culture and histroy on a map. Users can create and view points of interest on a map and learn about the history and language of the First Nations community in that area.
              </p>
              <p className="text-l pb-3">Technologies Used:</p>
            </div>
          </div>
        </div>
        <div className="my-16">
          <div className="flex flex-row justify-center">
            <h3 id="contact" className="text-2xl font-bold pb-3">
              Contact Me
            </h3>
          </div>
          <p className="text-l pb-3 px-56">
            I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to contact me using any of the links below.
          </p>
          <div className="flex flex-row justify-center">
            <a
              href="https://www.linkedin.com/in/kiefer-hogg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 m-2"
            >
              <img src="/images/linkedin-in.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="mailto:kieferhogg@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 m-2"
            >
              <img src="/images/email.svg" alt="Email" className="w-8 h-8" />
            </a>
            <a
              href="https://www.github.com/kieferhogg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-center items-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 m-2"
            >
              <img src="/images/github.svg" alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </main>
      <canvas id="bgCanvas"></canvas>
      <script src="/js/bg.js"></script>
    </>
  );
};

export default Home;
