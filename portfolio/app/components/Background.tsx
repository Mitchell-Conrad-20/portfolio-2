import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const Background = (props: { dark: boolean, doneLoading: () => void, loadingDark: boolean }) => {
    const refContainer = useRef<HTMLDivElement>(null)
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
        let width: number, height: number
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
        let xSign = 1
        let ySign = 1

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
                        particlesMesh.rotation.y += (0.001 * xSign)
                    }
                    else{
                        xSign = Math.sign(mouseX - prevX)
                        particlesMesh.rotation.y += (mouseX * 0.00001 * xSign)
                    }
                    if (prevY == mouseY){
                        particlesMesh.rotation.x += (0.001 * ySign)
                    }
                    else{
                        ySign = Math.sign(mouseY - prevY)
                        particlesMesh.rotation.x += (mouseY * 0.00001 * ySign)
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

            // Render the scene from the cameras perspective
            renderer.render(scene, camera);
        }

        // Call animate function
        animate()

        // After everything is complete, check if the dark theme loaded from storage
        // If the storage has responded (regardless of which theme)
        // Then we will say we are done loading
        if(props.loadingDark){
            // Set Done Loading to True
            props.doneLoading()
        }

        // Remove old scene
        return () => {
            oldRef.current?.removeChild(renderer.domElement)
        }

      }, [props.dark, props.loadingDark]);
    
    return (
        <>
            <div ref={refContainer} className='h-screen motion-reduce:hidden' />
            <div className='h-screen hidden motion-reduce:block' />
        </>
    )
}

export default Background