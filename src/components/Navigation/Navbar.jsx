import styles from "./Navigation.module.css";
const Navbar = () => {
  return (
    <nav className={` ${styles.navigation} container `}>

        <div className='logo'>
            <img src="/image/logo-2.png" alt="do some coding logo" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

    </nav>
  )
}

export default Navbar
