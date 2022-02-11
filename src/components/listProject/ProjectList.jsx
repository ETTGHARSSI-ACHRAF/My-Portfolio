import "./projectList.css";
import "../contact/contact.css";

const ProductList = () => {
    return (
        <section class="projects" id="projects">
  <h2 class="section-title fill">Projects</h2>
  <div class="container">
    <div class="projects-content">
      <div class="project">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="Project Image"/>
        </div>
        <div class="project-details">
          <h3 class="project-tile">PoterieShop</h3>
          <p class="project-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quos recusandae. Vitae hic sit accusantium!</p>
          <div class="btns-group">
            <a href="#" class="btn btn-primary">view project</a>
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="Project Image"/>
        </div>
        <div class="project-details">
          <h3 class="project-tile">MarocShip</h3>
          <p class="project-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quos recusandae. Vitae hic sit accusantium!</p>
          <div class="btns-group">
            <a href="#" class="btn btn-primary">view project</a>
          </div>
        </div>
      </div>
      <div class="project">
        <div class="project-image">
          <img src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="Project Image"/>
        </div>
        <div class="project-details">
          <h3 class="project-tile">Food7Go</h3>
          <p class="project-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, quos recusandae. Vitae hic sit accusantium!</p>
          <div class="btns-group">
            <a href="https://food7go.com/" class="btn btn-primary">view project</a>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="more-projects">
      <a href="https://codepen.io/FedLover/" target="_blank" class="btn btn-primary" id="profile-link">show more <i class="fas fa-chevron-right"></i></a>
    </div> */}
  </div>
</section>
    );
};

export default ProductList;
