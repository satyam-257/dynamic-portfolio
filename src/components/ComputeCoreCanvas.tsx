import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ComputeCoreCanvasProps {
  reducedMotion?: boolean;
}

export const ComputeCoreCanvas: React.FC<ComputeCoreCanvasProps> = ({ reducedMotion = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [isExploded, setIsExploded] = useState<boolean>(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 2. Camera Setup (Architectural Perspective)
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 8.8);

    // 3. Renderer with Studio Tone Mapping
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Daylight Studio Lighting System
    // Ambient fill
    const ambientLight = new THREE.HemisphereLight(0xffffff, 0xedece8, 1.2);
    scene.add(ambientLight);

    // Warm Key Light (Top-right architectural sunlight)
    const keyLight = new THREE.DirectionalLight(0xfffbf2, 2.8);
    keyLight.position.set(6, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Cool Studio Rim Light (Highlights brushed aluminum chamfers)
    const rimLight = new THREE.DirectionalLight(0xe8f0ff, 1.5);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    // Top Specular Light
    const topGlint = new THREE.DirectionalLight(0xffffff, 1.8);
    topGlint.position.set(0, 7, -2);
    scene.add(topGlint);

    // Subtle International Orange Core Point Light
    const coreGlowLight = new THREE.PointLight(0xff4f00, 1.2, 6, 1.8);
    coreGlowLight.position.set(0, 0, 0);
    scene.add(coreGlowLight);

    // 5. Tactile Industrial Materials
    // Matte-White Ceramic (Tactile, smooth, subtle clearcoat)
    const ceramicMat = new THREE.MeshPhysicalMaterial({
      color: 0xfafaf7,
      roughness: 0.35,
      metalness: 0.04,
      clearcoat: 0.35,
      clearcoatRoughness: 0.28,
      reflectivity: 0.35,
    });

    // Dark Ceramic / Charcoal chassis trim
    const darkTrimMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a19,
      roughness: 0.45,
      metalness: 0.2,
    });

    // Brushed Aluminum (High metalness, machined finish)
    const aluminumMat = new THREE.MeshStandardMaterial({
      color: 0xd6d6d2,
      metalness: 0.92,
      roughness: 0.22,
    });

    // Dark Machined Aluminum (Heatsink fins and socket hardware)
    const darkAluminumMat = new THREE.MeshStandardMaterial({
      color: 0x383835,
      metalness: 0.85,
      roughness: 0.3,
    });

    // International Orange Accent Material
    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xff4f00,
      metalness: 0.15,
      roughness: 0.25,
      emissive: 0xff4f00,
      emissiveIntensity: 0.45,
    });

    // Micro-pin Gold/Brass contacts
    const goldPinMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.95,
      roughness: 0.2,
    });

    // 6. Realistic Procedural Studio Contact Shadow (Floor disc)
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const gradient = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
      gradient.addColorStop(0, 'rgba(17, 17, 17, 0.22)');
      gradient.addColorStop(0.35, 'rgba(17, 17, 17, 0.12)');
      gradient.addColorStop(0.7, 'rgba(17, 17, 17, 0.04)');
      gradient.addColorStop(1, 'rgba(17, 17, 17, 0)');
      sCtx.fillStyle = gradient;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(6.5, 6.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = -2.35;
    scene.add(contactShadow);

    // 7. Tactile 3D "Compute Core" Hierarchy
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- Sub-Group A: Top Ceramic Chassis Shield (Expands along +Y, +Z) ---
    const topCeramicGroup = new THREE.Group();

    // Octagonal beveled ceramic shroud
    const topCeramicGeo = new THREE.CylinderGeometry(1.65, 1.78, 0.28, 8);
    const topCeramicMesh = new THREE.Mesh(topCeramicGeo, ceramicMat);
    topCeramicMesh.castShadow = true;
    topCeramicMesh.receiveShadow = true;
    topCeramicGroup.add(topCeramicMesh);

    // Central circular aperture bezel (Brushed aluminum collar)
    const topBezelGeo = new THREE.TorusGeometry(0.95, 0.06, 16, 48);
    const topBezelMesh = new THREE.Mesh(topBezelGeo, aluminumMat);
    topBezelMesh.rotation.x = Math.PI / 2;
    topBezelMesh.position.y = 0.15;
    topCeramicGroup.add(topBezelMesh);

    // Top aperture lens ring (Dark ceramic)
    const innerApertureGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.1, 32, 1, true);
    const innerApertureMesh = new THREE.Mesh(innerApertureGeo, darkTrimMat);
    innerApertureMesh.position.y = 0.1;
    topCeramicGroup.add(innerApertureMesh);

    // International Orange 4-axis registration hash marks
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const markerGeo = new THREE.BoxGeometry(0.06, 0.02, 0.22);
      const markerMesh = new THREE.Mesh(markerGeo, orangeMat);
      markerMesh.position.set(Math.cos(angle) * 1.15, 0.15, Math.sin(angle) * 1.15);
      markerMesh.rotation.y = -angle;
      topCeramicGroup.add(markerMesh);
    }

    // 4 Corner Aluminum Fasteners
    const fastenerGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.08, 6);
    const cornerRadius = 1.35;
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      const fMesh = new THREE.Mesh(fastenerGeo, darkAluminumMat);
      fMesh.position.set(Math.cos(angle) * cornerRadius, 0.15, Math.sin(angle) * cornerRadius);
      topCeramicGroup.add(fMesh);
    }

    // --- Sub-Group B: Upper Brushed-Aluminum Heatsink Fin Array ---
    const upperHeatsinkGroup = new THREE.Group();
    const finCount = 5;
    for (let i = 0; i < finCount; i++) {
      const finY = (i - 2) * 0.09;
      const finRadius = 1.45 - i * 0.04;
      const finGeo = new THREE.CylinderGeometry(finRadius, finRadius, 0.025, 24);
      const finMesh = new THREE.Mesh(finGeo, aluminumMat);
      finMesh.position.y = finY;
      finMesh.castShadow = true;
      upperHeatsinkGroup.add(finMesh);

      // Radial cooling vent cutouts
      const ventGeo = new THREE.BoxGeometry(0.04, 0.03, finRadius * 1.8);
      const ventMesh = new THREE.Mesh(ventGeo, darkAluminumMat);
      ventMesh.position.y = finY;
      ventMesh.rotation.y = (i * Math.PI) / 5;
      upperHeatsinkGroup.add(ventMesh);
    }

    // --- Sub-Group C: Central Monolithic "Compute Core" Wafer & Logic Die ---
    const coreWaferGroup = new THREE.Group();

    // Central Brushed-Aluminum Structural Chassis
    const coreChassisGeo = new THREE.BoxGeometry(1.5, 0.36, 1.5);
    const coreChassisMesh = new THREE.Mesh(coreChassisGeo, aluminumMat);
    coreChassisMesh.castShadow = true;
    coreWaferGroup.add(coreChassisMesh);

    // Silicon Substrate Carrier (Dark Graphite)
    const substrateGeo = new THREE.BoxGeometry(1.05, 0.08, 1.05);
    const substrateMesh = new THREE.Mesh(substrateGeo, darkTrimMat);
    substrateMesh.position.y = 0.2;
    coreWaferGroup.add(substrateMesh);

    // Central International Orange Silicon Compute Die
    const dieGeo = new THREE.BoxGeometry(0.68, 0.06, 0.68);
    const dieMesh = new THREE.Mesh(dieGeo, orangeMat);
    dieMesh.position.y = 0.25;
    coreWaferGroup.add(dieMesh);

    // Perimeter Gold Pin / Micro-SMD Array
    const pinGeo = new THREE.BoxGeometry(0.04, 0.03, 0.04);
    for (let x = -0.44; x <= 0.44; x += 0.11) {
      for (let z of [-0.44, 0.44]) {
        const pin = new THREE.Mesh(pinGeo, goldPinMat);
        pin.position.set(x, 0.24, z);
        coreWaferGroup.add(pin);
      }
    }
    for (let z = -0.33; z <= 0.33; z += 0.11) {
      for (let x of [-0.44, 0.44]) {
        const pin = new THREE.Mesh(pinGeo, goldPinMat);
        pin.position.set(x, 0.24, z);
        coreWaferGroup.add(pin);
      }
    }

    // Floating Gimbal / Orbital Sensor Ring
    const orbitalRingGeo = new THREE.TorusGeometry(1.15, 0.02, 16, 64);
    const orbitalRingMesh = new THREE.Mesh(orbitalRingGeo, aluminumMat);
    orbitalRingMesh.rotation.x = Math.PI / 2;
    orbitalRingMesh.position.y = 0.15;
    coreWaferGroup.add(orbitalRingMesh);

    // Secondary Accent Ring (Orange micro-indicator)
    const accentRingGeo = new THREE.TorusGeometry(0.52, 0.015, 12, 48);
    const accentRingMesh = new THREE.Mesh(accentRingGeo, orangeMat);
    accentRingMesh.rotation.x = Math.PI / 2;
    accentRingMesh.position.y = 0.28;
    coreWaferGroup.add(accentRingMesh);

    // --- Sub-Group D: Lower Brushed-Aluminum Heatsink Fin Array ---
    const lowerHeatsinkGroup = new THREE.Group();
    for (let i = 0; i < finCount; i++) {
      const finY = (i - 2) * 0.09;
      const finRadius = 1.45 - (finCount - 1 - i) * 0.04;
      const finGeo = new THREE.CylinderGeometry(finRadius, finRadius, 0.025, 24);
      const finMesh = new THREE.Mesh(finGeo, aluminumMat);
      finMesh.position.y = finY;
      finMesh.castShadow = true;
      lowerHeatsinkGroup.add(finMesh);
    }

    // --- Sub-Group E: Bottom Ceramic Base Chassis (Expands along -Y, -Z) ---
    const bottomCeramicGroup = new THREE.Group();

    // Octagonal beveled ceramic base plate
    const bottomCeramicGeo = new THREE.CylinderGeometry(1.78, 1.65, 0.3, 8);
    const bottomCeramicMesh = new THREE.Mesh(bottomCeramicGeo, ceramicMat);
    bottomCeramicMesh.castShadow = true;
    bottomCeramicMesh.receiveShadow = true;
    bottomCeramicGroup.add(bottomCeramicMesh);

    // Tactile Machined Feet
    const footGeo = new THREE.CylinderGeometry(0.2, 0.22, 0.08, 16);
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      const footMesh = new THREE.Mesh(footGeo, darkTrimMat);
      footMesh.position.set(Math.cos(angle) * 1.3, -0.18, Math.sin(angle) * 1.3);
      bottomCeramicGroup.add(footMesh);
    }

    // Lower aluminum registration plate
    const bottomBezelGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.04, 32);
    const bottomBezelMesh = new THREE.Mesh(bottomBezelGeo, aluminumMat);
    bottomBezelMesh.position.y = -0.16;
    bottomCeramicGroup.add(bottomBezelMesh);

    // --- Sub-Group F: 4 Brushed-Aluminum Corner Guide Rails ---
    // These rods tie all layers together mechanically and guide the exploded separation!
    const guideRailsGroup = new THREE.Group();
    const rodGeo = new THREE.CylinderGeometry(0.04, 0.04, 3.4, 16);
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2 + Math.PI / 4;
      const rodMesh = new THREE.Mesh(rodGeo, aluminumMat);
      rodMesh.position.set(Math.cos(angle) * cornerRadius, 0, Math.sin(angle) * cornerRadius);
      guideRailsGroup.add(rodMesh);
    }

    // Assemble everything into masterGroup
    masterGroup.add(guideRailsGroup);
    masterGroup.add(topCeramicGroup);
    masterGroup.add(upperHeatsinkGroup);
    masterGroup.add(coreWaferGroup);
    masterGroup.add(lowerHeatsinkGroup);
    masterGroup.add(bottomCeramicGroup);

    // Initial base positions (compact assembled state)
    const basePositions = {
      topCeramic: 1.15,
      upperHeatsink: 0.58,
      core: 0,
      lowerHeatsink: -0.58,
      bottomCeramic: -1.15,
    };

    topCeramicGroup.position.y = basePositions.topCeramic;
    upperHeatsinkGroup.position.y = basePositions.upperHeatsink;
    coreWaferGroup.position.y = basePositions.core;
    lowerHeatsinkGroup.position.y = basePositions.lowerHeatsink;
    bottomCeramicGroup.position.y = basePositions.bottomCeramic;

    // 8. Master Scroll-Progress Listener & Smooth Physics Loop
    let currentScrollProgress = 0;
    let targetScrollProgress = 0;

    // Mouse parallax variables
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const rawProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
      targetScrollProgress = rawProgress;
      setScrollPercent(Math.round(rawProgress * 100));
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    handleScroll();

    // 9. Animation Render Loop (Silky 60fps Lerped Dynamics)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Lerp scroll progress for smooth cinematic deceleration
      const lerpSpeed = reducedMotion ? 1 : 0.085;
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * lerpSpeed;

      // Lerp mouse parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Subtle ambient floating motion
      const floatOffsetY = reducedMotion ? 0 : Math.sin(elapsedTime * 1.2) * 0.06;
      const floatRotY = reducedMotion ? 0 : Math.cos(elapsedTime * 0.8) * 0.02;

      // --- A. Master 3D Object Rotation & Staging (Directly scroll-driven) ---
      // At intro/hero, offset slightly to the right to sit gracefully between editorial columns
      const heroStageOffsetX = Math.max(0, 1 - currentScrollProgress * 6) * 0.42;
      const scrollRotationY = currentScrollProgress * Math.PI * 2.8;
      const scrollRotationX =
        0.35 +
        Math.sin(currentScrollProgress * Math.PI * 1.8) * 0.45 -
        mouseY * 0.12;
      const scrollRotationZ =
        Math.sin(currentScrollProgress * Math.PI * 2.0) * 0.16 +
        mouseX * 0.12;

      masterGroup.rotation.x = scrollRotationX;
      masterGroup.rotation.y = scrollRotationY + floatRotY;
      masterGroup.rotation.z = scrollRotationZ;
      masterGroup.position.x = heroStageOffsetX + mouseX * 0.15;
      masterGroup.position.y = floatOffsetY;
      masterGroup.scale.setScalar(0.92);

      // Internal orbital ring rotation
      orbitalRingMesh.rotation.z = elapsedTime * 0.8;
      accentRingMesh.rotation.z = -elapsedTime * 1.4;

      // --- B. Tactile Layer Separation (Exploded Mechanical State) ---
      // Separation curve:
      // In Intro (0.0): Fully assembled monolith
      // In Projects & Stack (0.15 - 0.75): Explodes outward to showcase internal aluminum fins and orange core!
      // In Contact (0.85 - 1.0): Re-interlocks into a solid finished monolith
      const separationCurve = Math.sin(
        Math.pow(Math.sin(currentScrollProgress * Math.PI), 0.75) * Math.PI * 0.5
      );
      const separation = reducedMotion ? 0 : separationCurve * 1.35;

      setIsExploded(separation > 0.35);

      // Top ceramic shield lifts along +Y and subtle forward +Z
      topCeramicGroup.position.y = basePositions.topCeramic + separation * 1.35;
      topCeramicGroup.position.z = separation * 0.28;

      // Upper heatsink fins expand outward
      upperHeatsinkGroup.position.y = basePositions.upperHeatsink + separation * 0.65;

      // Core stays anchored, but subtle breathe pulse
      coreWaferGroup.position.y = basePositions.core;
      coreGlowLight.intensity = 1.0 + Math.sin(elapsedTime * 3) * 0.35 + separation * 0.8;

      // Lower heatsink fins expand downward
      lowerHeatsinkGroup.position.y = basePositions.lowerHeatsink - separation * 0.65;

      // Bottom ceramic chassis drops along -Y and subtle back -Z
      bottomCeramicGroup.position.y = basePositions.bottomCeramic - separation * 1.35;
      bottomCeramicGroup.position.z = -separation * 0.28;

      // Contact shadow dynamically diffuses as the object expands
      contactShadow.scale.setScalar(1 + separation * 0.22);
      shadowMat.opacity = Math.max(0.4, 0.95 - separation * 0.3);

      // --- C. Camera Angle & Studio Perspective (Directly scroll-driven) ---
      // Subtle dynamic camera orbit and focal distance shift
      const camX = Math.sin(currentScrollProgress * Math.PI) * 0.6 + mouseX * 0.4;
      const camY =
        0.8 +
        Math.cos(currentScrollProgress * Math.PI * 2.2) * 0.35 -
        mouseY * 0.3;
      const camZ = 8.8 - Math.sin(currentScrollProgress * Math.PI) * 1.1;

      camera.position.set(camX, camY, camZ);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // 10. Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Dispose Geometries and Materials
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Tactile Industrial Studio Telemetry Badge (Bottom-Right) */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          right: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-muted)',
          backgroundColor: 'rgba(255, 255, 255, 0.78)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--grid-hairline)',
          borderRadius: '3px',
          padding: '0.35rem 0.65rem',
          letterSpacing: '0.08em',
          boxShadow: 'var(--shadow-studio-sm)',
          transition: 'all var(--transition-fast)',
          pointerEvents: 'auto',
          userSelect: 'none',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            display: 'inline-block',
            boxShadow: '0 0 8px rgba(255, 79, 0, 0.6)',
          }}
        />
        <span>COMPUTE CORE v3.4</span>
        <span style={{ color: 'var(--grid-hairline)' }}>|</span>
        <span style={{ color: isExploded ? 'var(--accent)' : 'var(--text-secondary)' }}>
          {isExploded ? 'EXPLODED VIEW' : 'INTERLOCKED'}
        </span>
        <span style={{ color: 'var(--grid-hairline)' }}>|</span>
        <span>{String(scrollPercent).padStart(2, '0')}%</span>
      </div>
    </div>
  );
};
