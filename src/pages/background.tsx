import { NextPage } from 'next';
import Script from 'next/script';
import { useRouter } from 'next/router';



const startingSoon: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  const text = query.text;

  return (
    <>
      <main className="flex flex-col justify-center w-full flex-1 ml-24 pr-28 text-center relative z-10 text-husqy-textColor">
        <div id="home" className="flex flex-col w-full h-screen pt-24 text-left">
          <h1 className="text-6xl font-bold break-words" data-value={text}>{text}</h1>
        </div>

      </main>
      <canvas id="bgCanvas" className="bgCanvas"></canvas>
      <Script src="/js/streambackgrounds.js"></Script>
    </>
  );
}

export default startingSoon;