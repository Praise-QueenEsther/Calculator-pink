const cal = document.querySelector(".calculator")
const icon = document.querySelector(".icons")
const screens = document.querySelector(".screen")
const button = document.querySelectorAll(".btn");

 let themeState = false;


if (localStorage.getItem("themes") == null)
{
    let data = JSON.stringify(themeState)
    localStorage.setItem("themes", data)

    
} else
{
     
    let data = JSON.parse(localStorage.getItem("themes"))
    themeState = data;
    
}




icon.addEventListener("click", function () {

    if (themeState){
        icon.style.backgroundColor = "grey";

        cal.style.backgroundColor = "whitesmoke";
        
        screens.style.backgroundColor = "whitesmoke";
        screens.style.color = "black";

        button.forEach(function (calbtn) {
        

            calbtn.style.backgroundColor = "whitesmoke";
        calbtn.style.color = "black";

    })
    
        // themeState = false;
        // let data = JSON.stringify(themeState)
        // localStorage.setItem("themes", data)
    }
     
    else
    {
            icon.style.backgroundColor = "grey";

        cal.style.backgroundColor = "#292D36";
        
        screens.style.backgroundColor = "#282731";
        screens.style.color = "white";

        button.forEach(function (calbtn) {
        

            calbtn.style.backgroundColor = "#2C2D37 ";
        calbtn.style.color = "whitesmoke";

    })
        // themeState = true;
       
        
    }
    themeState= !themeState
     let data = JSON.stringify(themeState)
        localStorage.setItem("themes", data)

}
)



if (themeState){



              icon.style.backgroundColor = "grey";

        cal.style.backgroundColor = "#292D36";
        
        screens.style.backgroundColor = "#282731";
        screens.style.color = "white";

        button.forEach(function (calbtn) {
        

            calbtn.style.backgroundColor = "#2C2D37 ";
        calbtn.style.color = "whitesmoke";

    })
    //     icon.style.backgroundColor = "grey";

    //     cal.style.backgroundColor = "whitesmoke";
        
    //     screens.style.backgroundColor = "whitesmoke";
    //     screens.style.color = "black";

    //     button.forEach(function (calbtn) {
        

    //         calbtn.style.backgroundColor = "whitesmoke";
    //     calbtn.style.color = "black";

    // })
    
    }

    else
            {
           icon.style.backgroundColor = "grey";

        cal.style.backgroundColor = "whitesmoke";
        
        screens.style.backgroundColor = "whitesmoke";
        screens.style.color = "black";

        button.forEach(function (calbtn) {
        

            calbtn.style.backgroundColor = "whitesmoke";
        calbtn.style.color = "black";

    })
    //         icon.style.backgroundColor = "grey";

    //     cal.style.backgroundColor = "#292D36";
        
    //     screens.style.backgroundColor = "#282731";
    //     screens.style.color = "white";

    //     button.forEach(function (calbtn) {
        

    //         calbtn.style.backgroundColor = "#2C2D37 ";
    //     calbtn.style.color = "whitesmoke";

    // })
     
    }


    

   

