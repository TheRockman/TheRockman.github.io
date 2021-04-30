// Skull mesh by DGordillo http://www.blendswap.com/blends/view/4792

var renderer, scene, camera, group;
var skull, leftEye, rightEye;

var mouseX;
var mouseY;
init();

//watch pupeteer
let mList = document.getElementById('pupeteer'),
options = {
  attributes: true
},
observer = new MutationObserver(mCallback);
function mCallback(mutations) {
  for (let mutation of mutations) {
    if (mutation.type === 'attributes') {
			mouseX = document.getElementById("pupeteer").getAttribute("x");
			mouseY = document.getElementById("pupeteer").getAttribute("y");
			if(mouseX && mouseY){
				animate();
			}
    }
  }
}
observer.observe(mList, options);

function init() {

	// renderer
	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	document.getElementById("avatar").appendChild(renderer.domElement);

	// camera
	camera = new THREE.PerspectiveCamera(50, 1000/1000, .1, 10000);
	camera.position.set(0, 0, 60);
	camera.zoom = 2.5;
	camera.updateProjectionMatrix();

	// scene
	scene = new THREE.Scene();
	scene.updateMatrixWorld();

	// lights
	var light = new THREE.SpotLight( 0xffffff, 1 );
	light.angle = 0.50;
	light.decay = 1;
	// x, y, z
	light.position.set( -50.56, 75.69, 75.41 );
	scene.add( light );

	// load meshes
  var loader = new THREE.JSONLoader();
  loader.load('https://raw.githubusercontent.com/ellenprobst/it-s-alive/master/blender/skull.json', generateSkull );
  loader.load('https://raw.githubusercontent.com/ellenprobst/it-s-alive/master/blender/eyes.json', generateLeftEye );
  loader.load('https://raw.githubusercontent.com/ellenprobst/it-s-alive/master/blender/eyes.json', generateRightEye );

  	// create group
  group = new THREE.Group();
  group.position.x = 2;
	scene.add( group );

};

var scale = 10;
var eyeLineY = -1.1;
// generate skull
function generateSkull(geometry, material){
	geometry.computeVertexNormals();

	skull = new THREE.Mesh(geometry, material);
	skull.scale.y = skull.scale.z = scale;
	skull.scale.x = scale*1.5;
	skull.position.set(2,-3, 0);
	group.add( skull );
};

// generate eye
function generateLeftEye(geometry, material){
	geometry.computeVertexNormals();
	geometry.center();

	leftEye = new THREE.Mesh(geometry, material);
	leftEye.scale.y = leftEye.scale.z = scale;
	leftEye.scale.x = scale*1.5;
	leftEye.position.set(-6, eyeLineY, 5);
	leftEye.material.forEach(material => material.shininess = 40);

	group.add( leftEye );
};

// generate eye
function generateRightEye(geometry, material){
	geometry.computeVertexNormals();
	geometry.center();

	rightEye = new THREE.Mesh(geometry, material);
	rightEye.scale.y = rightEye.scale.z = scale;
	rightEye.scale.x = scale*1.5;
	rightEye.position.set(2, eyeLineY, 5);
	rightEye.material.forEach(material => material.shininess = 40);

	group.add( rightEye );
};

// render
function render() {
  	renderer.render( scene, camera );
};

// animate
function animate(event) {
	requestAnimationFrame( animate );
	if (group) {
		group.rotation.y = mouseX * .15;
		group.rotation.x = mouseY * -.15;
	}
	if (rightEye && leftEye) {
		leftEye.rotation.y = rightEye.rotation.y = mouseX * .10;
		leftEye.rotation.x = rightEye.rotation.x = mouseY * -.10;
	}
	render();
};
