const Notification = (props) => {
  //  Write your code here.
  const {className,iconUrl,paragraph} = props;
  const containerClassName = {`notification-container ${className}`}

  return (
    <div className={containerClassName}>
      <img className="img" src={iconUrl} />
      <p className="paragraph">{paragraph}</p>
    </div>
  )
}  
};
const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-container box-1">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <p className="paragraph">Information Message</p>
    </div>

    <div className="notification-container box-2">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="paragraph">Success Message</p>
    </div>

    <div className="notification-container box-3">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <p className="paragraph">Warning Message</p>
    </div>
    
    <div className="notification-container box-4">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <p className="paragraph">Error Message</p>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
