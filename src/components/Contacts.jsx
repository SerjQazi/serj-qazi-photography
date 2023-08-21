import { IoMdPaperPlane } from 'react-icons/io';

const Contacts = () => {
  return (
    <section className="font-orbitron text-signature-blue flex flex-col items-center justify-center py-16">
      <div>
        <h2 className="mb-16 text-7xl tracking-widest">Contacts</h2>
      </div>
      <div className='flex items-center w-full max-w-screen-xl'>
        <form className='flex flex-col w-full items-center' action="">
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name" className="sr-only">
            enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter your full name"
            className="w-full tracking-widest rounded-md mb-4 bg-cream px-4 py-6 text-base placeholder-platinum shadow-sm focus:border-signature-blue focus:outline-none focus:ring-1 focus:signature-blue"
          />

          <label htmlFor="email" className="sr-only">
            enter your email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email address"
            className="w-full tracking-widest rounded-md mb-4 bg-cream px-4 py-6 text-base placeholder-platinum shadow-sm focus:border-signature-blue focus:outline-none focus:ring-1 focus:signature-blue"
          />

          <label htmlFor="message" className="sr-only">
            enter your message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="let's work together... how can I help?"
            cols="30"
            rows="8"
            className="w-full tracking-widest rounded-md mb-4 bg-cream px-4 py-6 text-base placeholder-platinum shadow-sm focus:border-signature-blue focus:outline-none focus:ring-1 focus:signature-blue"
          />

          <button
            className=" mt-4 flex items-center justify-center rounded-md bg-cream px-5 py-6 text-lg font-bold uppercase tracking-widest w-[14em]"
            type="submit"
          >
            Send
            <IoMdPaperPlane className="ml-1 text-2xl" />{' '}
          </button>
        </form>

        <div className="verticalText text-xl flex flex-col ml-14 mb-20 tracking-widest">
          <a href="">226 501 5420</a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
