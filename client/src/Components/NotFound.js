import NotFoundimg from '../Assests/Images/404.png';

function NotFound() {
    return (
        <>
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img src={NotFoundimg} alt="404 Not Found" />
            </div>
        </>
    );
}

export default NotFound;
