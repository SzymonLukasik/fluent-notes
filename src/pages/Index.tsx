import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header
        showDashboard={showDashboard}
        onToggleView={() => setShowDashboard(!showDashboard)}
      />

      {showDashboard ? (
        <Dashboard />
      ) : (
        <>
          <HeroSection onGetStarted={() => setShowDashboard(true)} />
          <FeaturesSection />

          {/* Footer */}
          <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-4 text-center">
              <p className="text-muted-foreground text-sm">
                © 2024 Lexica. Built for language learners who love context.
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Index;
