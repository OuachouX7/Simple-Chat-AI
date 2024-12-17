import "../styles/section.css";
import blur from "../images/Group 2.svg";

const Section = ({ resp, sub }) => {
  return (
    <div className="section-container">
      {sub ? (
        <div className="response-container">
          <div className="req-res">
            {resp.map((r) => (
                  <>
                    <p className="req">{r.req}</p>
                    {resp && <p className="res">{r.res}</p>}
                  </>
                ))}
          </div>
        </div>
      ) : (
        <div className="section">
          <h1>
            How can we <span className="assist">assist</span> you today?
          </h1>
          <p className="para">
            Get expert guidance powered by AI agents specializing in Sales,
            Marketing, and Negotiation. Choose the agent that suits your needs
            and start your conversation with ease.
          </p>
          <img className="blur" src={blur} alt="blur" />
        </div>
      )}
    </div>
  );
};

export default Section;
