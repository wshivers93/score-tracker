import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ScoreCard from '../components/ScoreCard';

const Home: NextPage = () => {
  return (
    <main>
      <div className="w-1/4">
        <ScoreCard></ScoreCard>  
      </div>
    </main>
  );
};

export default Home;
