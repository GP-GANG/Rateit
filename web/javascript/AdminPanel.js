

/* JQUERY PART */

$(document).ready(function () {
    
    
//            const Admin_password_forLogin = "1234";
//            let pass = prompt("Enter Admin key");
//            if (Admin_password_forLogin != pass){
//            alert("You are not authenticated user.");
//            window.location.assign("error_page.jsp");
//            }
            // this will focus on  the clicked element
            printDates();
            $("tr a").click(function (a) {
            $("td").css({ "background-color": "rgba(12, 12, 12, 0.959)", "color": "white" });
            if(a.target.localName == "a")
            $(a.target).parent("td").css({ "background": " white", "color": "black" })
            else
            $(a.target).parent().parent().css({ "background": " white", "color": "black" })
            })
            
            $("#default-page").click();
    })
        
        // CODE TO CHANGE PAGE 
$("#filter").change(function () {
        let option = $("#filter").val();
        $.post("FilterCompany", { "value": option }, function (response) {
        console.log(response)
    });
});

$("#searchById").change(function (){
        let companyId = $("#searchById").val();
        
        $(".cmpReport").hide();
        $(".cmp"+companyId).show();
})

$("#searchByName").change(function (){
        let companyName = $("#searchByName").val().toLowerCase();
        $("#searchById").val("");
        
        $(".cmpReport").hide();
        let all = $(".companyName");
        
        for(let i = 0; i < all.length; i++)
        {
                if(all[i].value.trim().toLowerCase().includes(companyName)){
                $(all[i].parentNode).show();
                }
        }
})


function printDates(){
//    let calender = document.getElementById("days");
//    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//    const date = new Date();
//    let month = months[date.getMonth()];
//    let year  = date.getFullYear();
//    
//     var calendar = new Calendar(calender, {
//     plugins: [ dayGridPlugin ]
//     });
//     
//     calendar.render();

document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });
}


/* JAVASCRIPT FOR OTHER PART */

         // SEARCH BAR [ FILTER COMPANY ]
