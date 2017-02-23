var sections = new Array(5);
    sections[0] = "home";
    sections[1] = "aboutme";
    sections[2] = "skills";
    sections[3] = "portfolio";
    sections[4] = "blog";

alertSize();
function alertSize() {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //No-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
    }
    var display;
    var card_menu = document.getElementById("card_menu");
    display = card_menu.style.display;
    if(myWidth < 767){
      card_menu.style.display ="none";
    }else{
      card_menu.style.display = "block";
    }
}

function displayMenu(){
    var display;
    var card_menu = document.getElementById("card_menu");
    display = card_menu.style.display;

    if(display == "none"){
      card_menu.style.display = "block"
    }else{
      card_menu.style.display ="none";
    }
  }

function setColors(i){
    var search;
    var bkgr_body;
    var bkgr_menu;

    if(sections[i] == "home"){
      bkgr_body = "#233D58";
      bkgr_menu = "#233D58";
    }
    else{
      bkgr_body = "#f1f1f1";
      bkgr_menu = "#29abe2";
    }
    search = document.getElementById(sections[i]);
    search.style.background = bkgr_body;
    var menu = document.getElementsByTagName("header")[0];
    menu.style.background = bkgr_menu;
  }

function navSection(nav){
    var search;
    var show;

    for(var i = 0; i < 5; i++){
      search = document.getElementById(sections[i]);
      search.style.display = "none";

      if(sections[i] == nav){
        search.style.display = "block";
        setColors(i);
      }
    }
  }

function displaySection(nav){
    var search;
    var show;

    for(var i = 0; i < 5; i++){
      search = document.getElementById(sections[i]);
      show = search.style.display;

      if(show == "block"){
        search.style.display = "none";
        if(nav == "next"){
          i++;
          if(i>4) i=0;
        }
        if(nav == "prev"){
          i--;
          if(i<0) i = 4;
        }
        search = document.getElementById(sections[i]);
        search.style.display = "block";
        break;
      }
    }
    setColors(i);
  }

function displayFormContact(status){
  var form = document.getElementById("contact_form");
  form.style.display = status;
}
