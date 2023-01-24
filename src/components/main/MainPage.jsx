import React from "react";
import Container from "../../short/Container";
import SubMenu from "../../short/SubMenu";
import "./MainPage.css";
import Swiper from "../../short/Swiper";
import StarRatings from "react-star-ratings";

function mainpage() {
  return (
    <React.Fragment>
      <div className="container1">
        <SubMenu />
      </div>
        <div className="container">

          <div className="containers">
            <Container />
            <Container />
            <Container />
            <Container />
          </div>

          <div className="swipermain">
            <div className="main">
              <div className="swipershadow"></div>
              <div className="swiper">
                <Swiper />
              </div>
              <div className="swipershadow"></div>
            </div>

            <div className="textbox">
              <p> <h2 className="title">KAYTEE туулайн хоол</h2>
                <br />
              Үнэ: 25000MNT
                <br />
              Хэмжээ: 2.5кг
              Хэрэглээ: Өдөрт 2 удаа
                <br />
              Хадгалах хугацаа: 
              Задалснаас хойш сэрүүн хуурай орчинд 12 сар хадгална.
              
              <br />
              <div>
                <h3>Үнэлгээ: 
                  <StarRatings />
                </h3>
              </div>
              </p>
            </div>
          </div>

        </div>
    </React.Fragment>
  );
}

export default mainpage;
