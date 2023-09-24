import { ReactNode } from "react";
import { Navbar } from "../Navbar/Navbar";
import styles from "./layout.module.css";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>{children}</main>
            <footer></footer>
        </>
    );
}
