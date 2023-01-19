import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="containerr">
      <div className="card-containerr">
        <div className="cardd1">
          <img src="https://image.shutterstock.com/image-vector/trophy-cup-award-vector-icon-260nw-592525184.jpg" alt="Card 1" className="card-img" />
          <div className="cardd-body">
            <h5 className="cardd-title">Lider branzy</h5>
            <p className="cardd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
        <div className="cardd2">
          <img src="https://t3.ftcdn.net/jpg/05/49/38/76/360_F_549387688_TUgSktLSxo62FRJoIVdISSvrOD0pt25i.jpg" alt="Card 2" className="card-img" />
          <div className="cardd-body">
            <h5 className="cardd-title"> Doswiadczenie</h5>
            <p className="cardd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
        <div className="center-img-container">
        <img src="https://www.tradologie.com/lp/img/Barley.jpg" alt="Center Image" className="center-img" />
      </div>
        <div className="cardd3">
          <img src="https://img.freepik.com/free-icon/money_318-505853.jpg?w=360" alt="Card 3" className="card-img" />
          <div className="cardd-body">
            <h5 className="cardd-title"> Zaangazowanie</h5>
            <p className="cardd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
        <div className="cardd4">
          <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/employee-update-3194586-2661577.png" alt="Card 4" className="card-img" />
          <div className="cardd-body">
            <h5 className="cardd-title"> pomoc w rozwoju</h5>
            <p className="cardd-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae.</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
