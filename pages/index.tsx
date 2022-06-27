import React from 'react';
import Header from '../components/Header';
import Socials from '../components/Socials';
import WorkCard from '../components/WorkCard';
import Head from 'next/head';
import data from '../data';


export default function Home() {
  const workRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);

  const handleWorkScroll = () => {
    if (null !== workRef.current) {
      window.scrollTo({
        top: workRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleAboutScroll = () => {
    if (null !== aboutRef.current) {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='container mx-auto mb-10'>
      <Head>
        <link rel='icon' href='./binary.png' />
        <title>Iasmim | Dev Full-Stack</title>
      </Head>
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className='laptop:mt-20 mob:mt-10'>
        <h1 className='mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5'>
          {data.headerTaglineOne}
          {data.headerTaglineTwo}
        </h1>
        <Socials className='mt-5 mob:mt-2 laptop:mt-5' />
      </div>
      <div
        className='mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0'
        ref={workRef}
      >
        <h1 className='text-2xl text-bold'>Projetos.</h1>
        <div className='mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4'>
          {data.projects.map((project, index) => (
            <WorkCard
              key={index}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
            />
          ))}
        </div>
      </div>
      <div
        className='mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0'
        ref={aboutRef}
      >
        <h1 className='text-2xl text-bold'>Sobre mim.</h1>
        <p className='m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5'>
          {data.aboutpara}
        </p>
      </div>
      <div className='mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0'>
        <h1 className='text-2xl text-bold'>Contatos.</h1>
        <div className='mt-5'>
          <Socials />
        </div>
      </div>
    </div>
  );
}
