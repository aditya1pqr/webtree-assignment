import React from "react";

function Card(users)
{
    //console.log(users.users.results[0].gender)
    return (
<>



<a href="#" className="flex flex-col mt-10 ml-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"src={users.users.results[0].picture.large} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{users.users.results[0].name.first}<span className="ml-4">{users.users.results[0].name.last}</span></h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{users.users.results[0].gender}</p>
        <p className=" dark:text-white">{users.users.results[0].phone}</p>
    </div>
</a>






           {/* <div classNameName="flex  w-96 h-[12rem]">
             <div><img src={users.users.results[0].picture.medium} alt="" /></div>
             <div>
                <div classNameName="flex">
                    <div>{users.users.results[0].name.first}</div>
                    <div>{users.users.results[0].name.last}</div>
                </div>
                <div>{users.users.results[0].gender}</div>
                <div>{users.users.results[0].phone}</div>
             </div> */}







           {/* </div> */}

</>
    )
}

export default Card;