import React from "react";

function AboutMe() {
  return (
    <section className="bg-blue-600 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-8 text-justify">
          I am a passionate developer with a strong background in computer
          science. Currently, I'm focused on web development and building
          scalable applications. I enjoy working on backend systems,
          implementing efficient architectures, and optimizing workflows for
          better performance. With hands-on experience in DevOps practices and
          AWS cloud services, I am able to deploy and manage applications with
          high reliability and scalability. I’m always eager to learn new tools
          and technologies that help automate processes and improve the
          development lifecycle. I am excited about building robust and
          maintainable systems, and I look forward to leveraging cloud
          infrastructure to drive innovation in the tech industry.
        </p>
        <button className="bg-transparent hover:bg-yellow-400 text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
          Read More
        </button>
      </div>
    </section>
  );
}

export default AboutMe;
