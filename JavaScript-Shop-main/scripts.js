const productForm = document.getElementById("add-product");
const allProductDiv = document.getElementById("all-product");
const productNameInput = document.getElementById("product-name");
const productImageInput = document.getElementById("product-image");
const productPirceInput = document.getElementById("produc-price");
const productTextInput = document.getElementById("product-text");

productForm.addEventListener("submit", function(e){
e.preventDefault();
  const nameValue = productNameInput.value;
  const imageValue = productImageInput.value;
  const priceValue = productPirceInput.value;
  const textValue = productTextInput.value;

  // Create Col
  const producCol = document.createElement("div");
  producCol.classList.add("col-lg-3");

  //create Singlae product div
   const producDiv = document.createElement("div");
  producDiv.classList.add("single-product");

  //create single product image

 const productImage = document.createElement("div");
  productImage.setAttribute("src", imageValue);


//create single prouct price
const productPrice = document.createElement("h5");
productPrice.innerText = priceValue;

//product name
const productName = document.createElement("h3");
productName.innerText = nameValue;


//product text
const productText = document.createElement("p");
productText.innerText = textValue;


//complet single product
producDiv.append(productImage, productPrice, productName, productText);

//complet cal
producCol.appendChild(producDiv);

//complete firs task
allProductDiv.appendChild(producCol);


});
