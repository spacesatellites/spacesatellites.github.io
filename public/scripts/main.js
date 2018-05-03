var container = $('#container');
var camera;
var scene;
var voyager;
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


  var loader = new THREE.JSONLoader();

    //load the resource Voyager scene.children[2].materials
    loader.load('../models/voyager.json',
      //set callback function
      function ( geometry, materials ) {
      var material = new THREE.MeshFaceMaterial( materials );
      voyager = new THREE.Mesh( geometry, material );
      voyager.scale.set(5,5,5);
      voyager.position.set (-340, 0, 0);
      voyager.name = "voyager"
      scene.add( voyager );
      render();
      // animate();
    });
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

  // lunarlander.rotation.y = time * 0.6;
  // gemini.rotation.y = time * 0.6;
  // saturnV.rotation.y = time * 0.6;
  voyager.rotation.y = time * 0.6;
  // apollosoyuz.rotation.y = time * 0.6;

  renderer.render(scene, camera)
  // animateStars();
};

$(document).ready(function() {


//define variables up top

// define an init + animate
init();

render();

});