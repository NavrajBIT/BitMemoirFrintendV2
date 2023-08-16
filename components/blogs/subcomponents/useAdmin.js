const { useRouter } = require("next/router");
const { useState, useEffect } = require("react");
import API from '@/components/subcomponents/scripts/apiCall';
const useAdmin = () => {
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
  const urls = [];
  const str = state.value;
  const rex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  
  let match;
  while ((match = rex.exec(str)) !== null) {
    urls.push(`https://bitmemoir.org/media/custom/${match[0]}`);
  }

  console.log(urls);

  const array3 = imagelinks.filter(entry1 => !urls.some(entry2 => entry1.url === entry2));
  if (array3.length !== 0) {
    array3.forEach((item, idx) => {
      if (idx !== 0) {
        setimagelinks(current => current.filter(fruit => fruit.id !== item.id));
        handelimagedelete(item.id);
      }
    });
  }
}

useEffect(() => {
    getimagelinks();
}, [state.value]);



const handeltopimage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();

    return new Promise((resolve, reject) => {
        input.onchange = () => {
            const file = input.files[0];
            if (/^image\//.test(file.type)) {
                console.log(file);
                settopimagefile(file);
                resolve();
            } else {
                alert('You could only upload images.');
                reject();
            }
        };
    });
};

const quillRef = useRef();

const imageHandler = async (e) => {
    const editor = quillRef.current.getEditor();
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
        const items = JSON.parse(localStorage.getItem('logininfo'));
        const file = input.files[0];
        if (/^image\//.test(file.type)) {
            const formData = new FormData();
            formData.append("image", file);
            let headersList = {
                "Authorization": `token ${items.token}`
            }
            try {
                let response = await fetch("https://bitmemoir.org/upload/", {
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
            } catch (error) {
                console.error(error);
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


    
    return { 
        state,setState,topimagefile, settopimagefile,imagelinks, setimagelinks,title, settitle,
        handleChange, modules, posthandler, handeltopimage, quillRef, title, settitle, imagelinks, setimagelinks 
    };
}


export default useAdmin;
