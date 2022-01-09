import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> My Projects</h1>

      <div className="container">
        <div className="item">
          <h3>Porter.com</h3>
          <img
            src="https://entrackr.com/wp-content/uploads/2020/11/porter-.jpg"
            alt=""
          />
          <div className="features">
          <h4><u>Features</u></h4>
          <li>Location-based vehicle gallery</li>
          <li>User authentication</li>
          <li>Auto-detection of location</li>
        </div>

        <div className="techstack">
            <h4><u>Tech-Stack</u></h4>
            <br />
            <h5>HTML | CSS | Javascript | MongoDb | Express | Mongoose</h5>


        </div>

        <div className="btn">
            <h4><a href="https://github.com/stockchandu/Project-Porter-v2">CODE</a></h4>
            <h4><a href="https://porter-logistics.herokuapp.com/">DEMO</a></h4>
        </div>
          
        </div>

        <div className="item">
          <h3>Shop.com</h3>
          <img
            src="https://img.shop.com/Image/images/shopcom/shop-s-logo-1200x630.jpg"
            alt=""
          />
          <div className="features">
          <h4><u>Features</u></h4>
          <li>Social Sign-in/Sign-up</li>
          <li>Product-based search</li>
          <li>User authentication</li>
        </div>

        <div className="techstack">
            <h4><u>Tech-Stack</u></h4>
            <br />
            <h5>HTML | CSS | Javascript</h5>


        </div>

        <div className="btn">
            <h4><a href="https://github.com/masai-course/nethravathi_fw11_133/tree/master/unit-3/sprint-4/optional/shop.com">CODE</a></h4>
            <h4><a href="https://shop-clone-gabr0crnj-nethravathi1997.vercel.app/">DEMO</a></h4>
        </div>
        </div>

        <div className="item">
          <h3>Myntra.com</h3>
          <img
            src="https://ship.shoppre.com/wp-content/uploads/2019/04/myntra.jpg"
            alt=""
          />
          <div className="features">
          <h4><u>Features</u></h4>
          <li>user SignIn/SignUp</li>
          <li>Product Based Gallery</li>
          <li>Cart functionalities</li>
        </div>

        <div className="techstack">
            <h4><u>Tech-Stack</u></h4>
            <br />
            <h5>HTML | CSS | Javascript | MongoDb | Express | Postman</h5>


        </div>

        <div className="btn">
            <h4><a href="https://github.com/nkil123/MyntraFullStack">CODE</a></h4>
            <h4><a href="https://mysterious-depths-64439.herokuapp.com/">DEMO</a></h4>
        </div>
        </div>
      </div>
    </div>
  );
}
