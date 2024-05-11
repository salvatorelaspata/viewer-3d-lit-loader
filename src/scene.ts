import gsap from 'gsap'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const MAIN_CUBE = 10
const MAIN_CUBE_HALF = MAIN_CUBE / 2
const CUBE_SIZE = 1

const toRandom = (cube: THREE.Mesh, position: THREE.Vector3, prop: 'x' | 'y' | 'z', negative: boolean = false) => {
    gsap.to(cube.position, {
        x: prop === 'x' ? !negative ? position.x + Math.random() * 3 : position.x - Math.random() * 3 : position.x,
        y: prop === 'y' ? !negative ? position.y + Math.random() * 3 : position.y - Math.random() * 3 : position.y,
        z: prop === 'z' ? !negative ? position.z + Math.random() * 3 : position.z - Math.random() * 3 : position.z,
        duration: 1,
        delay: 1,
        repeatDelay: 1,
        yoyo: true,
        repeat: -1,
        ease: 'power2.inOut',
    })
}

const animateScene = (latoDestro: THREE.Mesh[],latoSinistro: THREE.Mesh[],latoSuperiore: THREE.Mesh[],latoInferiore: THREE.Mesh[],latoFrontale: THREE.Mesh[],latoPosteriore: THREE.Mesh[]) => {
    latoDestro.forEach((cube) => {
        toRandom(cube, cube.position, 'x')
    })
    latoSinistro.forEach((cube) => {
        toRandom(cube, cube.position, 'x', true)
    })
    latoSuperiore.forEach((cube) => {
        toRandom(cube, cube.position, 'y')
    })
    latoInferiore.forEach((cube) => {
        toRandom(cube, cube.position, 'y', true)
    })
    latoFrontale.forEach((cube) => {
        toRandom(cube, cube.position, 'z')
    })
    latoPosteriore.forEach((cube) => {
        toRandom(cube, cube.position, 'z', true)
    })
}
const composeScene = (scene: THREE.Scene, lightColor: string = "#ffffff", cubeColor: string = "#ffffff", bgTransparent: boolean = false) => {
    const group = new THREE.Group()

    // const geometryMain = new THREE.BoxGeometry(MAIN_CUBE,MAIN_CUBE,MAIN_CUBE)
    // const materialMain = new THREE.MeshPhysicalMaterial({
    //     transparent: true,
    //     color: new THREE.Color(0x00ff00),
    // })
    // const mainCube = new THREE.Mesh(geometryMain, materialMain)
    // group.add(mainCube)

    // create cubes around the main cube
    const geometry = new THREE.BoxGeometry(CUBE_SIZE,CUBE_SIZE,CUBE_SIZE)
    const material = new THREE.MeshPhysicalMaterial({
        transmission: 1,
        opacity: 1,
        metalness: 0.1,
        roughness: 0,
        ior: 1,
        thickness: 0.01,
        specularIntensity: 0.1,
        color: bgTransparent ? new THREE.Color(cubeColor) : new THREE.Color(lightColor),
        specularColor: new THREE.Color(cubeColor),
        envMapIntensity: 1,
    })

    const latoDestro:THREE.Mesh[]       = []
    const latoSinistro:THREE.Mesh[]     = []
    const latoSuperiore:THREE.Mesh[]    = []
    const latoInferiore:THREE.Mesh[]    = []
    const latoFrontale:THREE.Mesh[]     = []
    const latoPosteriore:THREE.Mesh[]   = []

    for(let i = 0; i <= MAIN_CUBE; i++) {
        for(let j = 0; j <= MAIN_CUBE; j++) {
            const random = Math.random()
            if (random < 0.2) {
                continue
            }
            // lato destro
            const cubeDestro = new THREE.Mesh(geometry, material)
            cubeDestro.position.x = MAIN_CUBE_HALF // + Math.random() * 3
            cubeDestro.position.y = i - MAIN_CUBE_HALF
            cubeDestro.position.z = j - MAIN_CUBE_HALF
            latoDestro.push(cubeDestro)
            group.add(cubeDestro)

            // lato sinistro
            const cubeSinistro = new THREE.Mesh(geometry, material)
            cubeSinistro.position.x = -MAIN_CUBE_HALF // - Math.random() * 3
            cubeSinistro.position.y = i - MAIN_CUBE_HALF
            cubeSinistro.position.z = j - MAIN_CUBE_HALF
            latoSinistro.push(cubeSinistro)
            group.add(cubeSinistro)

            // lato superiore
            const cubeSuperiore = new THREE.Mesh(geometry, material)
            cubeSuperiore.position.x = i - MAIN_CUBE_HALF
            cubeSuperiore.position.y = MAIN_CUBE_HALF // + Math.random() * 3
            cubeSuperiore.position.z = j - MAIN_CUBE_HALF
            latoSuperiore.push(cubeSuperiore)
            group.add(cubeSuperiore)

            // lato inferiore
            const cubeInferiore = new THREE.Mesh(geometry, material)
            cubeInferiore.position.x = i - MAIN_CUBE_HALF
            cubeInferiore.position.y = -MAIN_CUBE_HALF // - Math.random() * 3
            cubeInferiore.position.z = j - MAIN_CUBE_HALF
            latoInferiore.push(cubeInferiore)
            group.add(cubeInferiore)

            // lato frontale
            const cubeFrontale = new THREE.Mesh(geometry, material)
            cubeFrontale.position.x = i - MAIN_CUBE_HALF
            cubeFrontale.position.y = j - MAIN_CUBE_HALF
            cubeFrontale.position.z = MAIN_CUBE_HALF // + Math.random() * 3
            latoFrontale.push(cubeFrontale)
            group.add(cubeFrontale)

            // lato posteriore
            const cubePosteriore = new THREE.Mesh(geometry, material)
            cubePosteriore.position.x = i - MAIN_CUBE_HALF
            cubePosteriore.position.y = j - MAIN_CUBE_HALF
            cubePosteriore.position.z = -MAIN_CUBE_HALF // - Math.random() * 3
            latoPosteriore.push(cubePosteriore)
            group.add(cubePosteriore)
        }
    }

    const positionLight = new THREE.PointLight(lightColor, 1_000_000, 100, 0)
    positionLight.position.set(0,0,0)
    group.add(positionLight)

    // const ambient = new THREE.AmbientLight(0x404040)
    // group.add(ambient)
    scene.add(group)

    return {group, latoDestro, latoSinistro, latoSuperiore, latoInferiore, latoFrontale, latoPosteriore}
}

