import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";

//===================================================== canvas
var scene3d = document.getElementById("canvas-container");
var CANVAS_WIDTH = 600;
var CANVAS_HEIGHT = 600;
var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

//===================================================== scene
var scene = new THREE.Scene();

//===================================================== camera
var camera = new THREE.PerspectiveCamera( 75, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 1000);
camera.position.set( 0, 0, 10 );

//===================================================== lights
var light = new THREE.DirectionalLight(0xefefff, 3);
light.position.set(1, 1, 1).normalize();
scene.add(light);
var light = new THREE.DirectionalLight(0xffefef, 3);
light.position.set(-1, -1, -1).normalize();
scene.add(light);



//===================================================== model
const loader = new GLTFLoader();
loader.load('https://codenpy.com/model-3d.glb', function (gltf) {
    gltf.scene.scale.set(20,10,10) // scale here
    scene.add(gltf.scene);
    renderer.render(scene, camera);   //  <-  add this line
}, undefined, function (error) {
    console.error(error);
});



var clock = new THREE.Clock();
function render() {
    requestAnimationFrame(render);
    scene3d.appendChild(renderer.domElement);
    renderer.render(scene, camera);
}

render();
