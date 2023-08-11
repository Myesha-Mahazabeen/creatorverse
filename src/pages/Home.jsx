import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

function Home() {
    return (
        <div>
            <Nav />

            <main className="Container">
                <Outlet />
            </main>

            <footer>
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Creatorverse. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
