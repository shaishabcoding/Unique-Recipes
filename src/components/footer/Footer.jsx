const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content lg:px-28 lg:py-20">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Recipe Creation</a>
        <a className="link link-hover">Culinary Design</a>
        <a className="link link-hover">Menu Planning</a>
        <a className="link link-hover">Ingredient Sourcing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Our Recipes</a>
        <a className="link link-hover">Contact for Recipes</a>
        <a className="link link-hover">Join Our Culinary Team</a>
        <a className="link link-hover">Recipe Publications</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Recipe Terms of Service</a>
        <a className="link link-hover">Recipe Privacy Policy</a>
        <a className="link link-hover">Recipe Cookie Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
