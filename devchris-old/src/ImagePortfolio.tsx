import React, { FunctionComponent } from "react";

export interface IPortfolio {
  description: string;
  image: string;
  link: string;
  badges: string[];
}

interface IImagePortfolioProps {
  portfolio: IPortfolio;
}

const ImagePortfolio: FunctionComponent<IImagePortfolioProps> = props => {
  const { description, image, link, badges } = props.portfolio;
  return (
    <div className="col-md-4">
      <div className="card mb-4 box-shadow text-center">
      <img className="card-img-top" src={image} height="180" alt={"temp"} />
      <div className="card-body">
        <p className="card-text">{description}</p>
        {badges.map((b, i) => <span key={i} className="badge badge-secondary m-1">{b}</span>)}
      </div>
      <div className="card-footer">
        <a className="card-link" target="_blank" href={link}>{link}</a>
      </div>
      </div>
    </div>
  )
}

export default ImagePortfolio;