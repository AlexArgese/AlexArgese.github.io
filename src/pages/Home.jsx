function Home() {
  return (
    <div className="homepage">
      <div className="intro">
        <h1 >Alex Argese</h1>
        <h5>Hello! I’m Alex Argese, a 23-year-old engineer from Fasano, Italy, now residing in Antibes, France. I am expanding my career in data science and multimedia engineering, blending creativity with technical expertise. My foundation in Cinema and Media Engineering at Politecnico di Torino equipped me with skills in audio and video techniques, 2D/3D modelling and animation, interactive and immersive media, using software like DaVinci Resolve, Adobe Premiere, Blender, Unity...
        Now, I’m completing a Master’s in Data Science at EURECOM, focusing on machine learning, big data, and AI. This interdisciplinary journey enhances my capacity for data-driven insights, combining technology with media innovation.</h5>
      </div>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="photo_alex.png" class="d-block w-100" style={{maxHeight:'50em'}} alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="code.png" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="camera.png" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
