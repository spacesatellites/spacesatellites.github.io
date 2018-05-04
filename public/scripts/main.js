var container = $('#container');
var camera;
var scene;
var modelNames=['voyager','apollosoyuz'];
var satellites = [];
var renderer;

function init() {
  //define the camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;
  //connect TrackballControls library
  // controls = new THREE.TrackballControls(camera);
  // controls.addEventListener("change", render);

  //define the scene
  scene = new THREE.Scene();

  // Loads all of the satellite models
  var loader = new THREE.JSONLoader();

  for(i in modelNames){
    //load the resource Voyager scene.children[2].materials
    loader.load('../models/'+modelNames[i]+'.json',
      //set callback function
      function ( geometry, materials ) {
      var material = new THREE.MeshFaceMaterial( materials );
      var satellite = new THREE.Mesh( geometry, material );
      satellite.scale.set(5,5,5);
      satellite.position.set (-340, 0, 0);
      satellite.name = modelNames[i];
      satellites.push(satellite);
      scene.add( satellite );
      render();
      // animate();
    });
  };

  // //light stuff

    var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1.8 );
    scene.add( light );

    var pointLight = new THREE.PointLight(0xF5F5F5, 0.2);

    // set its position
    pointLight.position.x = 200;
    pointLight.position.y = 1600;
    pointLight.position.z = 500;

    scene.add(pointLight);

    // define rendered
    // renderer = new THREE.WebGLRenderer();
    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setSize( window.innerWidth, window.innerHeight);
    renderer.setClearColor( 0x000000, 0 ); // the default

    //append to a domElement
    container.append(renderer.domElement);
};

function render() {
  requestAnimationFrame(render)

  var time = performance.now() * 0.001;
  // sets rotation for each satellite
  for (i in satellites){
    satellites[i].rotation.y = time * 0.6;
  }

  renderer.render(scene, camera)
  // animateStars();
};

$(document).ready(function() {


//define variables up top

// define an init + animate
init();

render();

});