
        
const qoutes=document.getElementById("qoutes")
const author=document.getElementById("author")
const next=document.getElementById("btn")
const tweetme= document.getElementById("tweet")


next.addEventListener('click',()=>{
    getqoutes();
})
let realdata="";
let qoutesdata="";
const getnewqoutes=()=>{
    let num= Math.floor(Math.random()*1670)
    // console.log(num)
        //  console.log(realdata[num].text)
        //  console.log(realdata[num].author)
        qoutesdata=realdata[num]
         qoutes.innerText=` ${qoutesdata.text}`;
         if(qoutesdata.author==null){
             author.innerText="Unknown";
         }
         else{
         author.innerText=`~ ${qoutesdata.author}`;
         }
   }
const getqoutes= async()=>{
      const api="https://type.fit/api/quotes";
  
  try {
      let data = await fetch(api);
      realdata= await data.json()
      getnewqoutes();
 
  } catch (error) {
      
  }    

}


tweetme.addEventListener('click',()=>{
    let post=`https://twitter.com/intent/tweet?text=${qoutesdata.text}`;
    window.open(post)
})


getqoutes();
