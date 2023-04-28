$.ajax({
    type : 'get',
    url : "https://api.covid19api.com/summary",
    success : function(responce){
        console.log(responce.Countries);

       

        for (let i = 0; i < responce.Countries.length; i++) {
            // const element = ;
            // console.log(responce.Countries[i].Country);
            const totalActive = responce.Countries[i].TotalConfirmed - responce.Countries[i].TotalRecovered
            var tablerows = `          
            <tr>
            <td>${responce.Countries[i].Country}</td>
            <td>${responce.Countries[i].CountryCode}</td>
            <td>${responce.Countries[i].NewConfirmed}</td>
            <td>${totalActive}</td>
            <td>${responce.Countries[i].TotalConfirmed}</td>
            <td>${responce.Countries[i].TotalDeaths}</td>
            </tr>
            `
            $('#tbody').append(tablerows);
            $('#covideData').DataTable()
            
        }
    },
    error : function(error){
        console.log(error);
    }
})