
import './about.css';

const About = () => {
  return (
    <div className="about">
      <div className="content">
        <h3>Purpose</h3>
        <hr/>
        <div>
        Create a full stack Web Application implementing a React.js based User Interface working in conjunction with an Express server backend connecting via a data access layer to an Atlas MongoDb Cloud Database Instance.
        </div><br/>
        <h3>Goal</h3>
        <hr/>
        <div>
        With our purpose in mind we set out to develop a chat-like web application that allows registered users to post to a dashboard viewable by all visitors. Posting is a feature we implemented along with allowing users to start a thread of replies respective to each post and add as many replies to a post as the user decides. We implemented this goal using React.js to build the user interface that communicates to an express server whose purpose is handling the various routes bridging the user inputs to and from our Atlas MongoDb database access layer storing all posts, post replies, and author information in respective tables.
        </div><br/>
        <h3>Navbar</h3>
        <hr/>
        <div>The navbar has four options that direct you to the home page, about page, contact page, and to the user page. See below for more information on these.
        </div><br/>
        <h3>Home Page</h3>
        <hr/>
        <div>The home page contains a dashboard that displays all posts by all users displaying the post category, date, title, post message, post author (clickable to display author information) and a “See Replies” button clickable to read the complete post and observe all the replies currently made to the post. Additionally in the “See Replies“ popup is where users can insert new replies by typing there reply message and hitting submit to store the reply which will automatically re-render the replies showing the new reply just made. In the dashboard you can also create a new post via the “Create Post” button which requires you to be logged in order to post. In order to submit a post you must enter a post: title, category, and Body and only when all these fields are entered can the user press submit and successfully store the posts.
        </div><br/>
        <h3>Contact Page</h3>
        <hr/>
        <div>Want to stay in the loop and know all the app features as they come out? The contact page prompts you to enter a name, email, and message which will be stored for processing.
        </div><br/>     
        <h3>User</h3>
        <hr/>
        <div>
        Users have the ability to sign up and login to the application. This page is where you execute both those functions if you are a new user and click sign up, a successful sign up means you enter your first and last name, along with an email and by clicking login you create an account and are automatically logged in. If you're a current user and click log in you enter your username and if found you are logged in.
        </div>
      </div>
    </div>
  );
};

export default About;
