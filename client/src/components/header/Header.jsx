import styles from './Header.module.css'
import logo from '../../images/logo_dark.svg'
import locator from '../../images/map-locator 1.svg'
import heart from '../../images/heart.svg'
import search from '../../images/search.svg'
import phone from '../../images/phone.svg'
import Button from "../Button/Button";

const Header = () => {
    return(
        <div className={styles.root}>
            <div>
                <img src={logo} alt={'logo'} />
            </div>
            <div>
                <img src={locator} alt={'locator'} />
                <select>
                    <option>Казань</option>
                    <option>СПб</option>
                    <option>Москва</option>
                </select>
            </div>
            <div>
                <Button title={'Каталог'} active={'active'} />
            </div>
            <div className={styles.buttonSet}>
                <Button title={'Частые вопросы'} />
                <Button title={'Сотрудничество'} />
            </div>
            <div className={styles.container}>
                <img src={heart} alt={'heart'} />
                <div className={styles.searchBlock}>
                    <img src={search} alt={'search'} />
                    <div>Поиск по названию</div>
                </div>
                <div className={styles.phoneBlock}>
                    <img src={phone} alt={'phone'} />
                    <div>8 (843) 528-65-48</div>
                </div>
            </div>
        </div>
    )
}

export default Header;