import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { ExperiencePage } from "./pages/Experience";
import { Contact } from "./pages/Contact";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="experience" className="min-h-screen">
            <ExperiencePage />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </Layout>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
