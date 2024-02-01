import {useLoaderData} from 'react-router-dom'


function GitHub() {
    const data = useLoaderData();
    // const [data,setdata]= useState([])
    // useEffect((data)=>{
    //     fetch('https://api.gitHub.com/users/Shaikhatif17')
    //     .then(Response=>Response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Followers :{data.followers}
      <img src={data.avatar_url} alt="git picture"  width={300}/>
      
    </div>
  )
}

export default GitHub;

export const gitHubInfoLoader = async ()=>{
   const response = await fetch('https://api.gitHub.com/users/Shaikhatif17')
return response.json();
};
