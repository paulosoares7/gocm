import { Routes, Route } from "react-router-dom";
import { FirstChart } from "../pages/FirstChart";
import { Progress } from "../pages/Progess";
import { SecondChart } from "../pages/SecondChart";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FirstChart />} />
      <Route path="/secondChart" element={<SecondChart />} />
      <Route path="/progress" element={<Progress />} />
    </Routes>
  );
}
