const getData =async ()=>{
  const data = await fetch ('https://api.escuelajs.co/api/v1/products',{catch:'no-store'});
  return data.json();
}

const ServerSide =async () => {
     const data=await getData();
    return (
        <div>
            ServerSide:{data[0].title}
        </div>
    );
}

export default ServerSide;