import React from 'react'

const containerStyle = {
    // border: '2px solid red',
    maxWidth: '65rem',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    padding: '0 1rem'
}

const BlogNum = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'center',
            padding:'12px'
        }}>
            <div style={containerStyle}>
                <h2 style={{marginTop:'2rem'}}>The Need for Verified Digital Credentials: Building Trust in a Digital World</h2>
                <img src="/blog/blog.png" alt="" style={{margin:'2rem 0'}}/>
                <p style={{
                    fontWeight: 'bolder',
                    lineHeight:'1.8rem'
                    // fontSize: 'rem'
                }}>Streamlining Verification Process</p>
                <p style={{
                    marginBottom: '2rem',
                    // fontSize: '0.8rem',
                    textAlign:'justify',
                    lineHeight:'1.8rem'
                }}>Streamlining Verification Processes The traditional process of verifying paper-based credentials is time-consuming and prone to errors. Employers and educational institutions often spend significant resources verifying the authenticity of certificates and degrees. Verified digital credentials simplify this process by providing a streamlined and efficient method of verification. With a few clicks, employers and recruiters can instantly validate a candidate's credentials, saving time and resources while ensuring accuracy.</p>

                <p style={{
                    fontWeight: 'bolder',
                    lineHeight:'1.8rem'
                    // fontSize: '0.8rem'
                }}>Enhancing Portability and Accessibility</p>
                <p style={{
                    marginBottom: '2rem',
                    // fontSize: '0.8rem',
                    textAlign:'justify',
                    lineHeight:'1.8rem'
                }}>Another advantage of verified digital credentials is their portability and accessibility. Unlike paper certificates, which can be easily misplaced or damaged, digital credentials can be securely stored and accessed from anywhere at any time. This allows individuals to effortlessly present their verified credentials to potential employers, educational institutions, or clients, eliminating the need for physical copies or tedious document submissions. Moreover, digital credentials can be easily shared and verified across platforms, making them more versatile and adaptable to the evolving digital landscape.</p>

                <p style={{
                    fontWeight: 'bolder',
                    lineHeight:'1.8rem',
                    // fontSize: '0.8rem',
                    textAlign:'justify'
                }}>Enable Lifelong Learning and Skill Development</p>
                <p style={{
                    marginBottom: '2rem',
                    // fontSize: '0.8rem',
                    textAlign:'justify',
                    lineHeight:'1.8rem'
                }}>Verified digital credentials also support the concept of lifelong learning and continuous skill development. As industries rapidly evolve, individuals need to acquire new skills and knowledge to remain competitive. Verified digital credentials enable professionals to showcase their ongoing learning achievements and demonstrate their commitment to staying up-to-date in their respective fields. By encouraging continuous learning and providing a credible means of recognizing those efforts, digital credentials empower individuals to adapt to the ever-changing demands of the job market.</p>
            </div>
        </div>
    )
}

export default BlogNum;