export const scene = (ref: HTMLCanvasElement, lightColor: string, cubeColor: string, bgColor: string, bgTransparent: boolean, noAnimation: boolean
) => {
    const WIDTH = ref.clientWidth // || ref.clientWidth
    const HEIGHT = ref.clientHeight // || ref.clientHeight
    console.log('Scene - useEffect')
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
        75,
        WIDTH / HEIGHT,
        0.1,
        1000
    )
    
    camera.position.z = 4
    camera.position.x = -20

    const renderer = new THREE.WebGLRenderer({ canvas: ref })

    // bgTransparent overrides bgColor
    if (bgTransparent) renderer.setClearColor(0x000000, bgTransparent ? 0 : 1)
    else if(bgColor) renderer.setClearColor(bgColor)

    renderer.setSize(WIDTH, HEIGHT)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.minDistance = 0;
    controls.maxDistance = 50;
    controls.enablePan = false;
    controls.enableDamping = true
    controls.dampingFactor = 0.25


    const { group, latoDestro, latoSinistro, latoSuperiore, latoInferiore, latoFrontale, latoPosteriore } 
        = composeScene(scene, lightColor, cubeColor, bgTransparent)

    window.addEventListener('resize', onWindowResize, false)

    function onWindowResize() {
        console.log('onWindowResize')

        camera.aspect = ref.clientWidth / ref.clientHeight 
        camera.updateProjectionMatrix()
        renderer.setSize(ref.clientWidth, ref.clientHeight)
        render()
    }

    function render() {
        if(!noAnimation) {
            group.rotation.x += 0.005
            group.rotation.y += 0.005
        }
        renderer.render(scene, camera)
    }

    function animate() {
        requestAnimationFrame(animate)

        render()
    }

    animateScene(latoDestro, latoSinistro, latoSuperiore, latoInferiore, latoFrontale, latoPosteriore)
    animate()
}
