import React, { FunctionComponent } from "react";

const Header: FunctionComponent = props => {
  return (
    <header>
			  <div className="collapse" style={{ backgroundColor: "#165b85" }} id="navbarHeader">
				<div className="container">
				  <div className="row">
					<div className="col-sm-8 col-md-7 py-4">
					  <h4 className="text-white">About me</h4>
					  <p className="text-white">
						Passionate about computers, I'm always on the lookout for new technologies.
						I have the taste of the challenge, which allows me to be perseverant on my projects that I like to lead insisting on the quality.
					  </p>
					</div>
					<div className="col-sm-4 offset-md-1 py-4">
					  <h4 className="text-white">Contact</h4>
					  <ul className="list-unstyled">
					  	<li>
							<a target="_blank" href="https://github.com/yovanoc/">
								<i className="fab fa-github"></i>
								&nbsp;GitHub
							</a>
						</li>
						<li>
							<a target="_blank" href="https://codetrace.com/users/yovanoc">
								<i className="fas fa-code"></i>
								&nbsp;CodeTrace
							</a>
						</li>
						<li>
							<a target="_blank" href="https://twitter.com/yovano_c">
								<i className="fab fa-twitter-square"></i>
								&nbsp;Twitter
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.facebook.com/xdevchris/">
								<i className="fab fa-facebook-square"></i>
								&nbsp;Facebook
							</a>
						</li>
						<li>
							<a target="_blank" href="https://www.linkedin.com/in/yovanoc/">
								<i className="fab fa-linkedin"></i>
								&nbsp;LinkedIn
							</a>
						</li>
						<li>
							<a href="mailto:yovano_c@outlook.com">
								<i className="fas fa-envelope-square"></i>
								&nbsp;yovano_c@outlook.com
							</a>
						</li>
						<li>
							<a href="tel:+33783263010">
								<i className="fas fa-phone-square"></i>
								&nbsp;+33 783 263 010
							</a>
						</li>
					  </ul>
					</div>
				  </div>
				</div>
			  </div>
			  <nav className="navbar navbar-dark box-shadow" style={{ backgroundColor: "#3498db" }}>
				<div className="container d-flex justify-content-between">
				  <a href="#" className="navbar-brand d-flex align-items-center">
					<img src="brand.png" width="220" height="80" />
				  </a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				</div>
			  </nav>
			</header>
  )
}

export default Header;