import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

export const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>

            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 5}
            />

            <HeroLights />

            <Particles count={isMobile ? 100 : 200} />

            <group
                scale={ isTablet ? 0.7 : 1}
                position={[0, -3.5, 0]}
                rotation={[0, -Math.PI / 4, 0]}
            >
                <Room />
            </group>
        </Canvas>
    );
};

export default HeroExperience;
