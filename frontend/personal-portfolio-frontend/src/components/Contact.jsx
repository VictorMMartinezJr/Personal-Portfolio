import SectionTitle from "./SectionTitle";

const Contact = () => {
  const handleSubmit = () => {};

  return (
    <div id="contact">
      <SectionTitle title="Lets Chat!" />
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col items-center px-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
