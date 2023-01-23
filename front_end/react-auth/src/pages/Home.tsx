

const Home = (props: {username: string; email: string}) =>{

    const github = () => {
        window.location.replace('https://github.com/zennon-sml');
    }
    const linkedin = () => {
        window.location.replace('https://www.linkedin.com/in/zennon-sampaio/');
    }

    let cardProfile;
    if(props.username){
        cardProfile = (
            <div className="container mt-5">
    
        <div className="row d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                <div className="text-center">
                    <img src="https://avatars.githubusercontent.com/u/76619871?v=4" width="100" className="rounded-circle" alt=""/>
                </div>
                
                <div className="text-center mt-3">
                    <h3 className="mt-2 mb-0">{props.username}</h3>
                    <span>{props.email}</span>
                    <div className="buttons">  
                        <button className="btn btn-outline-primary px-4" onClick={github}>github</button>
                        <button className="btn btn-primary px-4 ms-3" onClick={linkedin}>linkedin</button>
                        {/* https://www.linkedin.com/in/zennon-sampaio/
                        https://github.com/zennon-sml */}
                    </div>  
                </div>
                </div>
                </div>
            </div>
        </div>
        )
    }
        return (
       <div>
        {cardProfile}
        
        {/* <img className="row d-flex justify-content-center" src="https://github.com/zennon-sml/prog_amador/blob/main/RGB2.png?raw=true" alt="" width="50%" height="20%" /> */}    
        
        
        <div className="container mt-5">
    
        <div className="row d-flex justify-content-center">
        
        <div className="col-md-7">
            
            <div className="card p-3 py-4">
                
                <h1 >{props.username ? 'welcome home ' + props.username: 'you are not loged in'}</h1>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;