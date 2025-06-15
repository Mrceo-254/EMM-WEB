export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
      <h1 className="text-3xl font-bold text-primary mb-6">Contact Me</h1>
      <form className="w-full max-w-md space-y-4">
        <input className="w-full p-2 border rounded" type="text" placeholder="Your Name" />
        <input className="w-full p-2 border rounded" type="email" placeholder="Your Email" />
        <textarea className="w-full p-2 border rounded" rows="4" placeholder="Your Message" />
        <button className="px-4 py-2 bg-primary text-white rounded hover:bg-indigo-700">Send</button>
      </form>
    </main>
  );
}
