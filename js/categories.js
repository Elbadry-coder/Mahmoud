
//=============================  Loading Side ============== 
$(function(){
    $('.loader').fadeOut(1500, function(){
        $('.loading_over').slideUp(1500, function(){
            $('body').css('overflow' , 'auto');
            $('.loading_over').remove();
        })
    })
})



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



//============================== get idext page Data  ================= 


async function getData (){
    let responseData = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let finalResponse = await responseData.json();
    data = finalResponse.categories;
    displayMainData();
}


getData ()


//============================== Display Categories Data page Data  ================= 
let bodyData = document.getElementById('categories_box');

let data = [];



function displayMainData(){
    let categBox = '';
    for(let i =0 ; i < data.length ; i++){
        categBox += `
        
            <div class="col-md-3 ">
                <div class="content">
                    <div class="overLay text-center py-4 ">
                        <h3 class="links">${data[i].strCategory}</h3>
                        <p>${data[i].strCategoryDescription}</p>
                    </div>
                    <img src=${data[i].strCategoryThumb} alt="Meals" class=" w-100 img_content">
                </div>
            </div>
        `
        
    }
    bodyData.innerHTML = categBox;
    getCurrentMealName()
}

//============================== Get curent Meal Name ================= 

function getCurrentMealName(){
    let currentName = '';
    let imageLinks = document.querySelectorAll('.links');

    for(let i = 0; i < data.length ; i++){
        imageLinks[i].addEventListener('click', function(e){
            currentName = e.target.innerHTML;
            getCurrentData(currentName)
        })
    }
}


let currentData = '';
async function getCurrentData (mealsName){
    let responseData = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealsName}`);
    let finalResponse = await responseData.json();
    currentData = finalResponse.meals;
    displayCurrentMeal()
}

//============================== Display curent Meal Data =================

function displayCurrentMeal(){
    let mealBox = '';
    for(let i =0 ; i < currentData.length ; i++){
        mealBox += `
        
            <div class="col-md-3 ">
                <div class="content">
                    <div class="overLay text-center py-4 links">
                        <h6 class="text-white text-center position-absolute text-light textStyle opacity-0">${currentData[i].idMeal}</h6>
                        <h3>${currentData[i].strMeal}</h3>
                    </div>
                    <img src=${currentData[i].strMealThumb} alt="Meals" class=" w-100 img_content">
                </div>
            </div>


        `
        
    }
    bodyData.innerHTML = mealBox;
    getCurrentMealId();
}




//============================== Get curent Meal Idddddd ================= 

function getCurrentMealId(){
    let currentId = '';
    let iddLinks = document.querySelectorAll('h6');
    for(let i = 0; i < currentData.length ; i++){
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
    displayDescription();
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
