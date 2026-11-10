import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface GyroscopeCanvasProps {
  reducedMotion?: boolean;
}

export const GyroscopeCanvas: React.FC<GyroscopeCanvasProps> = ({ reducedMotion = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [headingDegrees, setHeadingDegrees] = useState<number>(0);
  const [isUnfolded, setIsUnfolded] = useState<boolean>(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 2. Camera Setup (Architectural Perspective)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.9, 9.2);

    // 3. WebGL Studio Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Daylight Studio Lighting System
    // Ambient Studio Illumination
    const ambientLight = new THREE.HemisphereLight(0xffffff, 0xedece8, 1.25);
    scene.add(ambientLight);

    // Warm Key Light (Top-right architectural sun)
    const keyLight = new THREE.DirectionalLight(0xfffcf5, 2.9);
    keyLight.position.set(6, 8, 5.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Cool Studio Rim Light (Highlights brushed aluminum edges)
    const rimLight = new THREE.DirectionalLight(0xe8f0ff, 1.6);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    // Specular Glint Light
    const glintLight = new THREE.DirectionalLight(0xffffff, 1.9);
    glintLight.position.set(0, 7, -2);
    scene.add(glintLight);

    // Subtle International Orange Needle Glow Light
    const needleGlowLight = new THREE.PointLight(0xff4f00, 1.5, 6, 2.0);
    needleGlowLight.position.set(0, 0, 0.2);
    scene.add(needleGlowLight);

    // 5. Tactile Industrial Materials
    // Matte-White Ceramic (Outer Rings & Housing)
    const ceramicMat = new THREE.MeshPhysicalMaterial({
      color: 0xfafaf7,
      roughness: 0.32,
      metalness: 0.04,
      clearcoat: 0.38,
      clearcoatRoughness: 0.25,
      reflectivity: 0.35,
    });

    // Dark Ceramic / Charcoal Trim
    const darkTrimMat = new THREE.MeshStandardMaterial({
      color: 0x181816,
      roughness: 0.42,
      metalness: 0.25,
    });

    // Brushed Aluminum (Inner Gimbals & Trunnions)
    const aluminumMat = new THREE.MeshStandardMaterial({
      color: 0xd8d8d4,
      metalness: 0.92,
      roughness: 0.22,
    });

    // Dark Machined Titanium (Pivot Axles & Screws)
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x323230,
      metalness: 0.85,
      roughness: 0.3,
    });

    // Sharp International Orange Material (Compass Needle)
    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xff4f00,
      metalness: 0.25,
      roughness: 0.2,
      emissive: 0xff4f00,
      emissiveIntensity: 0.48,
    });

    // Synthetic Ruby/Sapphire Jewel Bearing
    const jewelMat = new THREE.MeshPhysicalMaterial({
      color: 0xff2200,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.65,
      opacity: 0.92,
      transparent: true,
    });

    // Brass / Gold Hardware
    const brassMat = new THREE.MeshStandardMaterial({
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
      gradient.addColorStop(0, 'rgba(17, 17, 17, 0.24)');
      gradient.addColorStop(0.35, 'rgba(17, 17, 17, 0.13)');
      gradient.addColorStop(0.7, 'rgba(17, 17, 17, 0.04)');
      gradient.addColorStop(1, 'rgba(17, 17, 17, 0)');
      sCtx.fillStyle = gradient;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(7.2, 7.2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = -2.45;
    scene.add(contactShadow);

    // 7. Mechanical Gyroscope Compass Assembly
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- SUB-ASSEMBLY 1: Outer Matte-White Ceramic Azimuth Ring Frame ---
    const outerCeramicGroup = new THREE.Group();

    // Main Ceramic Ring (Outer compass housing)
    const outerRingGeo = new THREE.TorusGeometry(2.18, 0.16, 24, 64);
    const outerRingMesh = new THREE.Mesh(outerRingGeo, ceramicMat);
    outerRingMesh.castShadow = true;
    outerRingMesh.receiveShadow = true;
    outerCeramicGroup.add(outerRingMesh);

    // Secondary Outer Chamfered Rim (Ceramic)
    const outerRimGeo = new THREE.CylinderGeometry(2.32, 2.32, 0.12, 64, 1, true);
    const outerRimMesh = new THREE.Mesh(outerRimGeo, ceramicMat);
    outerCeramicGroup.add(outerRimMesh);

    // Inner Brushed Aluminum Calibration Scale Ring
    const calScaleGeo = new THREE.TorusGeometry(2.04, 0.04, 16, 64);
    const calScaleMesh = new THREE.Mesh(calScaleGeo, aluminumMat);
    outerCeramicGroup.add(calScaleMesh);

    // Engraved Azimuth Degree Hashmarks & 4 Cardinal Indicators
    for (let i = 0; i < 36; i++) {
      const angle = (i * Math.PI * 2) / 36;
      const isCardinal = i % 9 === 0;
      const isMajor = i % 3 === 0;

      const tickLen = isCardinal ? 0.22 : isMajor ? 0.14 : 0.08;
      const tickMat = i === 0 ? orangeMat : isCardinal ? darkTrimMat : aluminumMat;

      const tickGeo = new THREE.BoxGeometry(0.02, 0.02, tickLen);
      const tickMesh = new THREE.Mesh(tickGeo, tickMat);
      const radius = 2.05;
      tickMesh.position.set(Math.sin(angle) * radius, Math.cos(angle) * radius, 0.08);
      tickMesh.rotation.z = -angle;
      outerCeramicGroup.add(tickMesh);
    }

    // 4 Cardinal Trunnion Mounting Brackets (Brushed Aluminum)
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const bracketGeo = new THREE.BoxGeometry(0.18, 0.28, 0.24);
      const bracketMesh = new THREE.Mesh(bracketGeo, aluminumMat);
      bracketMesh.position.set(Math.sin(angle) * 2.22, Math.cos(angle) * 2.22, 0);
      bracketMesh.rotation.z = -angle;

      // Miniature Socket Screw in Titanium
      const screwGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.06, 6);
      const screwMesh = new THREE.Mesh(screwGeo, titaniumMat);
      screwMesh.rotation.x = Math.PI / 2;
      screwMesh.position.set(Math.sin(angle) * 2.22, Math.cos(angle) * 2.22, 0.12);

      outerCeramicGroup.add(bracketMesh);
      outerCeramicGroup.add(screwMesh);
    }

    // --- SUB-ASSEMBLY 2: Outer Yaw Gimbal (Matte-White Ceramic + Aluminum Raceway) ---
    // Rotates along Y-axis
    const yawGimbalGroup = new THREE.Group();

    const yawRingGeo = new THREE.TorusGeometry(1.82, 0.09, 20, 64);
    const yawRingMesh = new THREE.Mesh(yawRingGeo, ceramicMat);
    yawRingMesh.castShadow = true;
    yawGimbalGroup.add(yawRingMesh);

    // Inner Aluminum Raceway Lining
    const yawInnerGeo = new THREE.TorusGeometry(1.74, 0.03, 16, 64);
    const yawInnerMesh = new THREE.Mesh(yawInnerGeo, aluminumMat);
    yawGimbalGroup.add(yawInnerMesh);

    // Top & Bottom Vertical Pivot Axles (Connecting Yaw Gimbal to Outer Ring)
    const vertAxleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.42, 16);
    const topAxle = new THREE.Mesh(vertAxleGeo, aluminumMat);
    topAxle.position.set(0, 1.95, 0);
    const btmAxle = new THREE.Mesh(vertAxleGeo, aluminumMat);
    btmAxle.position.set(0, -1.95, 0);
    yawGimbalGroup.add(topAxle);
    yawGimbalGroup.add(btmAxle);

    // Jewel Bearing End Caps
    const jewelCapGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const topJewel = new THREE.Mesh(jewelCapGeo, jewelMat);
    topJewel.position.set(0, 1.82, 0.06);
    const btmJewel = new THREE.Mesh(jewelCapGeo, jewelMat);
    btmJewel.position.set(0, -1.82, 0.06);
    yawGimbalGroup.add(topJewel);
    yawGimbalGroup.add(btmJewel);

    // --- SUB-ASSEMBLY 3: Intermediate Pitch Gimbal (Brushed Aluminum) ---
    // Rotates along X-axis
    const pitchGimbalGroup = new THREE.Group();

    const pitchRingGeo = new THREE.TorusGeometry(1.48, 0.075, 18, 64);
    const pitchRingMesh = new THREE.Mesh(pitchRingGeo, aluminumMat);
    pitchRingMesh.castShadow = true;
    pitchGimbalGroup.add(pitchRingMesh);

    // Left & Right Horizontal Pivot Axles (Connecting Pitch Gimbal to Yaw Gimbal)
    const horizAxleGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.4, 16);
    const leftAxle = new THREE.Mesh(horizAxleGeo, titaniumMat);
    leftAxle.rotation.z = Math.PI / 2;
    leftAxle.position.set(-1.62, 0, 0);
    const rightAxle = new THREE.Mesh(horizAxleGeo, titaniumMat);
    rightAxle.rotation.z = Math.PI / 2;
    rightAxle.position.set(1.62, 0, 0);
    pitchGimbalGroup.add(leftAxle);
    pitchGimbalGroup.add(rightAxle);

    // Pitch Angle Degree Divisions (Etched ticks on brushed aluminum)
    for (let p = -4; p <= 4; p++) {
      if (p === 0) continue;
      const angle = (p * Math.PI) / 10;
      const tick = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.015, 0.06), darkTrimMat);
      tick.position.set(Math.sin(angle) * 1.48, Math.cos(angle) * 1.48, 0.05);
      tick.rotation.z = -angle;
      pitchGimbalGroup.add(tick);
    }

    // --- SUB-ASSEMBLY 4: Inner Roll Gimbal (Brushed Aluminum) ---
    // Rotates along Z-axis
    const rollGimbalGroup = new THREE.Group();

    const rollRingGeo = new THREE.TorusGeometry(1.18, 0.06, 16, 64);
    const rollRingMesh = new THREE.Mesh(rollRingGeo, aluminumMat);
    rollRingMesh.castShadow = true;
    rollGimbalGroup.add(rollRingMesh);

    // Inner Counter-Ring in Dark Titanium
    const rollInnerGeo = new THREE.TorusGeometry(1.10, 0.025, 16, 48);
    const rollInnerMesh = new THREE.Mesh(rollInnerGeo, titaniumMat);
    rollGimbalGroup.add(rollInnerMesh);

    // Orthogonal Roll Axis Pivot Trunnions
    const rollAxleGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.35, 16);
    const frontAxle = new THREE.Mesh(rollAxleGeo, brassMat);
    frontAxle.rotation.x = Math.PI / 2;
    frontAxle.position.set(0, 0, 1.25);
    const backAxle = new THREE.Mesh(rollAxleGeo, brassMat);
    backAxle.rotation.x = Math.PI / 2;
    backAxle.position.set(0, 0, -1.25);
    rollGimbalGroup.add(frontAxle);
    rollGimbalGroup.add(backAxle);

    // --- SUB-ASSEMBLY 5: Center Spindle Hub & Sharp International-Orange Directional Needle ---
    const needleAssemblyGroup = new THREE.Group();

    // Central Precision Aluminum Spindle Hub
    const hubGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.16, 32);
    const hubMesh = new THREE.Mesh(hubGeo, aluminumMat);
    hubMesh.rotation.x = Math.PI / 2;
    needleAssemblyGroup.add(hubMesh);

    // Central Synthetic Ruby Jewel Pivot Bearing
    const centerJewelGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const centerJewelMesh = new THREE.Mesh(centerJewelGeo, jewelMat);
    centerJewelMesh.position.set(0, 0, 0.09);
    needleAssemblyGroup.add(centerJewelMesh);

    // Center Spindle Collar in Brass
    const collarGeo = new THREE.TorusGeometry(0.2, 0.03, 16, 32);
    const collarMesh = new THREE.Mesh(collarGeo, brassMat);
    collarMesh.position.set(0, 0, 0.05);
    needleAssemblyGroup.add(collarMesh);

    // --- SHARP INTERNATIONAL-ORANGE DIRECTIONAL NEEDLE ---
    // 3D Faceted Diamond North Arrow Needle (Razor Sharp, High-Precision)
    const needleGroup = new THREE.Group();

    // Faceted North Arrow Head
    // Custom geometry forming a sleek double-beveled aerodynamic diamond compass needle
    const northShape = new THREE.Shape();
    northShape.moveTo(0, 1.05); // Sharp tip pointing North
    northShape.lineTo(0.12, 0.18); // Right shoulder
    northShape.lineTo(0.05, 0.0);  // Right waist
    northShape.lineTo(-0.05, 0.0); // Left waist
    northShape.lineTo(-0.12, 0.18);// Left shoulder
    northShape.closePath();

    const extrudeSettings = {
      depth: 0.06,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.03,
    };

    const northNeedleGeo = new THREE.ExtrudeGeometry(northShape, extrudeSettings);
    northNeedleGeo.center();
    const northNeedleMesh = new THREE.Mesh(northNeedleGeo, orangeMat);
    northNeedleMesh.position.set(0, 0.52, 0.08);
    northNeedleMesh.castShadow = true;
    needleGroup.add(northNeedleMesh);

    // Longitudinal Faceted Ridge / Spine on Needle (Highlights studio reflection)
    const spineGeo = new THREE.BoxGeometry(0.025, 0.95, 0.05);
    const spineMesh = new THREE.Mesh(spineGeo, orangeMat);
    spineMesh.position.set(0, 0.52, 0.12);
    needleGroup.add(spineMesh);

    // Counterweight South Pointer (Machined Titanium / Carbon Black)
    const southShape = new THREE.Shape();
    southShape.moveTo(0, -0.65); // South tip
    southShape.lineTo(0.09, -0.15);
    southShape.lineTo(0.05, 0.0);
    southShape.lineTo(-0.05, 0.0);
    southShape.lineTo(-0.09, -0.15);
    southShape.closePath();

    const southNeedleGeo = new THREE.ExtrudeGeometry(southShape, extrudeSettings);
    southNeedleGeo.center();
    const southNeedleMesh = new THREE.Mesh(southNeedleGeo, titaniumMat);
    southNeedleMesh.position.set(0, -0.32, 0.07);
    southNeedleMesh.castShadow = true;
    needleGroup.add(southNeedleMesh);

    // Counterweight Disc on South End (Brushed Aluminum)
    const weightGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 24);
    const weightMesh = new THREE.Mesh(weightGeo, aluminumMat);
    weightMesh.rotation.x = Math.PI / 2;
    weightMesh.position.set(0, -0.52, 0.07);
    needleGroup.add(weightMesh);

    needleAssemblyGroup.add(needleGroup);

    // Nesting the Gimbals & Assemblies
    // Roll gimbal holds Needle Assembly
    rollGimbalGroup.add(needleAssemblyGroup);
    // Pitch gimbal holds Roll Gimbal
    pitchGimbalGroup.add(rollGimbalGroup);
    // Yaw gimbal holds Pitch Gimbal
    yawGimbalGroup.add(pitchGimbalGroup);
    // Master group holds Outer Ceramic Ring and Yaw Gimbal
    masterGroup.add(outerCeramicGroup);
    masterGroup.add(yawGimbalGroup);

    // 8. Master Scroll-Progress Listener & Smooth Kinematics Loop
    let currentScrollProgress = 0;
    let targetScrollProgress = 0;

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

      // Degree angle: 000° to 360°
      const degrees = Math.min(360, Math.max(0, Math.round(rawProgress * 360)));
      setHeadingDegrees(degrees);
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

    // 9. Animation Render Loop (60fps Gyroscopic Kinematics)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp for buttery momentum
      const lerpSpeed = reducedMotion ? 1 : 0.082;
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * lerpSpeed;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Subtle ambient gyroscope gyration
      const floatOffsetY = reducedMotion ? 0 : Math.sin(elapsedTime * 1.3) * 0.05;
      const microGlow = Math.sin(elapsedTime * 3) * 0.25;

      // --- A. Master 3-Axis Gyroscope Rotation (Directly scroll-driven: 0° to 360°) ---
      // At hero/intro, offset slightly to the right to sit gracefully between editorial columns
      const heroStageOffsetX = Math.max(0, 1 - currentScrollProgress * 6) * 0.44;

      // Total yaw rotation tracks 0 to 2*PI (0° to 360°)
      const scrollRotationY = currentScrollProgress * Math.PI * 2.0;
      const scrollRotationX =
        0.42 +
        Math.sin(currentScrollProgress * Math.PI * 1.5) * 0.38 -
        mouseY * 0.14;
      const scrollRotationZ =
        Math.cos(currentScrollProgress * Math.PI * 2.0) * 0.16 +
        mouseX * 0.14;

      masterGroup.rotation.x = scrollRotationX;
      masterGroup.rotation.y = scrollRotationY;
      masterGroup.rotation.z = scrollRotationZ;
      masterGroup.position.x = heroStageOffsetX + mouseX * 0.14;
      masterGroup.position.y = floatOffsetY;
      masterGroup.scale.setScalar(0.94);

      // --- B. Mechanical Gimbal Ring Unfolding (Independent 3-axis kinematics) ---
      // As scroll proceeds, the gimbal rings tilt out of planar alignment to show true gyroscopic mechanics
      const unfoldCurve = Math.sin(
        Math.pow(Math.sin(currentScrollProgress * Math.PI), 0.8) * Math.PI * 0.5
      );
      const isCurrentlyUnfolded = unfoldCurve > 0.18;
      setIsUnfolded(isCurrentlyUnfolded);

      if (!reducedMotion) {
        // Yaw gimbal independent yaw rotation
        yawGimbalGroup.rotation.y = Math.sin(currentScrollProgress * Math.PI * 2.2) * 0.55;

        // Intermediate pitch gimbal tilts on X-axis (unfolding)
        pitchGimbalGroup.rotation.x = unfoldCurve * 1.35;

        // Inner roll gimbal tilts on Z-axis (unfolding)
        rollGimbalGroup.rotation.z = unfoldCurve * 0.85;

        // Directional needle keeps stabilized orientation while sweeping purposefully
        needleGroup.rotation.z =
          Math.sin(currentScrollProgress * Math.PI * 3.0) * 0.4 +
          Math.sin(elapsedTime * 0.8) * 0.04;
      }

      // --- C. Vertical Exploded Layer Separation ---
      // Ceramic outer ring, yaw gimbal, pitch gimbal, and needle hub separate vertically
      const separation = reducedMotion ? 0 : unfoldCurve * 1.25;

      // Outer ceramic ring elevates upward along +Z / +Y
      outerCeramicGroup.position.z = separation * 0.45;
      outerCeramicGroup.position.y = separation * 0.35;

      // Pitch gimbal expands slightly forward
      pitchGimbalGroup.position.z = -separation * 0.25;

      // Needle hub elevates slightly to catch the studio key light
      needleAssemblyGroup.position.z = separation * 0.3;

      // Dynamic studio lighting response
      needleGlowLight.intensity = 1.2 + microGlow + separation * 0.8;
      contactShadow.scale.setScalar(1 + separation * 0.25);
      shadowMat.opacity = Math.max(0.42, 0.96 - separation * 0.32);

      // --- D. Camera Perspective ---
      const camX = Math.sin(currentScrollProgress * Math.PI) * 0.5 + mouseX * 0.35;
      const camY =
        0.9 +
        Math.cos(currentScrollProgress * Math.PI * 2.0) * 0.32 -
        mouseY * 0.25;
      const camZ = 9.2 - Math.sin(currentScrollProgress * Math.PI) * 1.1;

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
      {/* Tactile Industrial Studio Heading Telemetry Badge (Bottom-Right) */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.75rem',
          right: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.74rem',
          color: 'var(--text-secondary)',
          backgroundColor: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--grid-hairline)',
          borderRadius: '3px',
          padding: '0.35rem 0.75rem',
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
        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>GYROSCOPE COMPASS</span>
        <span style={{ color: 'var(--grid-hairline)' }}>|</span>
        <span style={{ color: isUnfolded ? 'var(--accent)' : 'var(--text-muted)' }}>
          {isUnfolded ? 'GIMBAL UNFOLDED' : 'COPLANAR ALIGNED'}
        </span>
        <span style={{ color: 'var(--grid-hairline)' }}>|</span>
        <span style={{ fontWeight: 700, color: 'var(--accent)' }}>
          {String(headingDegrees).padStart(3, '0')}°
        </span>
      </div>
    </div>
  );
};
export default GyroscopeCanvas;
