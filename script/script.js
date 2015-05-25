$(document).ready(function(){
	/* Calendar box to select date*/
	$("#inputdate").datepicker();
	/* Button to which implement a functionality*/
	$("#jbutton").button();
	/* button to submit form */
	$("#submitbutton").button();
	/* Box that shows information about the password field*/
	var tooltip = $("#inputpassword").tooltip({ position: {my: "left top", at: "right+5 top-5"} });
	var tooltip2 = $("#inputcpassword").tooltip({ position: {my: "left top", at: "right+5 top-5"}});
	/* Errors messages for each case */
	$("#notradio1").hide();
	$("#nottext1").hide();
	$("#nottext2").hide();
	$("#notemail").hide();
	$("#notcemail").hide();
	$("#notequalemail").hide();
	$("#notpassword").hide();
	$("#notpasswordnum").hide();
	$("#notpasswordlength").hide();
	$("#notequalpass").hide();
	$("#noterms").hide();


	/* In case the errors show and the user solves the errors, if the user does click again error messages are hidden */
	$("#submitbutton").on("click", function(){
			if($("#radio1").is(":checked")){
				$("#notradio1").hide();
			
			}
			if($("#terms").is(":checked")){
				$("#noterms").hide();
				
			}
			if($("#inputtext1").val().length !== 0){
				$("#nottext1").hide();
				$("#inputtext1").css({"border": "", "border-radius": "", "box-shadow": ""});
				
			}
			if($("#inputtext2").val().length !== 0){
				$("#nottext2").hide();
				$("#text2").css({"border": "", "border-radius": "", "box-shadow": ""});
				
			}
			if($("#inputemail").val().length !== 0){
				$("#notemail").hide();
				$("#inputemail").css({"border": "", "border-radius": "", "box-shadow": ""});
				
			}
			if($("#inputcemail").val().length !== 0){
				$("#notcemail").hide();
				$("#inputcemail").css({"border": "", "border-radius": "", "box-shadow": ""});
				
			}
			if($("#inputemail").val() === $("#inputcemail").val()){
				$("#notequalemail").hide();
				$("#inputcemail").css({"border": "", "border-radius": "", "box-shadow": ""});
				
			}
			if($("#inputpassword").val().length !== 0){
				$("#notpassword").hide();
				$("#inputpassword").css({"border": "", "border-radius": "", "box-shadow": ""});
				
			}
			if($("#inputpassword").val().search(/\d/) !== -1){
				$("#notpasswordnum").hide();
				$("#inputpassword").css({"border": "", "border-radius": "", "box-shadow": ""});
			
			}
			if($("#inputpassword").val().length === 8){
				$("#notpasswordlength").hide();
				$("#inputpassword").css({"border": "", "border-radius": "", "box-shadow": ""});
				
			}
			if($("#inputpassword").val() === $("#inputcpassword").val()){
				$("#notequalpass").hide();
				$("#inputpassword").css({"border": "", "border-radius": "", "box-shadow": ""});
				
			}
			
			/* This is the jQuery code to check if all the necessary fields of the form are well written */
		$("#form").submit(function(){
			if($("#radio1").is(":not(:checked)")){
				$("#notradio1").show();
				return false;
			}else if($("#inputtext1").val().length === 0){
				$("#nottext1").show();
				$("#inputtext1").css({"border": "1px solid #d64937", "border-radius": "auto", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#inputtext2").val().length === 0){
				$("#nottext2").show();
				$("#inputtext2").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#inputemail").val().length === 0){
				$("#notemail").show();
				$("#inputemail").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#inputcemail").val().length === 0){
				$("#notcemail").show();
				$("#inputcemail").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#inputemail").val() !== $("#inputcemail").val()){
				$("#notequalemail").show();
				$("#inputemail").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#inputpassword").val().length === 0){
				$("#notpassword").show();
				$("#inputpassword").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#inputpassword").val().search(/\d/) === -1){
				$("#notpasswordnum").show();
				$("#inputpassword").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#inputpassword").val().length !== 8 && $("#inputpassword").val().length !== 0){
				$("#notpasswordlength").show();
				$("#inputpassword").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#inputpassword").val() !== $("#inputcpassword").val()){
				$("#notequalpass").show();
				$("#inputcpassword").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else if($("#terms").is(":not(:checked)")){
				$("#noterms").show();
				$("#terms").css({"border": "1px solid #d64937", "border-radius": "4px", "box-shadow": "0px 0px 4px #d64937"});
				return false;
			}else{
				alert("Form filled correctly");
				return true;
			}
		});

	});	

});

