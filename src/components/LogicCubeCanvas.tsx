import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LogicCubeCanvasProps {
  reducedMotion?: boolean;
}

export const LogicCubeCanvas: React.FC<LogicCubeCanvasProps> = ({ reducedMotion = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 2. Camera Setup (Architectural Studio Perspective)
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.85, 9.4);

    // 3. WebGL Studio Renderer (60 FPS Locked, High-Performance)
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'highp',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Natural Daylight Studio Lighting System
    const ambientLight = new THREE.HemisphereLight(0xffffff, 0xedece8, 1.25);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfffcf5, 2.9);
    keyLight.position.set(6, 8, 5.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xe8f0ff, 1.6);
    rimLight.position.set(-6, -2, -4);
    scene.add(rimLight);

    const topGlint = new THREE.DirectionalLight(0xffffff, 1.8);
    topGlint.position.set(0, 7, -2);
    scene.add(topGlint);

    const orangeCoreGlow = new THREE.PointLight(0xff4f00, 1.8, 7.5, 2.0);
    orangeCoreGlow.position.set(0, 0, 0);
    scene.add(orangeCoreGlow);

    // 5. Tactile Luxury Industrial Materials
    const ceramicMat = new THREE.MeshPhysicalMaterial({
      color: 0xfafaf7,
      roughness: 0.32,
      metalness: 0.04,
      clearcoat: 0.38,
      clearcoatRoughness: 0.25,
      reflectivity: 0.35,
      transparent: true,
      opacity: 1.0,
    });

    const blueprintEdgesMat = new THREE.LineBasicMaterial({
      color: 0x121212,
      transparent: true,
      opacity: 0.08,
      linewidth: 1,
    });

    const blueprintOrangeEdgesMat = new THREE.LineBasicMaterial({
      color: 0xff4f00,
      transparent: true,
      opacity: 0.0,
      linewidth: 1,
    });

    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0xd2d2cd,
      metalness: 0.94,
      roughness: 0.22,
    });

    const brushedTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0xc8c8c2,
      metalness: 0.94,
      roughness: 0.22,
    });

    const brushedSteelMat = new THREE.MeshStandardMaterial({
      color: 0xe2e2dc,
      metalness: 0.95,
      roughness: 0.18,
    });

    const darkTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0x2e2e2b,
      metalness: 0.88,
      roughness: 0.32,
    });

    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xff4f00,
      metalness: 0.25,
      roughness: 0.2,
      emissive: 0xff4f00,
      emissiveIntensity: 0.46,
      transparent: true,
      opacity: 1.0,
    });

    const coreSphereMat = new THREE.MeshStandardMaterial({
      color: 0xff4f00,
      emissive: 0xff4f00,
      emissiveIntensity: 1.5,
      roughness: 0.18,
      metalness: 0.28,
    });

    // 6. Natural Soft Daylight Contact Shadow (Floor Disc)
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const gradient = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
      gradient.addColorStop(0, 'rgba(18, 18, 18, 0.25)');
      gradient.addColorStop(0.35, 'rgba(18, 18, 18, 0.14)');
      gradient.addColorStop(0.7, 'rgba(18, 18, 18, 0.04)');
      gradient.addColorStop(1, 'rgba(18, 18, 18, 0)');
      sCtx.fillStyle = gradient;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTexture = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(7.5, 7.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTexture,
      transparent: true,
      depthWrite: false,
    });
    const contactShadow = new THREE.Mesh(shadowGeo, shadowMat);
    contactShadow.rotation.x = -Math.PI / 2;
    contactShadow.position.y = -2.45;
    scene.add(contactShadow);

    // 7. Mechanical Logic Cube Architecture
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // --- A. Brushed-Titanium Central Axis Rod (Spine along which slices separate) ---
    const centralRodGroup = new THREE.Group();
    const centralRodGeo = new THREE.CylinderGeometry(0.12, 0.12, 5.6, 32);
    const centralRodMesh = new THREE.Mesh(centralRodGeo, brushedTitaniumMat);
    centralRodMesh.castShadow = true;
    centralRodGroup.add(centralRodMesh);

    // Retaining Collars in Dark Titanium at top, center, and bottom
    [-2.2, 0, 2.2].forEach((posY) => {
      const collarGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.09, 24);
      const collarMesh = new THREE.Mesh(collarGeo, darkTitaniumMat);
      collarMesh.position.y = posY;
      centralRodGroup.add(collarMesh);
    });

    // Millimeter hashmark rings along the steel rod
    for (let r = -20; r <= 20; r++) {
      if (r % 5 === 0) {
        const ringGeo = new THREE.TorusGeometry(0.125, 0.008, 8, 24);
        const ringMesh = new THREE.Mesh(ringGeo, darkTitaniumMat);
        ringMesh.rotation.x = Math.PI / 2;
        ringMesh.position.y = r * 0.1;
        centralRodGroup.add(ringMesh);
      }
    }
    masterGroup.add(centralRodGroup);

    // --- B. Glowing International-Orange Internal Spherical Core Mechanism ---
    const coreSpiderGroup = new THREE.Group();

    // 1. Central Glowing Spherical Core
    const coreSphereGeo = new THREE.SphereGeometry(0.68, 36, 36);
    const coreSphereMesh = new THREE.Mesh(coreSphereGeo, coreSphereMat);
    coreSphereMesh.castShadow = true;
    coreSpiderGroup.add(coreSphereMesh);

    // 2. Equatorial Dark-Titanium Gimbal Ring
    const gimbalRing1Geo = new THREE.TorusGeometry(0.84, 0.022, 12, 48);
    const gimbalRing1Mesh = new THREE.Mesh(gimbalRing1Geo, darkTitaniumMat);
    gimbalRing1Mesh.rotation.x = Math.PI / 2;
    coreSpiderGroup.add(gimbalRing1Mesh);

    // 3. Polar Aerospace-Titanium Gimbal Ring
    const gimbalRing2Geo = new THREE.TorusGeometry(0.89, 0.022, 12, 48);
    const gimbalRing2Mesh = new THREE.Mesh(gimbalRing2Geo, titaniumMat);
    coreSpiderGroup.add(gimbalRing2Mesh);

    // 4. Inner Polished Logic Kernel Icosahedron Wireframe
    const kernelGeo = new THREE.IcosahedronGeometry(0.48, 1);
    const kernelWireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(kernelGeo),
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.65 })
    );
    coreSpiderGroup.add(kernelWireframe);

    // 6 Orthogonal Aerospace-Titanium Stems
    const stemGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.35, 16);
    const directions: [number, number, number][] = [
      [1, 0, 0],
      [-1, 0, 0],
      [0, 1, 0],
      [0, -1, 0],
      [0, 0, 1],
      [0, 0, -1],
    ];

    directions.forEach(([dx, dy, dz]) => {
      const stemMesh = new THREE.Mesh(stemGeo, titaniumMat);
      stemMesh.position.set(dx * 0.68, dy * 0.68, dz * 0.68);
      if (dx !== 0) stemMesh.rotation.z = Math.PI / 2;
      if (dz !== 0) stemMesh.rotation.x = Math.PI / 2;
      coreSpiderGroup.add(stemMesh);

      // Countersunk Hex Fasteners
      const hexGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.04, 6);
      const hexMesh = new THREE.Mesh(hexGeo, darkTitaniumMat);
      hexMesh.position.set(dx * 1.25, dy * 1.25, dz * 1.25);
      if (dx !== 0) hexMesh.rotation.z = Math.PI / 2;
      if (dz !== 0) hexMesh.rotation.x = Math.PI / 2;
      coreSpiderGroup.add(hexMesh);
    });

    masterGroup.add(coreSpiderGroup);

    // --- C. Three Precision Mechanical Slices (Top, Middle, Bottom) ---
    const topTierGroup = new THREE.Group();
    const middleTierGroup = new THREE.Group();
    const bottomTierGroup = new THREE.Group();

    masterGroup.add(topTierGroup);
    masterGroup.add(middleTierGroup);
    masterGroup.add(bottomTierGroup);

    interface CubieRef {
      meshGroup: THREE.Group;
      baseX: number;
      baseY: number;
      baseZ: number;
      isCorner: boolean;
      stem: THREE.Mesh;
      telescopicPin?: THREE.Mesh;
      sleeveMesh?: THREE.Mesh;
    }

    const cubieRefs: CubieRef[] = [];

    const cubieSize = 0.74;
    const baseSpacing = 0.82;
    const cubieGeo = new THREE.BoxGeometry(cubieSize, cubieSize, cubieSize);
    const cubieEdgesGeo = new THREE.EdgesGeometry(cubieGeo);

    // Helper to generate a single precision-crafted luxury cubie with blueprint edges & telescopic pins
    const createCubie = (gx: number, gy: number, gz: number): {
      group: THREE.Group;
      stem: THREE.Mesh;
      isCorner: boolean;
      telescopicPin?: THREE.Mesh;
      sleeveMesh?: THREE.Mesh;
    } => {
      const group = new THREE.Group();
      const isCorner = Math.abs(gx) === 1 && Math.abs(gy) === 1 && Math.abs(gz) === 1;

      // 1. Main Ceramic Body
      const body = new THREE.Mesh(cubieGeo, ceramicMat);
      body.castShadow = true;
      body.receiveShadow = true;
      group.add(body);

      // 2. Blueprint Wireframe Edge Overlay (Transitions in State 3)
      const edgesMesh = new THREE.LineSegments(cubieEdgesGeo, blueprintEdgesMat);
      group.add(edgesMesh);

      // If corner, also add an orange accent blueprint wireframe
      if (isCorner) {
        const orangeEdgesMesh = new THREE.LineSegments(cubieEdgesGeo, blueprintOrangeEdgesMat);
        group.add(orangeEdgesMesh);
      }

      // 3. Beveled Seam Accent Inlays on Outer Center Faces
      const isOuterX = Math.abs(gx) === 1;
      const isOuterY = Math.abs(gy) === 1;
      const isOuterZ = Math.abs(gz) === 1;

      if (
        (isOuterX && gy === 0 && gz === 0) ||
        (isOuterY && gx === 0 && gz === 0) ||
        (isOuterZ && gx === 0 && gy === 0)
      ) {
        const inlayGeo = new THREE.BoxGeometry(0.46, 0.46, 0.02);
        const inlayMesh = new THREE.Mesh(inlayGeo, orangeMat);

        if (isOuterX) {
          inlayMesh.position.x = gx * (cubieSize / 2 + 0.012);
          inlayMesh.rotation.y = Math.PI / 2;
        } else if (isOuterY) {
          inlayMesh.position.y = gy * (cubieSize / 2 + 0.012);
          inlayMesh.rotation.x = Math.PI / 2;
        } else if (isOuterZ) {
          inlayMesh.position.z = gz * (cubieSize / 2 + 0.012);
        }
        group.add(inlayMesh);
      } else {
        // Precision Recessed Apertures on Corner/Edge Faces
        if (isOuterZ) {
          const apertureGeo = new THREE.TorusGeometry(0.16, 0.02, 12, 32);
          const apertureMesh = new THREE.Mesh(apertureGeo, titaniumMat);
          apertureMesh.position.z = gz * (cubieSize / 2 + 0.008);
          group.add(apertureMesh);
        }
        if (isOuterX) {
          const apertureGeo = new THREE.TorusGeometry(0.16, 0.02, 12, 32);
          const apertureMesh = new THREE.Mesh(apertureGeo, titaniumMat);
          apertureMesh.position.x = gx * (cubieSize / 2 + 0.008);
          apertureMesh.rotation.y = Math.PI / 2;
          group.add(apertureMesh);
        }
      }

      // 4. Standard Titanium Guide Stem towards Center
      const dist = Math.sqrt(gx * gx + gy * gy + gz * gz);
      const rodLength = Math.max(0.6, dist * baseSpacing);
      const rodGeo = new THREE.CylinderGeometry(0.035, 0.035, rodLength, 12);
      const rodMesh = new THREE.Mesh(rodGeo, titaniumMat);

      const targetVec = new THREE.Vector3(-gx, -gy, -gz).normalize();
      rodMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), targetVec);
      rodMesh.position.set(targetVec.x * (rodLength / 2), targetVec.y * (rodLength / 2), targetVec.z * (rodLength / 2));
      group.add(rodMesh);

      // 5. If Corner Cubie: Add Dedicated Brushed-Steel Telescopic Pin Assembly
      let telescopicPin: THREE.Mesh | undefined;
      let sleeveMesh: THREE.Mesh | undefined;

      if (isCorner) {
        // Outer Brushed-Titanium Guide Sleeve
        const sleeveGeo = new THREE.CylinderGeometry(0.055, 0.055, 1.25, 16);
        sleeveMesh = new THREE.Mesh(sleeveGeo, darkTitaniumMat);
        sleeveMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), targetVec);
        sleeveMesh.position.set(targetVec.x * 0.6, targetVec.y * 0.6, targetVec.z * 0.6);
        group.add(sleeveMesh);

        // Inner Brushed-Steel Telescopic Pin
        const pinGeo = new THREE.CylinderGeometry(0.038, 0.038, 1.5, 16);
        telescopicPin = new THREE.Mesh(pinGeo, brushedSteelMat);
        telescopicPin.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), targetVec);
        telescopicPin.position.set(targetVec.x * 0.75, targetVec.y * 0.75, targetVec.z * 0.75);
        group.add(telescopicPin);
      }

      return { group, stem: rodMesh, isCorner, telescopicPin, sleeveMesh };
    };

    // Instantiate all 26 cubies
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue;

          const { group, stem, isCorner, telescopicPin, sleeveMesh } = createCubie(x, y, z);
          group.position.set(x * baseSpacing, 0, z * baseSpacing);

          if (y === 1) {
            topTierGroup.add(group);
          } else if (y === 0) {
            middleTierGroup.add(group);
          } else {
            bottomTierGroup.add(group);
          }

          cubieRefs.push({
            meshGroup: group,
            baseX: x,
            baseY: y,
            baseZ: z,
            isCorner,
            stem,
            telescopicPin,
            sleeveMesh,
          });
        }
      }
    }

    // Initial tier base heights
    topTierGroup.position.y = baseSpacing;
    middleTierGroup.position.y = 0;
    bottomTierGroup.position.y = -baseSpacing;

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

    // 9. Animation Render Loop (Locked 60 FPS requestAnimationFrame Engineering Pass)
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const smoothstep = (min: number, max: number, value: number) => {
      const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
      return x * x * (3 - 2 * x);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp for buttery momentum in both forward and reverse scroll directions
      const lerpSpeed = reducedMotion ? 1 : 0.082;
      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * lerpSpeed;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const floatOffsetY = reducedMotion ? 0 : Math.sin(elapsedTime * 1.2) * 0.035;

      // Screen breakpoint detection for mobile responsiveness (375px and 768px)
      const screenWidth = window.innerWidth;
      const isTabletOrMobile = screenWidth <= 768;
      const isMobile = isTabletOrMobile;

      // On tablet (768px) and mobile (375px) breakpoints: scale the 3D Logic Cube to 65% size
      const baseScale = screenWidth <= 375 ? 0.60 : isTabletOrMobile ? 0.65 : 0.95;

      // Opacity choreography: crisp showcase in Hero (on desktop), restrained ambient backdrop
      // across dense ML case studies and mobile viewports so technical diagrams stay 100% legible.
      if (container) {
        if (isTabletOrMobile) {
          container.style.opacity = currentScrollProgress < 0.14 ? '0.22' : '0.07';
        } else if (currentScrollProgress < 0.14) {
          container.style.opacity = '0.92';
        } else if (currentScrollProgress >= 0.88) {
          container.style.opacity = '0.28';
        } else {
          container.style.opacity = '0.09';
        }
        container.style.transition = 'opacity 0.35s ease';
      }

      // =========================================================================
      // SECTION 1 (HERO — 0% to 25% Scroll): Isometric 3/4 View, slow rotation & cursor tilt
      // =========================================================================
      const baseHeroPitch = 0.6155; // Exact 35.264° isometric pitch (Math.atan(1 / Math.SQRT2))
      const baseHeroYaw = Math.PI / 4; // 45° isometric 3/4 yaw
      const baseHeroRoll = -0.04;

      // Slow living rotation in Section 1 (Hero) that smoothly transitions as user scrolls into Section 2
      const heroSlowRotate = (reducedMotion ? 0 : Math.sin(elapsedTime * 0.4) * 0.10 + (elapsedTime * 0.08)) *
        (1 - smoothstep(0.20, 0.28, currentScrollProgress));

      // Controlled, deliberate yaw across the journey
      let scrollYaw = baseHeroYaw + heroSlowRotate;
      if (currentScrollProgress >= 0.22 && currentScrollProgress < 0.60) {
        // Section 2 (Projects): gentle slow turn across the exploded view
        const pProj = (currentScrollProgress - 0.22) / 0.38;
        scrollYaw = baseHeroYaw + pProj * 0.30;
      } else if (currentScrollProgress >= 0.60 && currentScrollProgress < 0.85) {
        // Section 3 (State 3: Core Architecture): slow continuous rotation so internal core and axes are fully visible
        const state3SlowRotation = reducedMotion ? 0 : (elapsedTime * 0.16);
        scrollYaw = baseHeroYaw + 0.30 + state3SlowRotation;
      } else if (currentScrollProgress >= 0.85) {
        // Section 4 (State 4: Snap-Lock Assembly): smoothly snaps to authoritative locked isometric angle
        const pState4 = smoothstep(0.85, 0.96, currentScrollProgress);
        scrollYaw = THREE.MathUtils.lerp(baseHeroYaw + 0.12, baseHeroYaw, pState4);
      }

      // Smoothly controlled pitch (tilt angle)
      let scrollPitch = baseHeroPitch;
      if (currentScrollProgress >= 0.22 && currentScrollProgress < 0.60) {
        scrollPitch = THREE.MathUtils.lerp(baseHeroPitch, 0.48, smoothstep(0.22, 0.34, currentScrollProgress));
      } else if (currentScrollProgress >= 0.60 && currentScrollProgress < 0.85) {
        scrollPitch = THREE.MathUtils.lerp(0.48, 0.52, smoothstep(0.60, 0.72, currentScrollProgress));
      } else if (currentScrollProgress >= 0.85) {
        const pState4 = smoothstep(0.85, 0.96, currentScrollProgress);
        scrollPitch = THREE.MathUtils.lerp(0.52, baseHeroPitch, pState4);
      }

      // Smooth mouse hover tilt in response to cursor movement
      const hoverTiltX = isMobile ? 0 : -mouseY * 0.16;
      const hoverTiltY = isMobile ? 0 : mouseX * 0.16;

      masterGroup.rotation.x = scrollPitch + hoverTiltX;
      masterGroup.rotation.y = scrollYaw + hoverTiltY;
      masterGroup.rotation.z = baseHeroRoll;

      // =========================================================================
      // HORIZONTAL POSITION & GLIDE DYNAMICS
      // Section 1: Cube sits on the right side in isometric 3/4 view
      // Section 2: Smoothly glides to horizontal center of the viewport
      // Section 3: Glides to right column beside the Technical Stack Ledger
      // Mobile: Centered as subtle background element
      // =========================================================================
      const heroRightOffset = (!isMobile) ? 2.3 : 0;
      let targetPosX = 0;
      if (currentScrollProgress < 0.22) {
        targetPosX = heroRightOffset;
      } else if (currentScrollProgress < 0.60) {
        const glideToCenterProgress = smoothstep(0.20, 0.32, currentScrollProgress);
        targetPosX = heroRightOffset * (1 - glideToCenterProgress);
      } else if (currentScrollProgress < 0.85) {
        const glideToRightProgress = smoothstep(0.58, 0.68, currentScrollProgress);
        targetPosX = (!isMobile) ? (glideToRightProgress * 2.25) : 0;
      } else {
        const snapToCenter = smoothstep(0.85, 0.94, currentScrollProgress);
        targetPosX = (!isMobile) ? (2.25 * (1 - snapToCenter)) : 0;
      }

      masterGroup.position.x = targetPosX + (isMobile ? mouseX * 0.04 : mouseX * 0.08);

      // =========================================================================
      // SECTION 2 DYNAMICS: Exploded Mechanical Unfold (25% to 60% scroll)
      // - Twist the top, middle, and bottom horizontal layers 45 degrees in alternating directions
      // - Separate them vertically along an exposed brushed-titanium central axis rod
      // =========================================================================
      const unfoldIn = smoothstep(0.24, 0.35, currentScrollProgress);
      const unfoldOut = smoothstep(0.58, 0.66, currentScrollProgress);
      const rawState2 = Math.max(0, unfoldIn - unfoldOut);

      // =========================================================================
      // STATE 3 DYNAMICS: Internal Core Revelation & Technical Blueprint (60% to 85%)
      // =========================================================================
      const state3In = smoothstep(0.58, 0.68, currentScrollProgress);
      const state3Out = smoothstep(0.84, 0.92, currentScrollProgress);
      const rawState3 = Math.max(0, state3In - state3Out);

      // =========================================================================
      // STATE 4: SNAP-LOCK ASSEMBLY SEQUENCE (85% to 100% scroll)
      // =========================================================================
      const snapLockProgress = smoothstep(0.84, 0.96, currentScrollProgress);
      const snapSettle = Math.sin(snapLockProgress * Math.PI) * (1 - snapLockProgress) * 0.045;

      const state2Amount = reducedMotion ? 0 : rawState2 * (1 - snapLockProgress);
      const state3Amount = reducedMotion ? 0 : rawState3 * (1 - snapLockProgress);

      // 1. Vertical Separation along Exposed Central Brushed-Titanium Axis Rod
      const verticalSeparation = (state2Amount * 1.55) + (state3Amount * 0.65) + snapSettle;
      topTierGroup.position.y = baseSpacing + verticalSeparation;
      middleTierGroup.position.y = 0;
      bottomTierGroup.position.y = -(baseSpacing + verticalSeparation);

      // 2. Layer Twists: Twist top, middle, and bottom horizontal layers 45 degrees in alternating directions (+45°, -45°, +45°)
      topTierGroup.rotation.y = state2Amount * (Math.PI / 4);
      middleTierGroup.rotation.y = state2Amount * (-Math.PI / 4);
      bottomTierGroup.rotation.y = state2Amount * (Math.PI / 4);

      // 3. Ceramic to Blueprint Wireframe Edge Transition (State 3: Blueprint Reveal)
      // Ceramic opacity fades into semi-transparent architectural blueprint mode (opacity ~0.12)
      ceramicMat.opacity = Math.max(0.12, 1.0 - state3Amount * 0.88);
      blueprintEdgesMat.opacity = (0.08 + state3Amount * 0.90) * (1 - snapLockProgress) + (0.06 * snapLockProgress);
      blueprintOrangeEdgesMat.opacity = state3Amount * 0.95 * (1 - snapLockProgress);

      // 4. Precision International-Orange (#FF4F00) Spherical Tension Core Mechanism
      coreSphereMat.color.setHex(0xff4f00);
      coreSphereMat.emissive.setHex(0xff4f00);
      coreSphereMat.emissiveIntensity = 1.2 + state3Amount * 2.4 + Math.sin(elapsedTime * 3.5) * 0.35;
      orangeCoreGlow.color.setHex(0xff4f00);
      orangeCoreGlow.intensity = 1.4 + state2Amount * 0.8 + state3Amount * 3.4 + snapLockProgress * 0.5;

      gimbalRing1Mesh.rotation.z = elapsedTime * 0.35;
      gimbalRing2Mesh.rotation.y = elapsedTime * -0.28;
      kernelWireframe.rotation.x = elapsedTime * 0.2;
      kernelWireframe.rotation.y = elapsedTime * 0.25;

      // 5. Cubie Kinematics: Retract 8 outer corner cubies outward along brushed-steel telescopic pins
      cubieRefs.forEach(({ meshGroup, baseX, baseY, baseZ, isCorner, stem, telescopicPin, sleeveMesh }) => {
        const radialExpandState2 = state2Amount * 0.26;
        let posX = baseX * (baseSpacing + radialExpandState2);
        let posY = 0;
        let posZ = baseZ * (baseSpacing + radialExpandState2);

        if (isCorner) {
          const cornerDirX = Math.sign(baseX);
          const cornerDirY = Math.sign(baseY);
          const cornerDirZ = Math.sign(baseZ);

          const cornerSlideDist = state3Amount * 1.18;
          posX += cornerDirX * cornerSlideDist;
          posY += cornerDirY * (cornerSlideDist * 0.55);
          posZ += cornerDirZ * cornerSlideDist;

          if (telescopicPin && sleeveMesh) {
            telescopicPin.scale.set(1, 1 + state3Amount * 1.85, 1);
            sleeveMesh.scale.set(1, 1 + state3Amount * 0.70, 1);
          }
        }

        meshGroup.position.set(posX, posY, posZ);
        stem.scale.set(1, 1 + state2Amount * 0.72 + state3Amount * 0.45, 1);
      });

      // 6. Vertical Positioning at the Top of the Closing CTA Card (State 4)
      // Glides up to seat cleanly at the top aperture of the contact card as a precision emblem
      const state4ElevateY = snapLockProgress * (isTabletOrMobile ? 1.45 : 1.85);
      masterGroup.position.y = floatOffsetY + state4ElevateY;

      // Scaled down by 30% during dock so it sits like a precision emblem above the headline
      const dockedScale = baseScale * (1.0 - snapLockProgress * 0.30);
      masterGroup.scale.setScalar(dockedScale * (1 + snapSettle * 0.3));

      // 7. Dynamic Soft Daylight Contact Shadow
      contactShadow.scale.setScalar(1 + state2Amount * 0.28 + state3Amount * 0.35);
      shadowMat.opacity = Math.max(0.35, 0.96 - state2Amount * 0.30 - state3Amount * 0.45);

      // 8. Studio Camera Zoom
      const camX = mouseX * 0.22;
      const camY = 0.85 - mouseY * 0.18;
      const camZ = 9.4 - (state2Amount * 0.75) - (state3Amount * 1.1) + (snapLockProgress * 0.4);

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
        if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments) {
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
    />
  );
};

export default LogicCubeCanvas;
