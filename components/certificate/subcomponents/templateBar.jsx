const { default: Button } = require("@/components/subcomponents/button/button");
import Image from "next/image";
import certImage from "@/public/assets/cert.png";
import "./templateBar.css";
import { useRouter } from "next/navigation";

const TemplateBar = () => {
    
    const router = useRouter();
   
    const templates=[
        {
            name: "Certificate of Completion",
        },
        {
            name: "Certificate of Achievement",
        },
        {
            name: "Certificate of Participation",
        },
    ];
    return (
        <div className="template-bar">
            <div style={{
                fontSize:"1.5rem",
                marginTop:"-2rem"
            }}>Templates</div>
            <div className="template-bar-recently-used-box">
                <div style={{
                    marginTop:"1rem",
                    fontSize:"1rem",
                    marginBottom:"1rem"
                }}>Recently Used</div>
                <div className="template-bar-recently-used">
                    {templates.map((template) => {
                        return (
                            <div key={template.name} className="template-bar-recently-used-template">
                                <div className="template-bar-recently-used-template-image">
                                    {/* <img src={certImage} alt={template.name} /> */}
                                    <Image src={certImage} alt={template.name} style={{
                                        width:"90%",
                                        height:"auto",
                                        borderRadius:"0.3rem",
                                    }}/>
                                </div>
                            </div>
                        );
                    })}
                </div> 
                <p style={{
                    color:"#00D4FF",
                    cursor:"pointer",
                    marginTop:"1rem",
                    marginLeft:"1rem",
                    textAlign:"center",
                }} className="template-bar-recently-used-button">Explore</p>
            </div>
            <div className="template-bar-recently-used-box">
                <div style={{
                    fontSize:"1rem",
                    marginBottom:"1rem"
                }}>Free Templates</div>
                <div className="template-bar-recently-used">
                    {templates.map((template) => {
                        return (
                            <div className="template-bar-recently-used-template">
                                <div className="template-bar-recently-used-template-image">
                                    <Image src={certImage} alt={template.name} style={{
                                        width:"90%",
                                        height:"auto",
                                        borderRadius:"0.3rem",
                                    }}/>
                                </div>
                            </div>
                        );
                    })}   
                </div>
                <p style={{
                    color:"#00D4FF",
                    cursor:"pointer",
                    marginTop:"1rem",
                    marginLeft:"1rem",
                    textAlign:"center",
                }} className="template-bar-recently-used-button">Explore </p>
            </div>

            <div className="template-bar-recently-used-box">
                <div style={{
                    fontSize:"1rem",
                    marginBottom:"1rem"
                }}>Premium Templates</div>
                <div className="template-bar-recently-used">
                    {templates.map((template) => {
                        return (
                            <div className="template-bar-recently-used-template">
                                <div className="template-bar-recently-used-template-image">
                                    <Image src={certImage} alt={template.name} style={{
                                        width:"90%",
                                        height:"auto",
                                        borderRadius:"0.3rem",
                                    }}/>
                                </div>
                            </div>
                        );
                    })}   
                </div>
                <p style={{
                    color:"#00D4FF",
                    cursor:"pointer",
                    marginTop:"1rem",
                    marginLeft:"1rem",
                    textAlign:"center",
                }} className="template-bar-recently-used-button">Explore</p>
            </div>

            <div className="button-create-template">
                <button style={{
                    color:"white",
                    backgroundColor:"#0094B2",
                    padding:"1rem",
                    borderRadius:"0.2rem",
                    border:"none",
                    marginTop:"3rem",
                    marginLeft:"10rem",
                    cursor:"pointer",
                }}
                onClick={
                    () => {
                        router.push("/certCreator");
                    }
                }
                >Create Custom Template</button>
            </div>

        
        </div>
    );
}

export default TemplateBar;