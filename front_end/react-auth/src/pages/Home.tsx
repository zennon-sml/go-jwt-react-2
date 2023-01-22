import React, { useEffect, useState } from "react";

const Home = (props: {username: string}) =>{
        return (
        <div>
            <img className="mb-4" src="https://github.com/zennon-sml/prog_amador/blob/main/RGB2.png?raw=true" alt="" width="814" height="200" />
            <br />
            <hr />
                <h1>{props.username ? 'welcome home ' + props.username: 'you are not loged in'}</h1>
        </div>
    )
}

export default Home;