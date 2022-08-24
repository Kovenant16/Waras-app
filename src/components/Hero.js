import React from 'react';

// import woman image
import WomanImg from '../assets/img/banner-woman2.webp';
import motoHuaraz from '../assets/img/motoWaras.png'

const Hero = () => {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hola, somos waras delivery 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              Llevamos todo tipo de paquetes & <br /> Pedidos a la zona.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Trabajamos con los mejores locales de Huaraz, desde hace más de 2 años
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Afiliate con Nosotros
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img className='w-96' src={motoHuaraz} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
