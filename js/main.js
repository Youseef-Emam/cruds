var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");
var searchInput = document.getElementById("searchInput");
var Adds = document.getElementById("productAdd");
var Updates = document.getElementById("productUpdate");
var indexUpdate = 0;
var proudctData = [];

//valaditions var
var valdaitionNameMassage = document.getElementById("valdaitionNameMassage");
var valdaitionPriceMassage = document.getElementById("valdaitionPriceMassage");
var valdaitionCategoryMassage = document.getElementById("valdaitionCategoryMassage");
var valdaitionDescriptionMassage = document.getElementById("valdaitionDescriptionMassage");

if (localStorage.getItem("products") != null) {
    proudctData = JSON.parse(localStorage.getItem("products"));
    showData();
}
// proudctData = JSON.parse(localStorage.getItem("products"));
// showData();

//function to add
function productAdd() {
if(valdaitionName() == true && valdaitionPrice()== true &&valdaitionCategory()==true &&valdaitionDes()==true){
        // console.log(productNameInput.value);
    // console.log(productPriceInput.value);
    // console.log(productCategoryInput.value);
    // console.log(productDescriptionInput.value);
    var product = {
        Name: productNameInput.value,
        Price: productPriceInput.value,
        Category: productCategoryInput.value,
        Description: productDescriptionInput.value
    };

    proudctData.push(product);
    localStorage.setItem("products", JSON.stringify(proudctData));

    showData();

    // removeProduct();

    console.log(proudctData);
}
}
/*
                    <tr>
                        <td>iphone</td>
                        <td>10000</td>
                        <td>mobile</td>
                        <td>dawda</td>
                    </tr>
*/

//function to clear form
function removeProduct() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
};

//show tabel data
function showData() {
    var cartona = "";
    for (var i = 0; i < proudctData.length; i++) {
        cartona += `<tr >
        <td class="bg-info text-dark fs-3">${i}</td>
        <td class="bg-info text-dark fs-3">${proudctData[i].Name}</td>
        <td class="bg-info text-dark fs-3">${proudctData[i].Price}</td>
        <td class="bg-info text-dark fs-3">${proudctData[i].Category}</td>
        <td class="bg-info text-dark fs-3">${proudctData[i].Description}</td>
        <td class="bg-info text-dark fs-3"><button onclick="udpateIcone(${i})" class="btn btn-success "><i class="fa-solid fa-pen-to-square fs-3"></i></button></td>
        <td class="bg-info text-dark fs-3"><button onclick = "deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash fs-3"></i></button></td>
        </tr>`
    };

    document.getElementById("tabel-tbody").innerHTML = cartona;
}
"".toLowerCase
function deleteItem(index) {
    proudctData.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(proudctData));
    showData();
}

function search() {
    var term = (searchInput.value);
    var cartona = "";
    for (var i = 0; i < proudctData.length; i++) {
        if (proudctData[i].Name.toLowerCase().includes(term.toLowerCase())) {
            cartona += `<tr >
            <td class="bg-info text-dark fs-3">${i}</td>
            <td class="bg-info text-dark fs-3">${proudctData[i].Name}</td>
            <td class="bg-info text-dark fs-3">${proudctData[i].Price}</td>
            <td class="bg-info text-dark fs-3">${proudctData[i].Category}</td>
            <td class="bg-info text-dark fs-3">${proudctData[i].Description}</td>
            <td class="bg-info text-dark fs-3"><button onclick="udpateIcone(${i})" class="btn btn-success "><i class="fa-solid fa-pen-to-square fs-3"></i></button></td>
            <td class="bg-info text-dark fs-3"><button onclick = "deleteItem(${i})" class="btn btn-danger"><i class="fa-solid fa-trash fs-3"></i></button></td>
            </tr>`
        };

        document.getElementById("tabel-tbody").innerHTML = cartona;
    }

}

function udpateIcone(index) {
    Adds.classList.replace("d-block", "d-none");
    Updates.classList.replace("d-none", "d-block");
    console.log(index);
    productNameInput.value = proudctData[index].Name;
    productPriceInput.value = proudctData[index].Price;
    productCategoryInput.value = proudctData[index].Category;
    productDescriptionInput.value = proudctData[index].Description;
    indexUpdate = index;
}

function btnUpdate() {
    var product = {
        Name: productNameInput.value,
        Price: productPriceInput.value,
        Category: productCategoryInput.value,
        Description: productDescriptionInput.value
    };
    proudctData.splice(indexUpdate, 1, product);
    localStorage.setItem("products", JSON.stringify(proudctData));
    showData();
    Adds.classList.replace("d-none", "d-block");
    Updates.classList.replace("d-block", "d-none");

}

function valdaitionName() {
    productNameInput.value;
    var regexName = /^[A-Z][a-z]{4,8}$/;
    if (regexName.test(productNameInput.value) == true) {
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        valdaitionNameMassage.classList.add("d-none")
        valdaitionNameMassage.classList.remove("d-block")
        return true;
    }
    else {
        productNameInput.classList.add("is-invalid");
        productNameInput.classList.remove("is-valid");
        valdaitionNameMassage.classList.remove("d-none")
        valdaitionNameMassage.classList.add("d-block")
        return false;
    }
}

function valdaitionPrice() {
    productPriceInput.value;
    var regexPrice = /^[0-9]{4,8}$/;
    if (regexPrice.test(productPriceInput.value) == true) {
        productPriceInput.classList.add("is-valid");
        productPriceInput.classList.remove("is-invalid");
        valdaitionPriceMassage.classList.add("d-none")
        valdaitionPriceMassage.classList.remove("d-block")
        return true;
    }
    else {
        productPriceInput.classList.add("is-invalid");
        productPriceInput.classList.remove("is-valid");
        valdaitionPriceMassage.classList.remove("d-none")
        valdaitionPriceMassage.classList.add("d-block")
        return false;
    }
}

function valdaitionCategory(){
    productCategoryInput.value;
    var regexCategory = /^[a-zA-Z]{6,25}$/;
    
    if(regexCategory.test(productCategoryInput.value)){
        productCategoryInput.classList.add("is-valid");
        productCategoryInput.classList.remove("is-invalid");
        valdaitionCategoryMassage.classList.add("d-none");
        valdaitionCategoryMassage.classList.remove("d-block");
        return true
    }
    else{
        productCategoryInput.classList.remove("is-valid");
        productCategoryInput.classList.add("is-invalid");
        valdaitionCategoryMassage.classList.remove("d-none");
        valdaitionCategoryMassage.classList.add("d-block");
        return false
    }
}

function valdaitionDes(){
    productDescriptionInput.value;
    var regexDescription = /^[a-zA-Z]{0,150}$/;
    
    if(regexDescription.test(productDescriptionInput.value)){
        productDescriptionInput.classList.add("is-valid");
        productDescriptionInput.classList.remove("is-invalid");
        valdaitionDescriptionMassage.classList.add("d-none");
        valdaitionDescriptionMassage.classList.remove("d-block");
        return true
    }
    else{
        productDescriptionInput.classList.remove("is-valid");
        productDescriptionInput.classList.add("is-invalid");
        valdaitionDescriptionMassage.classList.remove("d-none");
        valdaitionDescriptionMassage.classList.add("d-block");
        return false
    }
}