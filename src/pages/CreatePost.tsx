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
            <h1>Create Post</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium aliquid quia soluta non et, error consequatur ducimus, praesentium autem qui natus ut libero voluptatibus cum recusandae, optio enim vero numquam.</p>
            <p>{form.prompt}</p>
            <section>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name</label>
                        <input onChange={ onChangeInput } name="name"></input>
                        <label htmlFor="prompt">Your Prompt</label>
                        <input onChange={ onChangeInput } name="prompt"></input>
                        <button type="submit">Generate Image</button>
                    </form>
            </section>
        </div>
    )
}

export default CreatePost;