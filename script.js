const btn=document.querySelector("button");
const para=document.querySelector("p");

 async function generateJoke(){
   
        btn.innertext="Loading";
        para.textContent="Updating...."
    
        setTimeout(async() => {
            
        

    const url=`https://api.api-ninjas.com/v1/dadjokes`;
    const header={'X-Api-Key':"ytYd9sxXxybfYoha7gAVCQ==170MPomhGe1VgSBi"};

    try{
       const response=await fetch(url,{
        headers:header
       });
       const data=await response.json();
       para.textContent=data[0].joke;
       console.log(data);
       
    }catch(err){
       console.log(err);
    }
       //finally{
    //     this.innertext="Tell Me a Joke"
    // }
}, 2000);

}
btn.addEventListener("click",generateJoke);
