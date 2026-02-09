import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>
      {/* Global Toast Notifications */}
      <Toaster />

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Vercel Web Analytics */}
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
