import NotFoundimg from '../Assests/Images/404.jpg';

function NotFound() {
    return (
        <>
            <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img src={NotFoundimg} alt="404 Not Found" style={{width:"30%"}} />
                <p style={{ marginTop: "10px", fontSize: "12px", color: "#555" }}>
               <a href="https://www.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_13315300.htm#query=404%20found%20png&position=0&from_view=keyword&track=ais_user&uuid=ef392cfb-8d92-4b13-b675-86927aae9529">Image by storyset</a> on Freepik

                </p>
            </div>
          </>
    );
}

export default NotFound;
