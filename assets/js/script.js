console.log("Tu primer día de trabajo");
alert("La página se cargó bien");
$('header').click(function(){
    $(this).addClass('fuenteNueva');
});
$('.card-title').click(function(){
    $('.card-text').toggle();
});