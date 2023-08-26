import images from '../../public/images/index.js';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center bg-cream py-16 font-orbitron text-lavender"
    >
      <div>
        <h2 className="mb-16 text-7xl tracking-widest">About Me</h2>
      </div>
      <div className="flex max-w-screen-xl flex-row p-4">
        <div className="w-1/2">
          <img loading="lazy" src={images.portrait} alt="" />
        </div>
        <div className="ml-32 w-1/2 py-20 text-purple">
          <p className="mb-8 text-3xl tracking-widest">I&apos;m Serj,</p>
          <p className="text-xl leading-[2.8rem] tracking-widest ">
            software developer turned photography enthusiast. Through my lens, I
            capture the world&apos;s genuine beauty. Beyond screens, I&apos;m a
            dedicated graphic designer, always seeking those perfect angles and
            the best light. Photography isn&apos;t just a hobby, it&apos;s my
            way to share striking moments frozen in time. Join me on this visual
            journey as we explore life&apos;s exceptional moments together! ...
            more about me at{' '}
            <a
              className="font-bold tracking-widest text-lavender"
              href="https://serjqazi.com/"
            >
              serjqazi.com
            </a>
            .
          </p>
          <a href=""></a>
        </div>
      </div>
    </section>
  );
};

export default About;
