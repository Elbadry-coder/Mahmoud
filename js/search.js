
//=============================  close and open side navebar ============== 
$('#open').on('click', function(){
    $('.links_style').animate({width:'toggle', paddingInline:'toggle'} , 500);
    $('#open').addClass('d-none');
    $('#close').removeClass('d-none')

})

$('#close').on('click', function(){
    $('.links_style').animate({width:'toggle', paddingInline:'toggle'} , 500);
    $('#close').addClass('d-none');
    $('#open').removeClass('d-none')
})

//=============================  close and open side navebar ==============


//============================== Move to html pages  ================= 
$('#search').on('click', function(){
    window.location = './search.html';
})
$('#categories').on('click', function(){
    window.location = './categories.html';
})
$('#area').on('click', function(){
    window.location = './area.html';
})
$('#ingredients').on('click', function(){
    window.location = './ingredients.html';
})
$('#contact').on('click', function(){
    window.location = './contact.html';
})





//============================== Get by Name search Data from API   =================
let bodyData = document.getElementById('table_body');
let searchData = [];

async function getSearchData (byName){
    let responseData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${byName}`);
    let finalResponse = await responseData.json();
    searchData = finalResponse.meals;
    displayNameData()
}

//============================== Get by Latter search Data from API   =================

let searchLatterData = [];
async function getSearchDataByLatter (byLatter){
    let responseData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${byLatter}`);
    let finalResponse = await responseData.json();
    searchLatterData = finalResponse.meals;
    displayLatterData()
}


//============================== Get search Input  ================= 


let nameSearchInput = document.getElementById('search_byName');
let latterSearchInput = document.getElementById('search_byLatter');


nameSearchInput.addEventListener('input', function(){
    let mealName = nameSearchInput.value
    getSearchData(mealName);
})


latterSearchInput.addEventListener('input', function(){
        let mealByLatter = latterSearchInput.value;
        if(mealByLatter.length == 1){
            getSearchDataByLatter(mealByLatter);
        } if(mealByLatter.length > 1){
            latterSearchInput.value = "";
        }
})









//============================== Display After search Data from API   =================
function displayNameData(){
    let box = ' ';

    for(let i=0 ; i < searchData.length ; i++){
        box +=`
        
            

            <div class="col-md-3">
                <div class="content">
                    <div class="overLay d-flex justify-content-center align-items-center links">
                        <h3>${searchData[i].strMeal}</h3>
                        <h6 class="text-white text-center position-absolute text-light opacity-0 textStyle">${searchData[i].idMeal}</h6>
                    </div>
                    <img src=${searchData[i].strMealThumb} alt="Meals" class=" w-100 img_content">
                    
                </div>
            </div>
        ` 
    }
    bodyData.innerHTML = box;
    getCurrentMealIdByName();
}
function getCurrentMealIdByName(){
    let currentId = '';
    let iddLinks = document.querySelectorAll('h6');
    for(let i = 0; i < searchData.length ; i++){
       iddLinks[i].addEventListener('click', function(e){
            currentId = e.target.innerHTML;
            getCurrentIdData(currentId)
       })
    }
}


//============================== Display After Latter search Data from API   =================
function displayLatterData(){
    let box = ' ';

    for(let i=0 ; i < searchLatterData.length ; i++){
        box +=`
        
            

            <div class="col-md-3">
                <div class="content">
                    <div class="overLay d-flex justify-content-center align-items-center links">
                        <h3>${searchLatterData[i].strMeal}</h3>
                        <h6 class="text-white text-center position-absolute text-light opacity-0 textStyle">${searchLatterData[i].idMeal}</h6>
                    </div>
                    <img src=${searchLatterData[i].strMealThumb} alt="Meals" class=" w-100 img_content">
                    
                </div>
            </div>
        ` 
    }
    bodyData.innerHTML = box;
    getCurrentMealId();
}

//============================== Get curent Meal Idddddd ================= 

function getCurrentMealId(){
    let currentId = '';
    let iddLinks = document.querySelectorAll('h6');
    for(let i = 0; i < searchLatterData.length ; i++){
       iddLinks[i].addEventListener('click', function(e){
            currentId = e.target.innerHTML;
            getCurrentIdData(currentId)
       })
    }
}

//================== Curent Meal Data
let idBoxData = '';
async function getCurrentIdData(typeMeals){
    let responseData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${typeMeals}`);
    let finalResponse = await responseData.json();
    idBoxData = finalResponse.meals;
    displayDescription()
}


//============================== Display Description Box Data  ================= 
function displayDescription(){
    let descMeals = ' ';

    for(let i=0 ; i < idBoxData.length ; i++){
        descMeals +=`
 
            <div class="py-5 container text-white">
                <div class="row">
                    <div class="col-md-4">
                        <div>
                            <img src=${idBoxData[i].strMealThumb} alt="Meals" class=" w-100 img_content rounded-4 mb-3">
                            <h3>${idBoxData[i].strMeal}</h3>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <h4>Instructions</h4>
                        <p>${idBoxData[i].strInstructions}</p>
                        <h2>Area : <span>${idBoxData[i].strArea}</span></h2>
                        <h2>Category : <span>${idBoxData[i].strCategory}</span></h2>
                        <h2>Recipes :
                        <div class=" span_list ">
                                    <span>${idBoxData[i].strMeasure1}</span>
                                    <span>${idBoxData[i].strMeasure2}</span>
                                    <span>${idBoxData[i].strMeasure3}</span>
                                    <span>${idBoxData[i].strMeasure4}</span>
                                    <span>${idBoxData[i].strMeasure5}</span>
                                    <span>${idBoxData[i].strMeasure6}</span>
                                    <span>${idBoxData[i].strMeasure7}</span>                                  
                        </div>
                        </h2>

                        <h4>Tags :</h4>
                        <p class=" tag_span">${idBoxData[i].strCategory}</p>
                        <div>
                            <a href="${idBoxData[i].strSource}" class=" btn src">Source</a>
                            <a href="${idBoxData[i].strYoutube}" class=" btn btn-danger">YouTube</a>
                        </div>
                        
                    </div>
                </div>
            </div>


        ` 
    }
    bodyData.innerHTML = descMeals;
}



