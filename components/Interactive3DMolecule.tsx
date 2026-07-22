"use client";

import React, { useRef, useState, useEffect } from 'react';

interface Atom3D {
  id: number;
  element: 'C' | 'H' | 'O' | 'N' | 'S';
  x: number;
  y: number;
  z: number;
}

interface Bond3D {
  atom1: number;
  atom2: number;
  type: number; // 1 = single, 2 = double
}

// DL-Methionine (C5H11NO2S) centered coordinates (Subtract 50 from X, Add 18 to Y)
const ATOMS: Atom3D[] = [
  // Carbon backbone
  { id: 1, element: 'C', x: -140, y: -2, z: 10 },    // C1 (Methyl)
  { id: 2, element: 'S', x: -90, y: 48, z: -10 },    // S1
  { id: 3, element: 'C', x: -30, y: -2, z: 5 },      // C2
  { id: 4, element: 'C', x: 20, y: 38, z: -10 },     // C3
  { id: 5, element: 'C', x: 75, y: -2, z: 10 },      // C4 (Alpha Carbon)
  { id: 6, element: 'C', x: 125, y: 38, z: -5 },     // C5 (Carbonyl)

  // Oxygens
  { id: 7, element: 'O', x: 125, y: 93, z: -35 },    // O1 (Double bond)
  { id: 8, element: 'O', x: 175, y: -2, z: 25 },     // O2 (OH Single bond)

  // Nitrogen
  { id: 9, element: 'N', x: 75, y: -57, z: 45 },     // N1 (Amino NH2)

  // Hydrogens
  { id: 10, element: 'H', x: -140, y: -57, z: -25 }, // H on C1
  { id: 11, element: 'H', x: -190, y: 38, z: 15 },    // H on C1
  { id: 12, element: 'H', x: -140, y: -17, z: 75 },   // H on C1

  { id: 13, element: 'H', x: -30, y: -57, z: -35 },   // H on C2
  { id: 14, element: 'H', x: -30, y: -17, z: 70 },    // H on C2

  { id: 15, element: 'H', x: 20, y: 93, z: 30 },      // H on C3
  { id: 16, element: 'H', x: 20, y: 53, z: -70 },     // H on C3

  { id: 17, element: 'H', x: 75, y: 3, z: -60 },      // H on C4 (Alpha H)

  { id: 18, element: 'H', x: 205, y: 28, z: 15 },     // H on O2 (Acid H)

  { id: 19, element: 'H', x: 110, y: -92, z: -15 },   // H on N1
  { id: 20, element: 'H', x: 35, y: -92, z: 15 }      // H on N1
];

const BONDS: Bond3D[] = [
  // Backbone
  { atom1: 1, atom2: 2, type: 1 }, // C1 - S
  { atom1: 2, atom2: 3, type: 1 }, // S - C2
  { atom1: 3, atom2: 4, type: 1 }, // C2 - C3
  { atom1: 4, atom2: 5, type: 1 }, // C3 - C4
  { atom1: 5, atom2: 6, type: 1 }, // C4 - C5

  // Carboxylic Acid group
  { atom1: 6, atom2: 7, type: 2 }, // C5 = O1 (Double bond)
  { atom1: 6, atom2: 8, type: 1 }, // C5 - O2
  { atom1: 8, atom2: 18, type: 1 }, // O2 - H (Acid H)

  // Amino Group
  { atom1: 5, atom2: 9, type: 1 }, // C4 - N1
  { atom1: 9, atom2: 19, type: 1 }, // N1 - H
  { atom1: 9, atom2: 20, type: 1 }, // N1 - H

  // C1 Hydrogens
  { atom1: 1, atom2: 10, type: 1 },
  { atom1: 1, atom2: 11, type: 1 },
  { atom1: 1, atom2: 12, type: 1 },

  // C2 Hydrogens
  { atom1: 3, atom2: 13, type: 1 },
  { atom1: 3, atom2: 14, type: 1 },

  // C3 Hydrogens
  { atom1: 4, atom2: 15, type: 1 },
  { atom1: 4, atom2: 16, type: 1 },

  // C4 Hydrogen
  { atom1: 5, atom2: 17, type: 1 }
];

const ELEMENT_COLORS: Record<string, { main: string; light: string; dark: string }> = {
  C: { main: '#4b5563', light: '#9ca3af', dark: '#1f2937' }, // Carbon: Charcoal
  H: { main: '#f3f4f6', light: '#ffffff', dark: '#d1d5db' }, // Hydrogen: White/Silver
  O: { main: '#ef4444', light: '#fca5a5', dark: '#b91c1c' }, // Oxygen: Red
  N: { main: '#3b82f6', light: '#93c5fd', dark: '#1d4ed8' }, // Nitrogen: Blue
  S: { main: '#d97706', light: '#fbbf24', dark: '#92400e' }  // Sulfur: Gold/Amber
};

const ELEMENT_RADII: Record<string, number> = {
  C: 13,
  H: 7,
  O: 12,
  N: 12,
  S: 17
};

