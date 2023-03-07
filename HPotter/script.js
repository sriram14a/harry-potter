const characterList = document.getElementById('characters');
const searchBar = document.getElementById('search')
let res = [];

searchBar.addEventListener('keyup',(e)=>{
    const searchName = e.target.value
      const filtered = res.filter((char)=>{ return (char.name.toLowerCase().includes(searchName)); })
      display(filtered)
})
async function getchar() {

    let url = await fetch("https://hp-api.onrender.com/api/characters")
    res = await url.json();
    console.log(res);
    display(res)
}


function display(data) {
    let characters = data.map((data) => {
        return `
          <li class=" row character-data mb-5">
             <div class="img-div">
             <img src="${data.image}" class="img-wrap" >
              </div>
                
                <div class="text-center col-12 col-sm-6  ">
                <h3>Name : ${data.name}</h5>
                <p >House : ${data.house}</p> 
                </div> 
          </li>`

    })
        .join('')
    characterList.innerHTML = characters;
}
getchar()


