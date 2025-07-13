export default function Form() {
  return (
    <form
      action="https://formspree.io/f/mayvlvne"
      method="POST"
      className="contact-form"
    >
      <h2>Contact Me</h2>

      <input type="text" name="name" placeholder="Your Name" required />

      <input type="email" name="email" placeholder="Your Email" required />

      <textarea name="message" placeholder="Your Message" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
}
