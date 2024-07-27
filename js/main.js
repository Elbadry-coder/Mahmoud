

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

let bodyData = document.getElementById('table_body');
let descBox = document.getElementById('disc_box');
let data = [];

async function getData (){
    let responseData = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
    let finalResponse = await responseData.json();
    data = finalResponse.meals ;
    displayData();
    getCurrentMealName()
}

getData ()




//============================== Display idext page Data  ================= 

function displayData(){
    let box = ' ';

    for(let i=0 ; i < data.length ; i++){
        box +=`
        
            

            <div class="col-md-3">
                <div class="content">
                    <div class="overLay d-flex justify-content-center align-items-center links">
                        <h3>${data[i].strMeal}</h3>
                        <p class="text-white text-center position-absolute text-light opacity-0 textStyle">${data[i].idMeal}</p>
                    </div>
                    <img src=${data[i].strMealThumb} alt="Meals" class=" w-100 img_content">
                    
                </div>
            </div>
        ` 
    }
    bodyData.innerHTML = box;
    getCurrentMealName()
}


//============================== Get curent Meal Idddddd ================= 

function getCurrentMealName(){
    let currentId = '';
    let imageLinks = document.querySelectorAll('p');
    for(let i = 0; i < data.length ; i++){
        imageLinks[i].addEventListener('click', function(e){
            currentId = e.target.innerHTML;
            getCurrentData(currentId)
        })
    }
}


//================== Curent Meal Data
let currentData = '';
async function getCurrentData(typeMeals){
    let responseData = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${typeMeals}`);
    let finalResponse = await responseData.json();
    currentData = finalResponse.meals;
    displayDescription();
}


//============================== Display Description Box Data  ================= 

function displayDescription(){
    let descMeals = ' ';

    for(let i=0 ; i < currentData.length ; i++){
        descMeals +=`
 
            <div class="py-5 container text-white">
                <div class="row">
                    <div class="col-md-4">
                        <div>
                            <img src=${currentData[i].strMealThumb} alt="Meals" class=" w-100 img_content rounded-4 mb-3">
                            <h3>${currentData[i].strMeal}</h3>
                        </div>
                    </div>

                    <div class="col-md-8">
                        <h4>Instructions</h4>
                        <p>${currentData[i].strInstructions}</p>
                        <h2>Area : <span>${currentData[i].strArea}</span></h2>
                        <h2>Category : <span>${currentData[i].strCategory}</span></h2>
                        <h2>Recipes :
                        <div class=" span_list ">
                                    <span>${currentData[i].strMeasure1}</span>
                                    <span>${currentData[i].strMeasure2}</span>
                                    <span>${currentData[i].strMeasure3}</span>
                                    <span>${currentData[i].strMeasure4}</span>
                                    <span>${currentData[i].strMeasure5}</span>
                                    <span>${currentData[i].strMeasure6}</span>
                                    <span>${currentData[i].strMeasure7}</span>                                  
                        </div>
                        </h2>

                        <h4>Tags :</h4>
                        <p class=" tag_span">${currentData[i].strCategory}</p>
                        <div>
                            <a href="${currentData[i].strSource}" class=" btn src">Source</a>
                            <a href="${currentData[i].strYoutube}" class=" btn btn-danger">YouTube</a>
                        </div>
                        
                    </div>
                </div>
            </div>


        ` 
    }
    table_body.innerHTML = descMeals;
    return true;
}
