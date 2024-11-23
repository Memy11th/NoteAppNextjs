// A functions to call Apis 

const Fetchfn = (URL : string,cacheType?:string,cacheTime?:number)=> fetch(URL,{cache: cacheType  ,next:{revalidate:cacheTime}  });


