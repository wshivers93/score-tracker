import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Dropdown from '../components/Dropdown';
import ScoreCard from '../components/ScoreCard';

const Home: NextPage = () => {
  const arrayOfEvents = new Array<number>(10).fill(0);
  const arrayOfOptions = new Array<string>(5).fill("test");

  return (
    <>
      <section className='container flex flex-row flex-nowrap justify-between p-5 lg:p-0 my-2 lg:my-4'>
          <Dropdown placeholder="League" options={arrayOfOptions}/>
          <Dropdown placeholder="Team" options={arrayOfOptions}/>
      </section>
      <section className='container flex flex-row flex-wrap p-2 lg:p-0'>
        {arrayOfEvents.map(() =>
          <div className='w-full lg:w-1/4'>
            <ScoreCard></ScoreCard>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
