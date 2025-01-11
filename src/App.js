import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
import "bulma/css/bulma.css";
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistant</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa1"
                image={AlexaImage}
                content="Alexa is Amazons voice-controlled virtual assistant used for tasks like answering questions, playing music, and controlling smart home devices."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana2"
                image={CortanaImage}
                content="
Cortana is Microsofts virtual assistant designed to help with tasks like reminders web searches and managing calendars"
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri"
              handle="@siri3"
              image={SiriImage}
              content='
Siri is Apples virtual assistant enabling voice-controlled tasks like sending messages setting reminders and answering questions' />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
