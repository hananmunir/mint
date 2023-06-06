import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import Model from "../Model";

function ThreeAnimation() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className='w-full h-full'
    >
      <Canvas
        style={{ background: "transparent" }} // Set the background to transparent
        camera={{ fov: 55, near: 0.1, far: 100 }}
      >
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.55}
            luminanceSmoothing={0.7}
            intensity={0.15}
          />
          <Noise opacity={0.03} />
        </EffectComposer>
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.04}
          enablePan={false}
        />
        <Float
          speed={2} // Animation speed, defaults to 1
          rotationIntensity={0} // XYZ rotation intensity, defaults to 1
          floatIntensity={1.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0.15, -0.15]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Model />
        </Float>
        {/* <Environment preset={"city"}></Environment> */}
      </Canvas>
    </motion.div>
  );
}

export default ThreeAnimation;
