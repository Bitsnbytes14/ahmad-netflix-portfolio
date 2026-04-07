import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8 pt-20">
      <div className="absolute top-4 left-4">
        <Image src="/netflix.png" alt="Netflix Logo" width={100} height={30} />
      </div>

      <h1 className="text-5xl font-bold mb-10 text-red-600">Contact</h1>

      <div className="max-w-xl w-full text-center mb-12">
        <p className="text-lg text-gray-300 mb-6">
          I'm currently open to Backend / Software Development internship opportunities, open-source collaborations, and impactful projects. If you're building something interesting or looking for a developer who focuses on scalable systems — let's connect.
        </p>

        <p className="text-3xl font-bold mb-8">
          Email:{" "}
          <a
            href="mailto:mahmad091323@gmail.com"
            className="text-red-600 hover:underline"
          >
            mahmad091323@gmail.com
          </a>
        </p>

        <form className="bg-[#141414] p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 text-lg font-bold mb-2 text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 text-lg font-bold mb-2 text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 text-lg font-bold mb-2 text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-800 border-gray-700 text-white"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="flex space-x-6">
        <Link
          href="https://www.linkedin.com/in/mohammad-ahmad141004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-4xl"
        >
          <span className="sr-only">LinkedIn</span>
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.567c0-1.325-.028-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.952v5.659H9.157V9.292h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 6.879v7.016zM5.003 8.574a3.509 3.509 0 01-3.507-3.507c0-1.933 1.57-3.507 3.507-3.507 1.934 0 3.507 1.574 3.507 3.507 0 1.933-1.573 3.507-3.507 3.507zM6.76 20.452H3.24V9.292h3.52z"/>
          </svg>
        </Link>

        <Link
          href="https://github.com/Bitsnbytes14"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 text-4xl"
        >
          <span className="sr-only">GitHub</span>
          <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.82-.25.82-.557 0-.275-.015-1.134-.015-2.232-3.344.721-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.304-.535-1.524.118-3.176 0 0 1-.322 3.295 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.286-1.23 3.286-1.23.653 1.653.242 2.872.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.478 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.89-.015 3.284 0 .309.22.678.825.556C20.565 22.181 24 17.68 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}