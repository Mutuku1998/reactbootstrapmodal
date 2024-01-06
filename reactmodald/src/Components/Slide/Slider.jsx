import React from "react";
import logo from "../../assets/oryxlogo.png";
import img1 from '../../assets/qatar1.webp';
import img2 from '../../assets/qatar2.webp';
import img3 from '../../assets/qatar4.webp'
import '../../styles/slider.css'
const Slider = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" style={{ width: "50px", height: "50px" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Book
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  How to Book
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Experience
                </a>
              </li>

              <li className="nav-item">
                <a className="getaccount" href="">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="getaccount" href="">
                sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-bs-hover="false" >
      <div class="carousel-indicators d-none d-sm-flex">
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
</div>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption ">
        <h5 className="animated fadeInDown" style={{animationDelay:'1s'}}>First slide label</h5>
        <p className="animated fadeInDown" style={{animationDelay:'1s'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption ">
        <h5 className="animated fadeInDown" style={{animationDelay:'1s'}}>Second slide label</h5>
        <p className="animated fadeInDown" style={{animationDelay:'1s'}}>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption ">
        <h5 className="animated fadeInDown" style={{animationDelay:'1s'}}>Third slide label</h5>
        <p className="animated fadeInDown" style={{animationDelay:'1s'}}>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>

</div>


<div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos provident quaerat, odio adipisci magnam ad consequuntur qui amet optio nesciunt architecto nulla cupiditate voluptate ea cumque natus, sed assumenda eum!</div>
    </div>

    

    
  );
};

export default Slider;
