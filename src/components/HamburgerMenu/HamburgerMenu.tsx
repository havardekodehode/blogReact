import { useState } from "react";
import styles from "./hamburgerMenu.module.css";
import { Link } from "react-router-dom";
import { LinkContainer } from "./LinkContainer/LinkContainer";

export function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <svg
                onClick={() =>
                    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
                }
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="11.5"
                    y1="18.5"
                    x2="38.5"
                    y2="18.5"
                    stroke="#FFFCF2"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <line
                    x1="11.5"
                    y1="26.5"
                    x2="38.5"
                    y2="26.5"
                    stroke="#FFFCF2"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <line
                    x1="11.5"
                    y1="34.5"
                    x2="38.5"
                    y2="34.5"
                    stroke="#FFFCF2"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </svg>
            {menuOpen ? (
                <div className={styles.menuContainer}>
                    <div className={styles.subMenu} id="feed">
                        <h5>Feed</h5>
                    </div>
                    <div className={styles.subMenu} id="following">
                        <h5>Following</h5>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to={"profiles/1"}
                        >
                            <LinkContainer />
                        </Link>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
