import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/Navigation";
import Home from "./pages/Home";
import Vitals from "./pages/Vitals";
import MentalHealthOverview from "./pages/MentalHealthOverview";
import Mindfulbot from "./pages/mindfulbot";
import ExerciseandWellness from "./pages/exercise";
import HealthOverview from "./pages/HealthOverview";
import InProgress from "./pages/InProgress";
import QuestionsPage from "./pages/QuestionsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vitals" element={<Vitals />} />
          <Route path="/mental-health" element={<MentalHealthOverview />} />
          <Route path="/mindfulbot" element={<Mindfulbot />} />
          <Route path="/exercise" element={<ExerciseandWellness />} />
          <Route path="/HealthOverview" element={<HealthOverview />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/upcoming" element={<InProgress />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
