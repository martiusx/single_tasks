import { Canvas } from "@react-three/fiber";

function Cube() {
  return (
    <Canvas>
      {" "}
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

export default Cube;
