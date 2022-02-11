import "./contact.css";


const Contact = () => {
    return (
    <section class="contact" id="contact">
    <h2 class="section-title fill">Contact</h2>
    <p class="description">send me your feedbacks here and your opinions about this portfolio and remember to be <span class="special">nice</span> <i class="fas fa-heart"></i>.</p>
    <div class="container">
      <form action="#" enctype="multipart/form-data" method="post">
        <div class="field">
          <label for="first-name">first name</label>
          <input type="text" id="first-name" placeholder="First name" required/>
        </div>
        <div class="field">
          <label for="last-name">last name</label>
          <input type="text" id="last-name" placeholder="Last name"/>
        </div>
        <div class="field">
          <label for="email-name">email</label>
          <input type="text" id="email-name" placeholder="Email" required/>
        </div>
        <textarea name="user-opinion" placeholder="Your Message..."></textarea>
        <input type="submit" value="Send Feedback" class="btn btn-primary"/>
      </form>
    </div>
  </section>
    );
};

export default Contact;
