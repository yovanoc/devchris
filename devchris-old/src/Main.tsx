import React, { FunctionComponent } from "react";
import ImagePortfolio, { IPortfolio } from "./ImagePortfolio";
import csharp from "./svg/csharp.svg";
import electron from "./svg/electron.svg";
import jssquare from "./svg/js-square.svg";
import laravel from "./svg/laravel.svg";
import nodejs from "./svg/node-js.svg";
import php from "./svg/php.svg";
import react from "./svg/react.svg";
import ts from "./svg/ts.svg";

const Main: FunctionComponent = props => {
  const portfolio: IPortfolio[] = [
    {
      image: "./img/cookietouch.png",
      link: "https://github.com/cookie-project/cookietouch",
      description: "Dofus Touch bot made with Electron & TypeScript. React and Material UI for the interface.",
      badges: ["nodejs", "react", "typescript", "electron"],
		},
		{
      image: "https://fakeimg.pl/400x400/",
      link: "https://github.com/yovanoc/starter/",
      description: "Electron / React / TypeScript Project Starter",
      badges: ["nodejs", "react", "typescript", "electron"],
    },
    {
      image: "https://fakeimg.pl/400x400/",
      link: "https://github.com/yovanoc/xswf/",
      description: "SWF Utilities for NodeJS in TypeScript",
      badges: ["nodejs", "typescript"],
		},
		{
			image: "https://fakeimg.pl/400x400/",
			link: "https://github.com/yovanoc/lru/",
			description: "LRU Cache Algorithm in TypeScript",
			badges: ["nodejs", "typescript"],
		},
    {
      image: "https://fakeimg.pl/400x400/",
      link: "https://github.com/yovanoc/marketplace/",
      description: "MarketPlace made with Laravel",
      badges: ["php", "laravel"],
    },
    {
      image: "https://fakeimg.pl/400x400/",
      link: "https://github.com/yovanoc/codetube/",
      description: "Youtube Clone made with Laravel",
      badges: ["php", "laravel"],
    },
    {
      image: "https://fakeimg.pl/400x400/",
      link: "https://github.com/yovanoc/cookiebot/",
      description: "Dofus PC bot made in C#",
      badges: ["c#"],
    },
  ];

  return (
    <main role="main">

			  <section className="jumbotron text-center">
				<div className="container">
				  <h1 className="jumbotron-heading big-title mb-0 pb-5">FullStack Developer</h1>
				  <p className="lead txt-muted">
					<blockquote className="blockquote">
					  <p className="mb-0">"Coming together is a beginning; keeping together is progress; working together is success."</p>
					  <footer className="blockquote-footer">Henry Ford{/* in <cite title="Source Title">Source Title</cite> */}</footer>
					</blockquote>
				  </p>
				  <p>
					<a className="btn btn-primary my-2" target="_blank" href="./CV%20-%20YOVANOVITCH.pdf">
						<i className="fas fa-newspaper"></i>
						&nbsp;Download my resume
					</a>
				  </p>
				</div>
			  </section>

			  <div className="main-container bg-light">
				<div className="container">
				<h1 className="big-title text-center pt-3">Skills</h1>
				<div className="row align-items-center">
				  <ul className="list-unstyled col">
					  <li className="media mt-0">
						<img width="64" height="64" className="mr-3" src={ts} alt="TypeScript" />
						<div className="media-body">
						  <h5 className="mt-0 mb-1">TypeScript</h5>
						  This language is a great superset of javascript, it allows to type code much faster and cleaner.
						</div>
					  </li>
						<hr/>
					  <li className="media my-4 text-right">
						  <div className="media-body">
							<h5 className="mt-0 mb-1">NodeJS</h5>
							Since 2 years, NodeJS is my favorite environment to develop some useful projects.
						  </div>
						<img width="64" height="64" className="ml-3" src={nodejs} alt="NodeJS" />
					  </li>
						<hr/>
					  <li className="media mb-0">
						<img width="64" height="64" className="mr-3" src={react} alt="React" />
						<div className="media-body">
						  <h5 className="mt-0 mb-1">React</h5>
						  React is my best choice to develop UI quickly, with real time updates.
						</div>
					  </li>
						<hr/>
					  <li className="media my-4 text-right">
						  <div className="media-body">
							<h5 className="mt-0 mb-1">Electron</h5>
							The ability to code "for the web" and compile a cross platform application is very interesting.
						  </div>
						<img width="64" height="64" className="ml-3" src={electron} alt="Electron" />
					  </li>
						<hr/>
					  <li className="media mb-0">
						<img width="64" height="64" className="mr-3" src={jssquare} alt="JavaScript" />
						<div className="media-body">
						  <h5 className="mt-0 mb-1">JavaScript</h5>
						  A good language but, now, I prefer to start projects with TypeScript.
						</div>
					  </li>
						<hr/>
					  <li className="media my-4 text-right">
						  <div className="media-body">
							<h5 className="mt-0 mb-1">PHP</h5>
							 SOME TEXT
						  </div>
						<img width="64" height="64" className="ml-3" src={php} alt="PHP" />
					  </li>
						<hr/>
					  <li className="media mb-0">
						<img width="64" height="64" className="mr-3" src={laravel} alt="Laravel" />
						<div className="media-body">
						  <h5 className="mt-0 mb-1">Laravel</h5>
						  My favorite PHP Framework.
						</div>
					  </li>
						<hr/>
					  <li className="media my-4 text-right">
						  <div className="media-body">
							<h5 className="mt-0 mb-1">C#</h5>
							With Net Core I like to develop some cross platform cli app.
						  </div>
						<img width="64" height="64" className="ml-3" src={csharp} alt="C#" />
					  </li>
					</ul>
					<hr />
				  </div>
				  <h1 className="big-title text-center">Personal Projects</h1>
				  <div className="row">
						{portfolio.map((item, index) => <ImagePortfolio key={index} portfolio={item} />)}
				  </div>
				</div>
			  </div>

			</main>
  )
}

export default Main;