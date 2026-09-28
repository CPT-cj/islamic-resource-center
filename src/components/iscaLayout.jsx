import { Outlet } from "react-router";
import TopBar from "./common/TopBar/topBar";
import LightRays from "./common/LightRays/LightRays";

const iscaLayout = () => {
  return (
    <main className="relative min-h-screen bg-black">
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <section className="relative z-10 grow *:px-6">
        <TopBar />
        <div className="relative z-10">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default iscaLayout;
