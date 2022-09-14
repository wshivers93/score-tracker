import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../app/atom';
import ScoreCard from '../components/ScoreCard';

const Home: NextPage = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const arrayOfEvents = new Array<number>(10).fill(0);

  return (
    <>
      <section className='container flex flex-row flex-wrap'>
        {arrayOfEvents.map(() =>
          <div className='w-1/4'>
            <ScoreCard></ScoreCard>
          </div>
        )}
        <div>
          <button
              className="absolute top-2 right-2"
              onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
              }
            >
              {theme}
            </button>
        </div>
      </section>
    </>
  );
};

export default Home;
