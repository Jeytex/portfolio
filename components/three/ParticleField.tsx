"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 120);
    camera.position.z = 24;

    const count = 1200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = 7 + Math.random() * 18;
      const angle = Math.random() * Math.PI * 2;
      const depth = (Math.random() - 0.5) * 26;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 2] = Math.sin(angle) * radius + depth;
      colors[i * 3] = 0.25 + Math.random() * 0.25;
      colors[i * 3 + 1] = 0.85 + Math.random() * 0.15;
      colors[i * 3 + 2] = 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.78,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const grid = new THREE.GridHelper(46, 46, 0x22d3ee, 0x164e63);
    grid.position.y = -6;
    grid.material.opacity = 0.18;
    grid.material.transparent = true;
    scene.add(grid);

    const pointer = new THREE.Vector2();
    const clock = new THREE.Clock();
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const render = () => {
      const elapsed = clock.getElapsedTime();
      points.rotation.y = elapsed * 0.035 + pointer.x * 0.12;
      points.rotation.x = pointer.y * 0.05;
      grid.position.z = (elapsed * 2.2) % 2;
      camera.position.x += (pointer.x * 1.8 - camera.position.x) * 0.03;
      camera.position.y += (-pointer.y * 1.1 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("resize", onResize);
    render();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} aria-hidden className="absolute inset-0 z-0 opacity-80" />;
}
