import styles from '../pageStyles/mainPage.module.css'
import Navbar from "../components/Navbar/Navbar";
import {useLocation} from "react-router-dom";
import UrlDisplay from "../components/UrlDisplay/UrlDisplay";

const MainPage = () => {
    const location = useLocation();
    const currentUrl = location.pathname;

    return(
        <div className={styles.root}>
            <Navbar />
            <div className={styles.title}>Главная страница</div>
            <UrlDisplay currentUrl={currentUrl} />
        </div>
    )
}

export default MainPage;