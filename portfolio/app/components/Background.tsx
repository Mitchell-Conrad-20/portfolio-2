import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Background = (props: { dark: boolean }) => {
    const refContainer = useRef<HTMLDivElement>(null);
    useEffect((): () => void => {
        // Colors
        const white = new THREE.Color(0xFFFFFF);
        const gray = new THREE.Color(0x0D0D0D);

        // Set background and foreground color designations
        let backgroundColor, foregroundColor        
        if(props.dark){
            backgroundColor = gray
            foregroundColor = white
        }
        else {
            backgroundColor = white
            foregroundColor = gray
        }

        // Get container dimensions
        let containerRect = refContainer.current?.getBoundingClientRect()
        let width, height
        if(containerRect == null){
            width = window.innerWidth
            height = window.innerHeight
        }
        else{
            width = containerRect.width
            height = containerRect.height
        }

        // Scene
        const scene = new THREE.Scene()
        scene.background = backgroundColor

        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

        // Renderer
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize( window.innerWidth, window.innerHeight )
        let oldRef = refContainer
        refContainer.current?.appendChild(renderer.domElement)

        // Particles
        const numParticles = 3000
        const positions = new Float32Array(numParticles * 3)
        const particlesGeometry = new THREE.BufferGeometry

        // Initialize particles to random locations
        for(let i = 0; i < numParticles * 3; i++){
            positions[i] = (Math.random() - 0.5) * 15
        }

        // Particle Geometry
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

        // Particles Material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: foregroundColor
        })

        // Particle Mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)

        // Add particles to the scene
        scene.add(particlesMesh);

        // Camera Z Position
        camera.position.z = 5;

        renderer.setSize(width, height);

        // Resize everything when the window changes size
        const onWindowResize = () => {
            // Get container dimensions
            let containerRect = refContainer.current?.getBoundingClientRect()
            let width, height
            if(containerRect == null){
                width = window.innerWidth
                height = window.innerHeight
            }
            else{
                width = containerRect.width
                height = containerRect.height
            }

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
      
        // Add onWindowResize to the resize event
        window.addEventListener("resize", onWindowResize, false);

        // Initialize mouseX and mouseY coordinates
        let mouseX = -1
        let mouseY = -1

        // Update mouseX and mouseY coordinates when mouse moves
        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX
            mouseY = event.clientY
        }

        // Attach event handler to event
        window.addEventListener("mousemove", handleMouseMove, false);

        // Clock for elapsed time
        const clock = new THREE.Clock()

        let prevX = -1
        let prevY = -1

        // Animate Funciton
        const animate = () =>{
            // Request next animation frame
            requestAnimationFrame(animate);

            // Get elapsed time
            const elapsedTime = clock.getElapsedTime()

            // Animate particles
            if (mouseX > -1 && mouseY > -1){
                if (prevX > -1 && prevY > -1){
                    if (prevX == mouseX){
                        particlesMesh.rotation.y += 0.001
                    }
                    else{
                        particlesMesh.rotation.y = mouseX * 0.001
                    }
                    if (prevY == mouseY){
                        particlesMesh.rotation.x += 0.001
                    }
                    else{
                        particlesMesh.rotation.x = mouseY * 0.001
                    }
                }
                else{
                    particlesMesh.rotation.y = mouseX * 0.001
                    particlesMesh.rotation.x = mouseY * 0.001
                }

                prevX = mouseX 
                prevY = mouseY
            }
            else{
                particlesMesh.rotation.x += 0.001
                particlesMesh.rotation.y += 0.001
            }

            console.log(elapsedTime)

            // Render the scene from the cameras perspective
            renderer.render(scene, camera);
        }

        // Call animate function
        animate()

        // Remove old scene
        return () => {
            oldRef.current?.removeChild(renderer.domElement)
        }

      }, [props.dark]);
    
    return (
        <div ref={refContainer} className='h-screen' />
    )
}

export default Background