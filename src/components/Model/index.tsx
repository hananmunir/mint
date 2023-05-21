import { Sparkles, useGLTF } from "@react-three/drei";

const Model = () => {
  const modelUrl = "/mintsomething-model.glb";
  const { nodes }: any = useGLTF(modelUrl);

  return (
    <primitive scale={[1.3, 1.3, 1.3]} object={nodes.Scene}>
      <Sparkles count={30} scale={3} size={0.6} speed={0.8} />
    </primitive>
  );
};

export default Model;
