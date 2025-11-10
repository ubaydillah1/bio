/* eslint-disable react/no-unescaped-entities */
import Button from "../../Elements/Button";
import Badge from "../../Elements/Badge";
import { useContext, useState } from "react";
import { DarkMode } from "../../../contexts/DarkMode";

const ContactSection = () => {
  const { theme } = useContext(DarkMode);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // mulai loading
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xgveeboo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <section
      className="max-w-[850px] lg:ml-[300px] w-full mt-[40px]"
      id="contact"
    >
      <Badge className="lg:my-10 my-5 px-3 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          className={`${theme == "black" ? "fill-white" : "fill-black"}`}
          viewBox="0 0 256 256"
        >
          <path d="M116,120a12,12,0,1,1,12,12A12,12,0,0,1,116,120ZM84,132a12,12,0,1,0-12-12A12,12,0,0,0,84,132Zm88,0a12,12,0,1,0-12-12A12,12,0,0,0,172,132Zm60-76V184a16,16,0,0,1-16,16H155.57l-13.68,23.94a16,16,0,0,1-27.78,0L100.43,200H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-16,0H40V184h65.07a8,8,0,0,1,7,4l16,28,16-28a8,8,0,0,1,7-4H216Z"></path>
        </svg>
        CONTACT
      </Badge>

      <div className="sm:text-[48px] text-[37px] lg:max-w-[800px]">
        Let's Work{" "}
        <span
          className={
            theme == "black" ? "text-primary-dark" : "text-primary-light"
          }
        >
          Together!
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="border-b border-#4C4C4C">
          <p className="text-[24px] my-5">ubaydillah1737@gmail.com</p>

          <div className="flex flex-col lg:flex-row justify-between gap-7">
            <div className="flex flex-col gap-7 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="fullname" className="text-[12px]">
                  FULL NAME
                </label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  className="outline-none text-[18px] bg-transparent placeholder:text-[#757575]"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-[12px]">
                  PHONE
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="outline-none text-[18px] bg-transparent placeholder:text-[#757575]"
                  placeholder="Optional"
                />
              </div>
            </div>
            <div className="flex flex-col gap-7 w-full">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-[12px]">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="outline-none text-[18px] bg-transparent placeholder:text-[#757575]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="gender" className="text-[12px]">
                  GENDER
                </label>
                <input
                  id="gender"
                  name="gender"
                  type="text"
                  className="outline-none text-[18px] bg-transparent placeholder:text-[#757575]"
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 mt-7">
            <label htmlFor="message" className="text-[12px]">
              MESSAGE
            </label>
            <textarea
              name="message"
              id="message"
              className="outline-none text-[18px] bg-transparent placeholder:text-[#757575] resize-none h-[150px]"
              placeholder="Write Your Message here...."
              required
            ></textarea>
          </div>
        </div>

        <Button
          className="md:w-auto px-10 mt-5 mb-[120px] w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {/* Popup Thank You */}
      {submitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 max-w-sm text-center shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
            <p className="mb-6">
              Your message has been sent successfully. We'll get back to you
              soon.
            </p>
            <Button onClick={() => setSubmitted(false)} className="w-full">
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
