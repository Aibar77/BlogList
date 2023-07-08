const _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  if (!Array.isArray(blogs)) return -1;
  if (blogs.length === 0) return 0;
  if (blogs.length === 1) return blogs[0].likes;
  return blogs.reduce((acc, obj) => acc + obj.likes, 0);
};

const favBlog = (blogs) => {
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return 0;
  }
  const result = blogs.reduce((max, obj) =>
    max.likes > obj.likes ? max : obj
  );

  return {
    title: result.title,
    author: result.author,
    likes: result.likes,
  };
};
const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return { author: null, blogs: 0 };
  }

  const blogsByAuthor = _.groupBy(blogs, "author");
  const authorWithMostBlogs = _.maxBy(
    Object.keys(blogsByAuthor),
    (author) => blogsByAuthor[author].length
  );

  // if (!authorWithMostBlogs.author) {
  //   return { author: null, blogs: 0 };
  // }

  return {
    author: authorWithMostBlogs,
    blogs: blogsByAuthor[authorWithMostBlogs].length,
  };
};
const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return { author: null, likes: 0 };
  }

  const blogsByAuthor = _.groupBy(blogs, "author");

  const authorLikes = _.mapValues(blogsByAuthor, (authorBlogs) =>
    _.sumBy(authorBlogs, "likes")
  );

  if (_.isEmpty(authorLikes)) {
    return { author: null, likes: 0 };
  }

  const authorWithMostLikes = _.maxBy(
    Object.keys(authorLikes),
    (author) => authorLikes[author]
  );
  return {
    author: authorWithMostLikes,
    likes: authorLikes[authorWithMostLikes],
  };
};

module.exports = {
  dummy,
  totalLikes,
  favBlog,
  mostBlogs,
  mostLikes,
};
