import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = props => {
  return (
    <footer id="footer" className="text-muted">
      <div className="container">
      <p className="float-right">
        <a href="#">Back to top</a>
      </p>
      <p>DevChris &copy; 2019</p>
      </div>
    </footer>
  )
}

export default Footer;