export default function Interactive3DMolecule() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const zoom = 0.72; // Perfect scale factor so it fits canvas height/width without clipping
  const rxRef = useRef<number>(0.2); // Rotation X
  const ryRef = useRef<number>(-0.4); // Rotation Y

  const isDraggingRef = useRef<boolean>(false);
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Auto-rotation around Y axis (when user is not dragging)
      if (!isDraggingRef.current) {
        ryRef.current += 0.005;
      }

      const rx = rxRef.current;
      const ry = ryRef.current;

      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);

      // Calculate rotated coordinates for all atoms
      const rotatedAtoms = ATOMS.map(atom => {
        const x1 = atom.x * cosY - atom.z * sinY;
        const z1 = atom.x * sinY + atom.z * cosY;

        const xRot = x1;
        const yRot = atom.y * cosX - z1 * sinX;
        const zRot = atom.y * sinX + z1 * cosX;

        // Center on the canvas
        const px = width / 2 + xRot * zoom;
        const py = height / 2 + yRot * zoom;

        return {
          ...atom,
          xRot,
          yRot,
          zRot,
          px,
          py
        };
      });

      // Assemble draw list (Painter's Algorithm)
      const drawList: Array<
        | { type: 'bond'; depth: number; bond: Bond3D; start: any; end: any }
        | { type: 'atom'; depth: number; atom: any }
      > = [];

      // Add bonds to draw list
      BONDS.forEach(bond => {
        const start = rotatedAtoms.find(a => a.id === bond.atom1);
        const end = rotatedAtoms.find(a => a.id === bond.atom2);
        if (start && end) {
          const depth = (start.zRot + end.zRot) / 2;
          drawList.push({ type: 'bond', depth, bond, start, end });
        }
      });

      // Add atoms to draw list
      rotatedAtoms.forEach(atom => {
        drawList.push({ type: 'atom', depth: atom.zRot, atom });
      });

      // Sort by depth (draw back items first)
      drawList.sort((a, b) => a.depth - b.depth);

      // Render items
      drawList.forEach(item => {
        if (item.type === 'bond') {
          const { start, end, bond } = item;
          ctx.strokeStyle = '#cbd5e1'; // Light silver bond color
          ctx.lineCap = 'round';

          if (bond.type === 2) {
            // Draw double bond (2 parallel lines)
            const dx = end.px - start.px;
            const dy = end.py - start.py;
            const len = Math.sqrt(dx * dx + dy * dy);
            const nx = (-dy / len) * 3; // Offset vector
            const ny = (dx / len) * 3;

            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(start.px + nx, start.py + ny);
            ctx.lineTo(end.px + nx, end.py + ny);
            ctx.moveTo(start.px - nx, start.py - ny);
            ctx.lineTo(end.px - nx, end.py - ny);
            ctx.stroke();
          } else {
            // Single bond
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(start.px, start.py);
            ctx.lineTo(end.px, end.py);
            ctx.stroke();
          }
        } else {
          // Render atom sphere
          const { atom } = item;
          const r = ELEMENT_RADII[atom.element] * zoom;
          const colors = ELEMENT_COLORS[atom.element];

          ctx.beginPath();
          ctx.arc(atom.px, atom.py, r, 0, Math.PI * 2);

          // 3D Shading Spherical Gradient
          const grad = ctx.createRadialGradient(
            atom.px - r * 0.3,
            atom.py - r * 0.3,
            r * 0.1,
            atom.px,
            atom.py,
            r
          );
          grad.addColorStop(0, '#ffffff'); // Shading highlight
          grad.addColorStop(0.15, colors.light);
          grad.addColorStop(0.5, colors.main);
          grad.addColorStop(1, colors.dark);

          ctx.fillStyle = grad;
          ctx.fill();

          // Smooth overlay stroke border
          ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw element label inside non-hydrogen atoms
          if (atom.element !== 'H') {
            ctx.fillStyle = atom.element === 'S' ? '#1f2937' : '#ffffff';
            ctx.font = `bold ${Math.max(9, Math.floor(9 * zoom))}px sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(atom.element, atom.px, atom.py + 0.5);
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Touch and Mouse Drag Handlers for 3D rotation
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;

    ryRef.current += dx * 0.01;
    rxRef.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rxRef.current + dy * 0.01));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch triggers
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length !== 1) return;
    isDraggingRef.current = true;
    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMousePos.current.x;
    const dy = e.touches[0].clientY - lastMousePos.current.y;

    ryRef.current += dx * 0.01;
    rxRef.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rxRef.current + dy * 0.01));

    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-full w-full relative select-none group"
    >
      <div className="w-full flex flex-col items-center relative">
        <canvas
          ref={canvasRef}
          width={340}
          height={220}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          className="cursor-grab active:cursor-grabbing w-full max-w-[340px] h-[220px]"
        />
      </div>

      {/* Legend & Molecule Details */}
      <div className="mt-3 text-center text-[10px] text-on-surface-variant/80 font-medium">
        <span className="font-semibold block text-deep-navy text-xs mb-1.5">DL-Methionine Chemical Structure</span>
        <div className="flex items-center justify-center gap-3 font-bold uppercase select-none">
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ELEMENT_COLORS.C.main }} /> C</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full border border-gray-300" style={{ backgroundColor: ELEMENT_COLORS.H.main }} /> H</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ELEMENT_COLORS.O.main }} /> O</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ELEMENT_COLORS.N.main }} /> N</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: ELEMENT_COLORS.S.main }} /> S</span>
        </div>
      </div>
    </div>
  );
}
