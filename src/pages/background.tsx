import { type NextPage } from "next";
import Script from 'next/script';
import { useRouter } from 'next/router';



const StartingSoon: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  const text = query.text as string || "";

  return (
    <>
      <main className="flex flex-col justify-center w-full flex-1 text-center relative z-10 text-husqy-textColor">
        <div id="home" className="flex flex-col w-full justify-center pt-96 h-screen">
          <h1 className="text-6xl font-bold break-words" data-value={text}>{text}</h1>
        </div>

      </main>
      <canvas id="bgCanvas" className="bgCanvas"></canvas>
      <Script src="/js/streambackgrounds.js"></Script>
    </>
  );
}

export default StartingSoon;