function radInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCone(color) { 
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(4, 10, 8),
      new THREE.MeshBasicMaterial({ color: color })
    );
    cone.oldcolor = color
    cone.tag = false;
    cone.position.set(radInt(-20,20),radInt(-20,20),radInt(-20,20))
    return cone;
};

function randColorGen(i) {
    var arr = []
    for (x = 0; x < i; x ++){
        arr.push(Math.floor(Math.random()*16777215));
    }
    return arr;
}

function coupling(colors) { 
    let idx = radInt(0,9)
    sceneBuffer.push(createCone(colors[idx]), createCone(colors[idx]));
}

function resetTag(cones) {
    for (const cone of cones) {
        cone.tag = false
        // console.log(cone)
        cone.material.color.set(cone.oldcolor)
    }
}

window.addEventListener("resize", () => {
    size.w = window.innerWidth * 0.8;
    size.h = window.innerHeight * 0.8;
    camera.aspect = size.w / size.w;
    camera.updateProjectionMatrix();
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(window.devicePixelRatio);
  });