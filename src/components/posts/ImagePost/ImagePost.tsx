import styles from "./imagePost.module.css";
export function ImagePost() {
    return (
        <div className={styles.imagePostContainer}>
            <h5>Author: Malcolminthemiddle</h5>
            <img
                src="data:image/jpeg;base64,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"
                alt=""
            />
            <div className={styles.likeDislikeContainer}>
                <div className={styles.iconContainer}>👍</div>
                <div className={styles.iconContainer}>👎</div>
            </div>
        </div>
    );
}
