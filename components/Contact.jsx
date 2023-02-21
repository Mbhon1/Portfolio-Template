import React from "react";
import Headings from "./Headings";

const Contact = () => {
  return (
    <section className="container px-4 py-10 mx-auto">
      <Headings title="Contact Us" />

      <form className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type={"text"}
            placeholder="Name"
            className="inputStyle"
            required
          />
          <input
            type={"email"}
            placeholder="Email"
            className="inputStyle"
            required
          />
        </div>
        <input
          type={"text"}
          placeholder="Subject"
          className="inputStyle"
          required
        />
        <textarea
          name=""
          className="inputStyle"
          placeholder="Message"
          rows="6"
          required
        />
        <div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
