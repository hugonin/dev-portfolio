import PropTypes from "prop-types";

function Contact({ title, paragraph, cta }) {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#171718] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/92d396ea-5c3e-4c4f-b393-3866b1464841"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#85BFD1] text-gray-300">
            {title}
          </p>
          <p className="text-gray-300 py-4">{paragraph}</p>
        </div>
        <input
          className="bg-[#e0e5f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#e0e5f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#e0e5f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className=" px-5 py-3 my-8 mx-auto flex items-center rounded-lg shadow-lg bg-[#85BFD1] hover:bg-[#9fc7d3] text-sm text-[#FFFFFF] uppercase tracking-wider font-semibold"
          href="#"
        >
          {cta}
        </button>
      </form>
    </div>
  );
}

export default Contact;

Contact.defaultProps = {
  title: "Contact",
  paragraph:
    "Complétez le formulaire ci-dessous ou envoyez-moi un email - contact@jeanhuguesdoumbekingue.ovh",
  cta: "Travaillons ensemble",
};

Contact.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  cta: PropTypes.string,
};
