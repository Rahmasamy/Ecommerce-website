//2-get All products
let containerproducts = document.querySelector(".products .container");
let title = document.getElementById("title");
let price = document.getElementById("price");
let description = document.getElementById("description");
let category = document.getElementById("category");
let image = document.getElementById("img");
const wish=document.getElementById('wish');
// get all products
let datajson = "";
let products = [];
let cartproducts=[];
let newele = [];
let whishingList= {
  
};
let objofobj={};
const productUrl = "https://fakestoreapi.com/products";
// // Make a GET request using the Fetch API
async function fetchData() {
  try {
    const response = await fetch(productUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
async function fetchOneProduct(id) {
  try {
    let response = await fetch(`https://fakestoreapi.com/products/${id + 1}`);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error Fetching data:", error);
  }
}
// Function to render data in cards
async function renderData() {
  const container = document.querySelector(".products .container");
  
  const data = await fetchData();

  if (!data) {
    return;
  }

  data.forEach((item, idx) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.innerHTML = item.title;
    const ImgContainer = document.createElement("div");
    ImgContainer.classList.add("ImageContainer");
    const Image = document.createElement("img");
    
    Image.setAttribute("src", `${item.image}`);
    ImgContainer.appendChild(Image);

    const divpriceCategory = document.createElement("div");
    divpriceCategory.classList.add("pricecateogry");
    const price = document.createElement("h3");
    price.innerHTML = ` price :${item.price} $`;

    const category = document.createElement("h3");
    category.innerHTML = item.category;

    divpriceCategory.appendChild(price);
    divpriceCategory.appendChild(category);
    const divpara = document.createElement("div");
    divpara.classList.add("divpara");

    const body = document.createElement("p");
    body.innerHTML = item.description;
    /////////////////////////////////////
    whishingList = {
      price:`${item.price}`,
      img:`${item.image}`,
      title:item.title

    }
   
    cartproducts.push(whishingList);
   
    
    divpara.appendChild(body);
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttoncontainer");
    const Button = document.createElement("button");
    Button.classList.add("Button");
    Button.innerHTML = "See More";

    buttonContainer.appendChild(Button);
    
    newele.push(buttonContainer);
    const buttonCont = document.createElement("div");
    buttonCont.classList.add("buttoncontainer2");
    const addToCart = document.createElement("button");
    addToCart.classList.add("Button2");
    addToCart.innerHTML = "Add to Cart";
    const buttonscont = document.createElement("div");
    buttonscont.classList.add("buttonscont");
    buttonscont.appendChild(Button);
    buttonscont.appendChild(addToCart);
    card.appendChild(title);
    card.appendChild(ImgContainer);
    card.appendChild(divpriceCategory);
    card.appendChild(divpara);
    card.appendChild(buttonscont);

    container.appendChild(card);
    Button.addEventListener("click", () => {
      async function oneproduct(idx) {
        const oneproduct = await fetchOneProduct(idx);
        return oneproduct;
      }

      let one = oneproduct(idx);
      
      one
        .then((value) => {
          let productcont = document.getElementsByClassName("products")[0];
          

          const container2 = document.createElement("div");
          const card = document.createElement("div");
          card.classList.add("card");
          const divpriceCategory = document.createElement("div");
          divpriceCategory.classList.add("pricecateogry");
          const title = document.createElement("h2");
          title.innerHTML = value.title;
          const category = document.createElement("h3");
          category.innerHTML = value.category;

          const price = document.createElement("h3");
          price.innerHTML = value.price;

          divpriceCategory.appendChild(price);
          divpriceCategory.appendChild(category);

          const Image = document.createElement("img");
          //console.log(item.image)
          Image.setAttribute("src", `${item.image}`);

          const body = document.createElement("p");
          body.innerHTML = value.description;
          const buttonContainer = document.createElement("div");
          buttonContainer.classList.add("buttoncontainer");
          const Button = document.createElement("button");
          Button.classList.add("Button2");
          Button.innerHTML = "See More";

          buttonContainer.appendChild(Button);
         
          const xContainer = document.createElement("div");
          xContainer.classList.add("xcontainer");
          newele.push(buttonContainer);
          const x = document.createElement("h3");
         
          x.innerHTML = "X";
          const buttonCont = document.createElement("div");
          buttonCont.classList.add("buttoncontainer2");
          const addToCart = document.createElement("button");
          addToCart.classList.add("Button2");
          addToCart.innerHTML = "Add to Cart";

         

          xContainer.appendChild(x);
          card.appendChild(title);
          card.appendChild(xContainer);
          card.appendChild(divpriceCategory);
          card.appendChild(Image);
          card.appendChild(body);
          card.appendChild(buttonContainer);
          card.appendChild(buttonCont);
          let layerPoduct = document.getElementsByClassName("layer-product")[0];
          layerPoduct.style.display = "flex";
          layerPoduct.appendChild(card);
          x.addEventListener("click", () => {
            layerPoduct.style.display = "none";
            layerPoduct.removeChild(card);
          });
        })
        .catch((err) => {
          console.log("error is", err);
        });
    });
    
    // add to the card button
    let addtocart = document.getElementsByClassName("Button2")[idx];
    
    
    addtocart.addEventListener("click", ()=> {
      wish.style.display="flex";
      document.querySelector(".clearAllProducts").style.display="block";
      // console.log(cartproducts[idx].img);
      const row = document.createElement('tr');

      row.innerHTML = `
     <tr>
      <td>
          <img src="${cartproducts[idx].img}" width="100">    
      </td>
      <td>
          ${cartproducts[idx].title}
      </td>
       <td>
          ${cartproducts[idx].price} $
      </td>
       <td>
          <a href="#" class="remove" data-id="${1}">X</a>
      </td>
  </tr>
  `
      ;
      let tableBody=document.getElementById("tablebody");
      document.getElementById("tablebody").appendChild(row);
      const deleteproducts=document.querySelectorAll(".remove");
      deleteproducts.forEach((item,idx)=> {
      
         deleteproducts[idx].addEventListener('click',removeProduct)
      })
      
     
      function removeProduct(e){
        if(e.target.classList.contains('remove')){
          e.target.parentElement.parentElement.remove();
        }
      }
      const clearAllProductsBtn=document.querySelector('.clearAllProducts button');
      clearAllProductsBtn.addEventListener('click',clearCart)

      function clearCart() {
       while(tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
       }
      }
    });
  });
}

// Call the renderData function to display data
renderData();
// handle toggle bar
const toggle = document.getElementsByClassName("toggle")[0];
const layer = document.getElementsByClassName("layer")[0];
// console.log(toggle);
toggle.addEventListener("click", () => {
  layer.classList.toggle("tooglelayer");
});

const shopCar=document.querySelector('.wishing-list img');
shopCar.addEventListener('click',() => {
  wish.style.display="flex";
})
const close=document.getElementById('close');
close.addEventListener('click',()=> {
  wish.style.display="none";
})