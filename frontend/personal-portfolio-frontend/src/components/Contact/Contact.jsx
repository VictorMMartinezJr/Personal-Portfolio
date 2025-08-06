import { useState } from "react";
import SectionTitle from "../SectionTitle";
import FloatingLabel from "./FloatingLabel";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const nameFloating = isNameFocused || name.length > 0;
  const emailFloating = isEmailFocused || email.length > 0;
  const messageFloating = isMessageFocused || message.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="contact"
      className="h-auto w-full flex flex-col justify-center items-center mb-4 px-4 lg:max-w-[60%]"
    >
      <SectionTitle title="Lets Chat!" />

      {/* Form */}
      <form className="w-full flex flex-col gap-8">
        {/* Name */}
        <div className="flex flex-col items-center px-4 relative">
          <FloatingLabel labelText="Name" floating={nameFloating} />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setIsNameFocused(true)}
            onBlur={() => setIsNameFocused(false)}
            className="h-full w-full px-2 py-3 border-4 top-8 border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Email */}
        <div className="flex justify-center px-4 relative">
          <FloatingLabel labelText="Email" floating={emailFloating} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            className="h-full w-full px-2 py-3 border-4 top-8 border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Message */}
        <div className="flex justify-center px-4 relative">
          <FloatingLabel labelText="Message" floating={messageFloating} />
          <textarea
            rows={10}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsMessageFocused(true)}
            onBlur={() => setIsMessageFocused(false)}
            className="h-full w-full px-2 border-4 top-8 border-purple-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="px-4 rounded-xl ">
          <button
            onSubmit={handleSubmit}
            className="bg-purple-700 border-2 border-purple-700 px-4 py-2 rounded-xl cursor-pointer text-white transform transition-transform duration-200 hover:scale-105 sm:text-xl"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
