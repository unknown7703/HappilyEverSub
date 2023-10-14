import React from 'react';
import { useSelector } from 'react-redux' ;


const PageThree =()=>{
    const posts=useSelector((state)=>state.posts)

let display =`your name ${posts.name} aged ${posts.age} has been added to the system you may exit`;
    return(<div class="flex flex-col min-h-full justify-center align items-center mt-10 ml-10 mr-10" >
        {display}
    </div>)
}

export default PageThree;