import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

const ErrorPage = ({error}) => {
  return (
    <Jumbotron className="error justify-content-center" style={{height: "100vh", width: "100vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} fluid>
      <h2 className="errorTitle" style={{fontFamily: "Bungee Inline, cursive"}}><i className="bi bi-emoji-dizzy-fill"></i> Error!</h2>
      <p className="errorMessage">{error}.</p>
      <p className="errorMessage">
        Please reload or try later, or <a className="contact" href="mailto:aliceruppert@gmail.com">contact us.</a>
      </p>
    </Jumbotron>

  )
}

export default ErrorPage;
