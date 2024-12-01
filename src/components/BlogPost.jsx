import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PREVIEW_LENGTH = 300;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

const expandedVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: {
      height: { type: 'spring', stiffness: 100, damping: 30 },
      opacity: { duration: 0.2 }
    }
  }
};

function BlogPost() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3000/blog/api/get');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const toggleExpand = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  if (isLoading) {
    return (
      <div className="py-20 px-6 bg-gray-100 text-center">
        <p className="text-xl">Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 px-6 bg-gray-100 text-center">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <motion.section
      className="py-20 px-6 bg-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          Blog Posts
        </motion.h2>
        {posts.map((post) => (
          <motion.div
            key={post._id}
            className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
            variants={itemVariants}
          >
            <div className="p-6">
              <motion.h3
                className="text-2xl font-semibold mb-2"
                variants={itemVariants}
              >
                {post.title}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-500 mb-2"
                variants={itemVariants}
              >
                {post.description}
              </motion.p>
              <motion.p
                className="text-sm text-gray-400 mb-4"
                variants={itemVariants}
              >
                {new Date(post.publishedAt).toLocaleDateString()} • {post.readingTime} min read
              </motion.p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={expandedPost === post._id ? "full" : "preview"}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={expandedVariants}
                  className="text-gray-600 mb-4 prose"
                >
                  {expandedPost === post._id || post.content.length <= PREVIEW_LENGTH
                    ? post.content
                    : `${post.content.substring(0, PREVIEW_LENGTH)}...`}
                </motion.div>
              </AnimatePresence>
              {post.content.length > PREVIEW_LENGTH && (
                <motion.button
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleExpand(post._id)}
                >
                  {expandedPost === post._id ? 'Read less' : 'Read more'}
                </motion.button>
              )}
              
            </div>
          </motion.div>
        ))}
        {posts.length === 0 && (
          <motion.p
            className="text-center text-xl text-gray-600"
            variants={itemVariants}
          >
            No blog posts available at the moment.
          </motion.p>
        )}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Posts
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default BlogPost;

