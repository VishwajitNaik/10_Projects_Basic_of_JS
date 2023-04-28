$.ajax({
    type : 'get',
    url : "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
    success : function(responce){
        console.log(responce.meals);

        for (let i = 0; i < responce.meals.length; i++) {
            // const element = ;
            console.log(responce.meals[i].strMeal);

            var newItem = `
            <div class="col-md-3 m-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded text-center">
            <p>${responce.meals[i].strMeal}</p>
            <img src=${responce.meals[i].strMealThumb} alt="" class='img-fluid' />
            <p>${responce.meals[i].idMeal}</p>
          </div>
            ` 
            $(`#Myitems`).append(newItem)
        }
    },
    error : function(error){
        console.log(error);
    }
})