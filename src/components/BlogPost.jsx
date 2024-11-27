import React from "react";

function BlogPost() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">
              3 Months of Web Development
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              What I've learned in 3 months of web development
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Nov 27, 2024 • 3 min read
            </p>
            <p className="text-gray-600">
              I have been involved in web development for a short time, and it's
              been an incredible journey. In just three months, I've learned so
              much about frontend and backend technologies, best practices, and
              the ever-evolving ecosystem of web development.
            </p>
            <button className="text-blue-600 hover:text-blue-800 mt-4">
              Read more
            </button>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            More Posts
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
