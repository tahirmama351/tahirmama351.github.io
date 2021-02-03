window.onload = function () {

     let homePage = `
     <div >
          
          <h1>Welcome to the CityLibrary<sup>&reg</sup></h1>

          <hr>
          <img src="../images/banner1.png" height="150px" width="1100px"/>
          <p>
               We have top flight, fully-digitiz library. Fing out more about us and learn how we can serve you with a
               widest variety of books and lots of other digital content, all for your education as well as your
               entertainment. You can also take a virtual tour of our world-class facitlities and be amazed at all what
               we have in stock for yur, your family and friends.
          </p>
          <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloremque eveniet quis, quam reiciendis
               vitae deleniti a consequuntur voluptatibus doloribus consectetur eaque sapiente aperiam alias illo natus
               architecto veniam quo?
          </p>
          <p>Already have an access as a memtere library or System Administration? Then, simply Sign in to access the 
          full range of services abailable to your based on your role and access rights</p>

     </div>`

     document.getElementById("outlet").innerHTML = homePage;

     let aboutUs = `
     <div id="about">   

          <h1>About Us the CityLibrary<sup>&reg</sup></h1>
          <hr>
          <p>
               We are your premier digital library. Out collectin has the widest variety of books and lots of other digital content for your education as well as your entertainment. You can take a vertual tour of our world-class facilities and be amazed at all what we have in stock for you, your family, and friends.</p>
     </div>`

document.getElementById("about").addEventListener("click", about);

function about(){
     clearInterval(homePage)
     document.getElementById("outlet").innerHTML = aboutUs; 
}

}

let animationTemplate = `
      <div id="animationPage" style="height: 420px; width:440px; background-color: MediumSeaGreen;  margin: 50px">
     
          <p id="welcomming" style="font-size: 20px"> </p>

          <div id="animationArea" style="padding-right: 20px; margin: 20px">
          <textarea disabled id="animationTextArea" style="height: 320px; width:380px"></textarea> <br>
          <input type="button"  id="refreshAnimation" value="Refresh Animation">
          <input type="button" id="logoutBotton" value="Logout"  >
          </div>
     </div>`

document.getElementById("login").addEventListener("click", displayAnimaTemplate);
