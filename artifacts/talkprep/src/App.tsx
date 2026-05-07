import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Article from "@/pages/article";
import HowItWorks from "@/pages/how-it-works";
import Pricing from "@/pages/pricing";
import Scenarios from "@/pages/scenarios";
import Guides from "@/pages/guides";
import About from "@/pages/about";
import Blog from "@/pages/blog";
import ConfrontFriend from "@/pages/confront-friend";
import FireSomeone from "@/pages/fire-someone";
import DifficultFeedback from "@/pages/difficult-feedback";
import PerformanceReview from "@/pages/performance-review";
import BoundaryFamily from "@/pages/boundary-family";
import PartnerDifficult from "@/pages/partner-difficult";
import DeliverBadNewsClient from "@/pages/deliver-bad-news-client";
import NegativeFeedback from "@/pages/negative-feedback";
import NegotiateAnything from "@/pages/negotiate-anything";
import FreezeConversations from "@/pages/freeze-conversations";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Support from "@/pages/support";
import FaqGuides from "@/pages/faq-guides";
import AskForRaise from "@/pages/ask-for-raise";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/how-to-resign-from-a-job" component={Article} />
      <Route path="/how-to-confront-a-friend" component={ConfrontFriend} />
      <Route path="/how-to-fire-someone" component={FireSomeone} />
      <Route path="/how-to-give-difficult-feedback" component={DifficultFeedback} />
      <Route path="/how-to-have-a-performance-review-conversation" component={PerformanceReview} />
      <Route path="/how-to-set-a-boundary-with-family" component={BoundaryFamily} />
      <Route path="/how-to-tell-partner-something-difficult" component={PartnerDifficult} />
      <Route path="/how-to-deliver-bad-news-to-a-client" component={DeliverBadNewsClient} />
      <Route path="/how-to-give-negative-feedback-that-actually-lands" component={NegativeFeedback} />
      <Route path="/how-to-negotiate-anything" component={NegotiateAnything} />
      <Route path="/why-you-freeze-in-hard-conversations" component={FreezeConversations} />
      <Route path="/how-to-ask-for-a-raise-without-feeling-awkward" component={AskForRaise} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/scenarios" component={Scenarios} />
      <Route path="/guides" component={Guides} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/support" component={Support} />
      <Route path="/faq-and-guides" component={FaqGuides} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
