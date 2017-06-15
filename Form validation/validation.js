


var zip=document.querySelector("#zip");

var button=document.querySelector("#button");

var country=document.querySelector("#country");

var hide=document.querySelector(".hide");

hide.classList.add("hide");



button.addEventListener("click",function(){

	
	validation();
		

	

});





function validation(){
	 

	 	
	if(zip.value==""){

		alert("please enter the Zip code");
		}


		else if(zip.value.length!= 5){

		alert("please enter 5 digits zipcode");
		}



		else if(country.value==-1){

		alert("please select a country below");
		}

		else
			hide.classList.remove("hide");


}

