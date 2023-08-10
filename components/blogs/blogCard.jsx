import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from './blog.module.css';

const BlogCard = () => {
    const router = useRouter();

    return (
        <div className={styles.blogCards} onClick={() => router.push('/blog/blogNum')}>
            <img src="/blog/blog.png" alt="" />
            <div className={styles.blogMainText}>
                <p>The Need for Verified Digital Credentials:</p>
                <p>Building Trust in a Digital World</p>
            </div>
            <span className={styles.blogText}>In today's increasingly digital world, where information can be easily manipulated and falsified, the </span>
            <Link href="/blog/blogNum" legacyBehavior>
                <a className={`${styles.blogText} ${styles.blogLink}`}>read more</a>
            </Link>
        </div>
    );
}

export default BlogCard;