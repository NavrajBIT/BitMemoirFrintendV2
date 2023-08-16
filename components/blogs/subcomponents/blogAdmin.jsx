"use client";
import { Button } from "@mui/material"
import AdminUpload from "./AdminUpload";
import usetoken from "@/components/subcomponents/scripts/usetoken";
const BlogAdmin = () => {

    const {getJwtToken, setJwtTokenfunc, getrefreshToken, setrefreshtoken} = usetoken();


const handleAddBlog = async () => {
  try {
    const token = getJwtToken();

    const response = await fetch('http://127.0.0.1:8000/admin/blog/blog/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: 'title',
        image: 'image',
        author: 5,
        content: 'content',    
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

    return(
        <div style={{
            // height: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                // border:'2px solid red',
                background: '#0F303E',
                height: '50rem',
                maxWidth: '35rem',
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
                borderRadius: '8px',
                position: 'relative'
            }} >
                <div>
                <div style={{
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    textAlign:"center"
                    
                }} >Admin Panel</div>
                </div>

                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                <button style={{
                    marginTop:"2rem",
                    width: '10rem',
                    height: '3rem',
                    background: '#0F303E',
                    border: '2px solid white',
                    color: 'white',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginRight: '1rem'
                }} 
                onClick={handleAddBlog}
                >Add Blog</button>
                </div>

            </div>


        </div>

    )

}

export default BlogAdmin;