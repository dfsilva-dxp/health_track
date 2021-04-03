import { Routes, Route } from "react-router-dom";
import { Food } from "./pages/Food";
import { Home } from "./pages/Home";
import { PhysicalActivites } from "./pages/PhysicalActivites";
import { Weight } from "./pages/Weight";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} end />
      <Route path="weight" element={<Weight />} />
      <Route path="physical_activites" element={<PhysicalActivites />} />
      <Route path="food" element={<Food />} />
    </Routes>
  );
}
