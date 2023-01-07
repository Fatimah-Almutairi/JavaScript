import Link from "next/link";

import styles from '../styles/Navbar.module.css'

function Navbar(){
    return(
        <div ClassName={styles.bg}>
        <Link href = "/">Home</Link>
        <Link href = "/about">About</Link>
        <Link href = "/contact">Contact</Link>
        </div>
    )
}

export default Navbar