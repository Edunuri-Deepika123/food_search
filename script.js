let url = "https://world.openfoodfacts.org/api/v2/search?categories_tags=";
//let url = "https://world.openfoodfacts.org/cgi/search.pl?action=process&json=1&search_terms=";


let food=document.querySelector("input");
let result= document.querySelector("#result");
let h2=document.querySelector("h2");
let p=document.querySelector("p");
let image=document.querySelector("img");

let btn=document.querySelector("#btn");
btn.addEventListener("click",async function () {
    let product=food.value;
     await getFood(product); 
     
    
});




async function getFood(product){
    try{
    let res=await fetch(url+product+"&json=true");
    let data=await res.json();
    console.log(data);
    let item=data.products[0];
    //let item=products.find(p=>p.product_name&&p.image_url);

    if(!item){
        
        result.innerHTML="no food found";
        h2.innerText="";
        image.src="";
    }
    else{
        
        h2.innerText=item.product_name || "no name";
        image.setAttribute("src",item.image_url);
        p.innerText=item.brands||"unknown";
        p.innerText=item.categories ||"no itmes";
    }

    }

    catch (e) {
        // This only runs if the fetch fails or the code CRASHES
        console.error("The error is:", e);
        result.innerHTML = "Error: " + e.message;
      }
      }
    
    
    
