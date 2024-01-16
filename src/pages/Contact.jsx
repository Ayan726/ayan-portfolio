import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaSpinner,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiMoonBats } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Reveal from "../components/framerMotionComponents/Reveal";
import RightSlideReveal from "../components/framerMotionComponents/RightSlideReveal";
import { variables } from "../variables/variables";

const Contact = () => {
  const initialFormState = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    for (let key in formState) {
      if (formState[key].length === 0) return false;
    }
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const valid = validate();
    if (!valid) {
      toast.error("Fill up all the fields!");
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          setFormState(initialFormState);
          setLoading(false);
        },
        (error) => {
          toast.error("Something went wrong!");
          setLoading(false);
        },
      );
  };

  return (
    <div className="relative flex min-h-[60vh] min-w-full flex-col gap-16 text-white lg:flex-row lg:gap-32">
      <div className="flex h-full w-full flex-col gap-12 lg:w-1/3">
        <div>
          <RightSlideReveal>
            <h3 className="mb-4 text-base uppercase">Contact info</h3>
          </RightSlideReveal>
          <div className="flex flex-col gap-8">
            <RightSlideReveal delay="0.2">
              <div className="flex items-center justify-start gap-4">
                <button
                  onClick={() => {
                    window.open(variables.gmail);
                  }}
                  className="cursor-pointer rounded-md bg-gray-light bg-opacity-[0.15] p-[0.5rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
                >
                  <MdEmail className="text-2xl" />
                </button>

                <div>
                  <h4 className="text-sm uppercase text-gray-txt">Mail us</h4>
                  <p>{variables.gmail.substring(7)}</p>
                </div>
              </div>
            </RightSlideReveal>
            <RightSlideReveal delay="0.3">
              <div className="flex items-center justify-start gap-4">
                <button
                  onClick={() => {
                    window.open(variables.phone);
                  }}
                  className="cursor-pointer rounded-md bg-gray-light bg-opacity-[0.15] p-[0.5rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
                >
                  <FaPhone className="text-2xl" />
                </button>

                <div>
                  <h4 className="text-sm uppercase text-gray-txt">
                    Contact us
                  </h4>
                  <p>{variables.phone.substring(4)}</p>
                </div>
              </div>
            </RightSlideReveal>
            <RightSlideReveal delay="0.4">
              <div className="flex items-center justify-start gap-4">
                <button className="cursor-pointer rounded-md bg-gray-light bg-opacity-[0.15] p-[0.5rem] text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black">
                  <FaLocationDot className="text-2xl" />
                </button>

                <div>
                  <h4 className="text-sm uppercase text-gray-txt">Location</h4>
                  <p>Kharagpur, West Bengal, India</p>
                </div>
              </div>
            </RightSlideReveal>
          </div>
        </div>

        <div>
          <RightSlideReveal>
            <h3 className="mb-4 text-base uppercase">Social info</h3>
          </RightSlideReveal>
          <RightSlideReveal delay="0.2">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.open(variables.instagramURL)}
                className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-3 text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
              >
                <FaInstagram className="text-2xl" />
              </button>
              <button
                onClick={() => window.open(variables.facebookURL, "_blank")}
                className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-3 text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
              >
                <FaFacebookF className="text-2xl" />
              </button>
              <button
                onClick={() => window.open(variables.linkedInURL)}
                className="cursor-pointer rounded-full bg-gray-light bg-opacity-[0.15] p-3 text-sm text-white backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
              >
                <FaLinkedinIn className="text-2xl" />
              </button>
            </div>
          </RightSlideReveal>
        </div>
      </div>
      <Reveal classProp="w-full">
        <div className="gradient relative min-h-[56dvh] flex-1 rounded-2xl p-8">
          <GiMoonBats className="absolute right-5 top-1 z-0 text-[5rem] text-[#444444]" />
          <h1 className="mb-4 text-3xl sm:text-4xl">
            Let's work <span className="text-blue-600">together.</span>
          </h1>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col justify-center gap-3"
          >
            <input
              value={formState.user_name}
              onChange={handleChange}
              name="user_name"
              type="text"
              placeholder="Name *"
              className="w-full rounded-md border-none bg-[#282828] p-3 outline-none"
            />
            <input
              value={formState.user_email}
              onChange={handleChange}
              name="user_email"
              type="email"
              placeholder="Email *"
              className="w-full rounded-md border-none bg-[#282828] p-3 outline-none"
            />
            <textarea
              value={formState.message}
              onChange={handleChange}
              name="message"
              id=""
              rows="3"
              className="w-full rounded-md border-none bg-[#282828] p-3 outline-none"
              placeholder="Message *"
            />

            <button
              className="mt-5 flex h-10 w-60 cursor-pointer items-center justify-center rounded-lg bg-gray-light bg-opacity-20 px-3 py-2 backdrop-blur-md transition-all hover:bg-opacity-100 hover:text-black"
              disabled={loading}
              type="submit"
            >
              Send Message
              {loading && <FaSpinner className="ml-2 animate-spin" />}
            </button>
          </form>
        </div>
      </Reveal>

      <Toaster />
    </div>
  );
};

export default Contact;
