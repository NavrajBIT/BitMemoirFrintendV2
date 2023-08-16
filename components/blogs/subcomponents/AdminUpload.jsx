"use client";
import React, { useMemo, useRef, useState } from 'react'
import { useEffect, useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useAdmin from './useAdmin';
import { useRouter } from "next/navigation";
import usetoken from '@/components/subcomponents/scripts/usetoken';
import API from '@/components/subcomponents/scripts/apiCall';
const AdminUpload = () => {
    const { getJwtToken, setJwtTokenfunc, getrefreshToken, setrefreshtoken } = usetoken();
    const api = API();
    const [state, setState] = useState({ value: null });
    const router = useRouter();
    const [topimagefile, settopimagefile] = useState();
    const [title, settitle] = useState(null);
    const [imagelinks, setimagelinks] = useState(
        [{
            id: null,
            url: null
        }]
    );
    const handleChange = value => {
        setState({ value });
        console.log(state.value);
    };
 
    function getimagelinks() {
        var m,
            urls = [],
            str = state.value,
            rex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        while (m = rex.exec(str)) {
            urls.push(`http://127.0.0.1:8000/media/custom/${m[0]}`);
        }
        console.log(urls);
        let array3 = imagelinks.filter(entry1 => !urls.some(entry2 => entry1.url === entry2));
        if (array3.length !== 0) {
            array3.map((item, idx) => {
                if (idx !== 0) {
                    setimagelinks((current) =>
                        current.filter((fruit) => fruit.id !== item.id)
                    );
                    handelimagedelete(item.id);
                }
            })
        }
    }

    useEffect(() => {
        getimagelinks();
    }, [state.value]);

    const handeltopimage = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (/^image\//.test(file.type)) {
                console.log(file);
                settopimagefile(file);
            } else {
                alert('You could only upload images.');
            }
        };
    }


    const quillRef = useRef();

    const imageHandler = (e) => {
        const editor = quillRef.current.getEditor();
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            // const items = JSON.parse(localStorage.getItem('logininfo'));
            const token = getJwtToken();
            const file = input.files[0];
            if (/^image\//.test(file.type)) {
                console.log(file);
                const formData = new FormData();
                formData.append("image", file);
                let headersList = {
                    "Authorization": `token ${token}`
                }
                let response = await fetch("http://127.0.0.1:8000/upload/", {
                    method: "POST",
                    body: formData,
                    headers: headersList
                });
                if (response.ok === true) {
                    let data = await response.text();
                    data = JSON.parse(data);
                    editor.insertEmbed(editor.getSelection(), "image", data.url);
                    let obj = {
                        id: data.id,
                        url: data.url
                    }
                    setimagelinks(prevState => ([...prevState, obj]));
                } else {
                    alert("Error While adding image try again!!!");
                }
            } else {
                // ErrorToast('You could only upload images.');
            }
        };
    }


    const posthandler = async () => {
        if (title.trim() === '') {
            alert('Please enter a title');
            return;
        }
    
        if (state.value.trim() === '') {
            alert('Please enter the content');
            return;
        }
    
        if (items.user_id.trim() === '') {
            alert('Please provide the author ID');
            return;
        }
    
        try {
            const response = await api.crud("POST", "posts/create/", {
                title: `${title}`,
                content: state.value,
                author_id: `${items.user_id}`,
                heading_image: topimagefile
            });
    
            console.log(response);
            if (response.error) {
                alert(response.error);
            } else {
                alert("Post Added Successfully");
                router.push("/blog");
            }
        } catch (error) {
            console.error(error);
        }
    }
    




    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', "strike"],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['image', "link",],
                [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
            ],
            handlers: {
                image: imageHandler
            }
        },
    }), []);

    return (
        <div>
            <div style={{ color: "white", textAlign: "center", fontSize: "30px", fontWeight: "600" }} className="">
                Add Post
            </div>
            <div style={{ display: "block", minWidth: "100%", background: "white" }} className="verifypage">
                <form style={{ marginLeft: "auto", marginRight: "auto", width: "60%", paddingTop: "3%" }}>
                    <div>
                        <label
                            htmlFor="email"
                            style={{
                                display: "block",
                                marginBottom: "0.5rem",
                                color: "black",
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                fontWeight: "500",
                            }}
                        >
                            Title
                        </label>
                        <input
                            type="email"
                            onChange={(e) => {
                                settitle(e.target.value);
                            }}
                            id="email"
                            style={{
                                display: "block",
                                padding: "0.625rem",
                                backgroundColor: "#F9FAFB",
                                color: "black",
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                width: "100%",
                                borderRadius: "0.5rem",
                                borderWidth: "1px",
                                borderColor: "#D1D5DB",
                            }}
                            placeholder="name@flowbite.com"
                            required=""
                        />
                    </div>
                    <div>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "0.5rem",
                                color: "black",
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                fontWeight: "500"
                            }}
                        >
                            Upload Top Image
                        </label>
                        <input
                            type="file"
                            onClick={handeltopimage}
                            style={{
                                display: "block",
                                padding: "0.625rem",
                                backgroundColor: "#F9FAFB",
                                color: "#111827",
                                fontSize: "0.875rem",
                                lineHeight: "1.25rem",
                                width: "100%",
                                borderRadius: "0.5rem",
                                borderWidth: "1px",
                                borderColor: "#D1D5DB",
                            }}
                            required=""
                        />
                    </div>
                </form>
                <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto", marginTop: "7rem" }} className="">
                    <div className="text-editor">
                        <ReactQuill style={{ color: "black" }} theme="snow" ref={quillRef} modules={modules} value={state.value}
                            onChange={handleChange} />
                    </div>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            posthandler();
                        }}
                        style={{
                            marginTop: "1rem",
                            display: "block",
                            padding: "0.625rem",
                            backgroundColor: "blue",
                            color: "white",
                            fontSize: "0.875rem",
                            lineHeight: "1.25rem",
                            width: "10%",
                            borderRadius: "0.5rem",
                        }} type="button" >Post</button>

                   
                </div>
            </div>
        </div>
    )
}

export default AdminUpload;