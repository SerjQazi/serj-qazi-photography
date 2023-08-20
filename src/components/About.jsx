
import images from '../../public/images/index.js';

const About = () => {
  return (
    <section className="font-orbitron text-signature-blue bg-cream flex flex-col items-center justify-center py-16">
      <div>
        <h2 className='text-7xl mb-16 tracking-widest'>About Me</h2>
      </div>
      <div className='flex flex-row max-w-screen-xl'>
        <div className='w-1/2'>
          <img src={images.portrait} alt="" />
        </div>
        <div className='w-1/2 ml-32 py-20'>
          <p className='tracking-widest text-3xl mb-8'>I&apos;m Serj,</p>
          <p className='text-xl leading-[2.8rem] tracking-widest '>software developer turned photography enthusiast. Through my lens, I capture the world&apos;s genuine beauty. Beyond screens, I&apos;m a dedicated graphic designer, always seeking those perfect angles and the best light. Photography isn&apos;t just a hobby, it&apos;s my way to share striking moments frozen in time. Join me on this visual journey as we explore life&apos;s exceptional moments together! ... more about me at <a className='font-bold text-sky-500 tracking-widest' href="https://serjqazi.com/">serjqazi.com</a></p>
          <a href=""></a>
        </div>
      </div>
    </section>
  );
};

export default About;
