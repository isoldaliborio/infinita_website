'use client'
import styles from './styles/Header.module.css'

//TODO: make the best header ever!!!
// Plan: 1. Header is comprised of three separate components-
    // -Logo 
    // -Navbar
        //-will utilise getPathname from next navigation to style current route's button (might have to use regEx?)
    // -LangSwitcher
        //-can use global state (e.g context) and local storage to save user's preference and implement across the whole site.
//Header must be place at the top of the screen. This currently done with 'position:fixed' and 'top:0; left:0' to force the element
//to the the top of the screen. However this solution means that elements can also sit beneath it. if so, we need to ensure proper padding
//stops any content from being obscured, and that this works across screen sizes. An alternative would be to wrap the header and all other
//elements in a flexbox, in the root Layout file.


export default function Header(){
    return <section id={styles.header}>placeholder</section>
}