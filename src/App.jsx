import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Services, ProjectGallery } from "./components";
import { HelmetProvider, Helmet } from "react-helmet-async";

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Trigertron Technologies - Home</title>
      <meta
        name="description"
        content="Trigertron Technologies: Your Partner for Comprehensive Business and Technology Solutions. We offer expert services in web development, mobile app development, business solutions, business consultancy, fundraising consultancy, startup consultancy, strategic leadership, product management, digital marketing, and more. Discover how we can empower your business."
      />
      <meta name="keywords" content="trigertron technologies, trigertron, web development, mobile app development, digital marketing, business solutions, business consultancy, startup consultancy, branding, marketing, fundraising, fundraising services, strategic leadership, product management" />
      <link rel="canonical" href="https://www.trigertron.com/" />
    </Helmet>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          {/* <Billing /> */}
          <Services />
          <ProjectGallery />
          {/* <CardDeal /> */}
          <Testimonials />
          {/* <Clients /> */}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </HelmetProvider>
);

export default App;
