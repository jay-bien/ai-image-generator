import { FormEventHandler, ReactPropTypes, useState } from "react";


const CreatePost = ( )=> {

    const [loading, setLoading] = useState(false);
    const [generatingImg, setGeneratingImg ] = useState( false );
    const [form, setForm] = useState({
        name:"",
        prompt:"",
        photo:""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log({ e });
    }
    const onChangeInput =  (e: React.ChangeEvent<HTMLInputElement>): void=>{
        setForm( {...form, [e.target.name]:e.target.value} );
    }
    return(
        <div>
            <div className="header">
            <h1>Text to Image AI Image Generator</h1>
            <p>
Use your words to bring an image to life by leveraging the power of AI using this text prompt.
The more descriptive you are about what you want, the better the results will be.
            </p>
            </div>

            <p>{form.prompt}</p>
            <section>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input onChange={ onChangeInput } name="name"></input>
                        </div>
                        <div>    
                            <label htmlFor="prompt">Your Prompt</label>
                            <input onChange={ onChangeInput } name="prompt"></input>
                        </div>

                        <button type="submit">Generate Image</button>
                    </form>
            </section>
        </div>
    )
}

export default CreatePost;