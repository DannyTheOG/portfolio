import { useState } from "react";
import { RevealOnScroll } from "../components/reveal-on-scroll";
import emailjs from "emailjs-com";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const handleSubmit = ( e ) => {
    e.preventDefault();

    emailjs
      .sendForm( 
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        e.target, 
        import.meta.env.VITE_PUBLIC_KEY 
      )
      .then( () => {
        alert( "Message Sent" );
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(() => alert( "Oops!, Something went wrong. Please try again." ));
  }

  return (
    <>
      <section 
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="px-4 w-150">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r 
              from-blue-500 to-purple-400 bg-clip-text text-transparent text-center"
            >
              Get In Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  className="w-full border border:gray/50 rounded px-4 py-3 transition
                  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  required
                  placeholder="Name..."
                  onChange={ (e) => setFormData( {...FormData, name: e.target.value} )}
                />
              </div>

              <div className="relative">
                <input
                  id="name"
                  type="email"
                  name="email"
                  value={formData.email}
                  className="w-full border border:gray/50 rounded px-4 py-3 transition
                  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  required
                  placeholder="example@email.com"
                  onChange={ (e) => setFormData( {...FormData, email: e.target.value} )}
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  rows={5 }
                  className="w-full border border:gray/50 rounded px-4 py-3 transition
                  focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  required
                  placeholder="Your message...."
                  onChange={ (e) => setFormData( {...FormData, message: e.target.value} )}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative
                overflow:hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}