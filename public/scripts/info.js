$('script[src="scripts/main.js"]').ready(function(){
  $('#descriptions article').hide();
  $('#descriptions h1').hide();

  $('a').on('click',function(event){
    $('#descriptions article').hide();
    $('#descriptions h1').show();
    event.preventDefault();
    var modelSelected =$(this).attr('href');
    $("#"+modelSelected).show();
    // showSatellite(modelSelected);
  });

  // function showSatellite(modelSelected){
  //   for (var i = 2; i < satellites.length+2; i++) {
  //     if (scene.children[i].name == modelSelected) {
  //       console.log(scene.children[i]);
  //       scene.children[i].material.visible = true;
  //     } else {
  //       scene.children[i].material.visible = false;
  //     }
  //   };
  // }
});

