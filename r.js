const inpu = document.getElementById('filter')
const ul = document.getElementById('userlist')
const listItems=[]

getdata()

inpu.addEventListener('input', ()=>{
  ab(inpu)

} 
)
async function getdata(){
  const res=await fetch('https://randomuser.me/api/?results=50')
  const {results}= await res.json()

  console.log(results);
     ul.innerHTML='';

     results.forEach(element => {

         const li=document.createElement('li')
          listItems.push(li)

         li.innerHTML=`<img src="${element.picture.large}" alt="yo">
         <div class="user-info">
            <h4>${element.name.first} ${element.name.last}</h4>
            <p>${element.location.city},${element.location.country}</p>
         </div>
         
         `
       ul.appendChild(li)
     });

}

function ab(e){
    listItems.forEach(item => {
      if(item.innerText.toLowerCase().includes(e.value.toLowerCase())){
        item.classList.remove('hide')
      }else{
        item.classList.add('hide')
      }
    })
}



