'use client'

import Link from 'next/link';
import BlogCard from './blogCard';
import BlogFullCard from './blogFullCard';
import styles from './blog.module.css';
import { useRouter } from 'next/navigation';

const containerStyle = {
    // border: '2px solid red',
    maxWidth: '65rem',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
}

const Blog = () => {
    const router = useRouter();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={containerStyle}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <h3>Top Blogs</h3>
                    <div>
                        <button className={styles.button}>Sort</button>
                        <button className={styles.button}>Filter</button>
                    </div>
                </div>

                <div className={styles.blogCardsDiv}>
                    {
                        Array.from({ length: 6 }).map((blog, index) => {
                            return (
                                <BlogCard key={index} onClick={() => {
                                    console.log(`blog clicked`)
                                    // router.push('/blogNum')
                                }} />
                            );
                        })
                    }
                </div>
                <div className={styles.blogCardsDiv}>
                    {
                        Array.from({ length: 3 }).map((blog, index) => {
                            return (
                                <BlogFullCard key={index} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Blog;