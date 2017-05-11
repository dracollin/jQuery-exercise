$("div").css("background", "purple");

$(".clickme").css("background", "red");

$("div.highlight").css("width", "200px");

$("#third").css("border", "4px solid orange");

$("div:first-of-type").css("color", "pink");

//funcao do botao
$("#button").on("click", function(){
 $('.clickme').slideToggle(0050, function(){
 	$(this).add(); //remover ou adicionar
 	$("#button").attr('value', 'Bring me back!!');//altera a mensagem do botao
 });
});