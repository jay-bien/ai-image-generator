import { ReactPropTypes } from "react";
import { useState, useEffect } from "react";

const Home = ( )=> {

    const [posts, setPosts ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [ loading, setLoading ] = useState( false );

    useEffect(()=>{
        setLoading( true );

        setTimeout( ()=>{
            setLoading( false);
        }, 2000)
        return ()=>{

        }
    }, []);


    return(
        <div >
            <div className="home-header">
                <h1>Previously Generated Images</h1>
                <p>
                    Browse through a collection of images that have been generated by the community using AI.
                </p>
            </div>
            <main>
                <div className="search">
                    <form>
                        <label htmlFor="search">Search Images</label>
                        <input name="search" className="search" id="search"></input>
                    </form>
                </div>
                {
                    loading 
                    ? <div>Loading!!</div>
                    : (
                <section className="posts">
                    { posts && posts.map( post => (
                        <div className="card">

                        </div>
                    ) )}

                </section>
                    )}
            </main>
            
        </div>
    )
}

export default Home;