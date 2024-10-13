import React, { useRef } from "react";
import "../contact.css";
import InstaIcon from "../assets/icons/instagram.svg";
import MessengerIcon from "../assets/icons/messenger.svg";
import TwitterIcon from "../assets/icons/twitter.svg";
import emailjs from "emailjs-com";

const Contact = () => {
  const icons = [
    {
      name: "messenger",
      icon: MessengerIcon,
      text: "Seth Iris",
      link: "https://www.facebook.com/Seth.Iris.009",
    },
    {
      name: "instagram",
      icon: InstaIcon,
      text: "@sesudesu009",
      link: "https://www.instagram.com/sesudesu009/",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      text: "@sesudesu009",
      link: "https://x.com/sesudesu009",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_16w4yhe",
        "template_qsgbv4c",
        form.current,
        "pjBtqCmxfN-3bQ1Qp",
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!"); // Success alert
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div className="mx-auto">
      <div className="mt-10 w-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center md:mx-5 lg:mx-44">
          <div className="bg-custom-gray p-2 h-full lg:p-5">
            <form
              className="font-poppins px-3 lg:px-5"
              onSubmit={sendEmail}
              ref={form}
            >
              <h1 className="relative text-3xl text-stone-800 mt-4 mb-6 custom-font-size lg:text-3xl">
                Send me a message
              </h1>
              <input
                className="outline-none rounded-md w-full h-10 p-2 mb-3 ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-800"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="outline-none rounded-md w-full h-10 p-2 mb-3 ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-800"
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                className="outline-none rounded-md w-full h-10 p-2 mb-3 ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-800"
                type="text"
                placeholder="Subject"
                name="subject"
              />
              <textarea
                className="outline-none rounded-md w-full h-40 p-2 mb-3 ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-800"
                placeholder="Message"
                name="message"
              ></textarea>

              <button
                className="rounded-md bg-indigo-800 text-slate-50 w-full px-3 py-2 mb-10 md:w-24"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <div className="p-2 custom-shadow font-poppins lg:p-5">
            <div className="px-5">
              <h1 className="text-3xl relative text-stone-800 mt-4 mb-6 lg:text-3xl custom-line custom-font-size">
                Reach out
              </h1>
              <div className="grid grid-cols-1 mt-4 space-y-5">
                {icons.map((icon) => (
                  <div
                    className="flex flex-row space-x-3 items-center"
                    key={icon.name}
                  >
                    <img src={icon.icon} alt="My Icon" className="h-9 w-9" />
                    <p className="">
                      <a href={icon.link}>{icon.text}</a>
                    </p>
                  </div>
                ))}
                <div>
                  <p className="mb-10">
                    I'll be looking forward to us working in the future!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
