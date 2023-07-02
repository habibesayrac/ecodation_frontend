//alert("Deneme")
//Dark Mode
let darkModu = () => {
    //alert("Dark modu");
    window.document.classList.toggle("dark_mode")
}
//input search
$(document).ready(function () {
    const searchApi = ["Adana", "Balikesir", "Çorum", "Denizli", "Diyarbakir", "Edirne", "Malatya", "Van"];
    $("#tags").autocomplete({
        source: searchApi
    })

});
//end 

//Footer
let newDate = () => {
    const date = new Date().getFullYear();
    //DOM
    // document.getElementById("date_id").innerHTML=new Date().getFullYear();
    //Jquery DOM
    $("#date_id").html(date);

}
newDate()


    //JQueryde dom nasıl çalışır araştır
