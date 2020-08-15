import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Hero = () => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-indigo-600 leading-none tracking-tight">
      Products I'm working on
    </h1>
    <br />
    <h2 className="text-3xl font-bold text-gray-800 leading-none tracking-tight">
      None yet!
    </h2>
    <p className="mt-1 text-lg text-gray-700 leading-none text-left font-body">
      I'm currently in the works on a few content filled ebooks and courses with
      actionable insights. Sign up for the newsleter to get notified when one
      arrives.
    </p>
  </div>
);

function ProductsPage() {
  return (
    <Layout>
      <SEO title="Products" keywords={[`Products`]} />

      <Hero />
    </Layout>
  );
}

export default ProductsPage;
