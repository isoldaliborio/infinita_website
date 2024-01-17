'use client'
import NavigationBar from './NavigationBar'
import styles from './styles/Header.module.css'

//TODO: make the best header ever!!!

//Header is comprised of three separate components-
    // -Logo (image)
    // -NavigationBar (Links- dynamically generated?)
    // -LanguageSwitcher (useContext for persistence across site? Local Storage?)

//Header is placed at the top of the screen. This currently done with 'position:fixed' and 'top:0; left:0' to force the element
//to the the top of the screen. However this solution means that elements can also sit beneath, and we will need to ensure proper padding
//stops any content from being obscured, and that this works across screen sizes. An alternative would be to wrap the header and all other
//elements in a flexbox, in the root Layout file.

//Header is rendered in layout.tsx in the app folder, meaning it will persist across all page routes.


export default function Header(){
    return <div id={styles.header}>
        logo
        <NavigationBar/>
        LanguageSwitcher
    </div>
}