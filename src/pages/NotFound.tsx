import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { SEO } from "../components/SEO";

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <SEO title="404 - Page Not Found" />
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="text-8xl font-bold text-accent mb-4">404</div>
        <h1 className="text-3xl font-semibold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Home className="mr-2" size={20} />
              Go Home
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
