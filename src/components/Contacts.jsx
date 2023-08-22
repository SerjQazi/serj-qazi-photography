import { IoMdPaperPlane } from 'react-icons/io';

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="font-orbitron text-signature-blue flex flex-col items-center justify-center py-16"
    >
      <div>
        <h2 id="/contacts" className="mb-16 text-7xl tracking-widest">
          Contacts
        </h2>
      </div>
      <div className="flex w-full max-w-screen-xl items-center">
        <form className="flex w-full flex-col items-center" action="">
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name" className="sr-only">
            enter your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="enter your full name"
            className="text-signature-blue bg-cream placeholder-platinum focus:border-signature-blue focus:signature-blue mb-4 w-full rounded-md px-4 py-6 text-base tracking-widest shadow-sm focus:outline-none focus:ring-1"
          />

          <label htmlFor="email" className="sr-only">
            enter your email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email address"
            className="text-signature-blue bg-cream placeholder-platinum focus:border-signature-blue focus:signature-blue mb-4 w-full rounded-md px-4 py-6 text-base tracking-widest shadow-sm focus:outline-none focus:ring-1"
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
            className="text-signature-blue bg-cream placeholder-platinum focus:border-signature-blue focus:signature-blue mb-4 w-full resize-none rounded-md px-4 py-6 text-base tracking-widest shadow-sm focus:outline-none focus:ring-1"
          />

          <button
            className="button tracking-[0.5em] flex mt-4 items-center justify-center text-lg uppercase"
            type="submit"
          >
            Send
            <IoMdPaperPlane className="ml-1 text-2xl" />{' '}
          </button>
        </form>

        <div className="verticalText mb-20 ml-14 flex flex-col text-xl tracking-widest">
          <a href="tel:+12265015420">226 501 5420</a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
