import "./footer.css";

const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer text-center">
      <div>
        Made with <span role="img">❤️</span> by Mahesh Pawar
      </div>
      <div>Copyright &#169; {currentDate}</div>
    </div>
  );
};

export default Footer;
