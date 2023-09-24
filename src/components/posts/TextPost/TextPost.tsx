import styles from "./textPost.module.css";
export function TextPost() {
    return (
        <div className={styles.imagePostContainer}>
            <h5>Author: Malcolmintheemiddle</h5>
            <div className={styles.textContainer}>
                <h4>Why are oranges so delicious?</h4>
                <p>
                    Ever since I was a little boy, oranges have been my go to
                    fruit. They have shaped the man I am today, in ways no other
                    fruit could've.
                </p>
            </div>
            <div className={styles.likeDislikeContainer}>
                <div className={styles.iconContainer}>👍</div>
                <div className={styles.iconContainer}>👎</div>
            </div>
        </div>
    );
}
