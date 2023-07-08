const listHelper = require("../utils/list_helper");
const constants = require("../constants/blogVar");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);

  expect(result).toBe(1);
});

describe("total likes", () => {
  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(constants.listWithOneBlog);
    expect(result).toBe(5);
  });
  test("of empty list is zero", () => {
    const result = listHelper.totalLikes([]);
    expect(result).toBe(0);
  });
  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(constants.blogs);

    expect(result).toBe(36);
  });
  test("if this is not an array it returns -1", () => {
    const result = listHelper.totalLikes({});
    expect(result).toBe(-1);
  });
});

describe("favourite blog", () => {
  test("if this not valid parameter, returns 0", () => {
    const result = listHelper.favBlog([]);
    expect(result).toBe(0);
  });
  test("if is one object in array returns this", () => {
    const result = listHelper.favBlog(constants.listWithOneBlog);
    expect(result).toEqual({
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5,
    });
  });
  test("finds fav blog and returns object", () => {
    const result = listHelper.favBlog(constants.blogs);
    expect(result).toEqual({
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
    });
  });
});
describe("author with largest amount of blogs", () => {
  test("if array is empty returns null object", () => {
    const result = listHelper.mostBlogs([]);
    expect(result).toEqual({
      author: null,
      blogs: 0,
    });
  });

  test("if everything ok", () => {
    const result = listHelper.mostBlogs(constants.blogs);
    expect(result).toEqual({
      author: "Robert C. Martin",
      blogs: 3,
    });
  });
});
describe("author with largest amount of likes", () => {
  test("if array is empty", () => {
    const result = listHelper.mostLikes([]);
    expect(result).toEqual({
      author: null,
      likes: 0,
    });
  });
  test("if array with no likes", () => {
    const result = listHelper.mostLikes([{ creator: "John Doe", likes: 0 }]);
    expect(result).toEqual({
      author: "undefined",
      likes: 0,
    });
  });
  test("if its Ok", () => {
    const result = listHelper.mostLikes(constants.blogs);
    expect(result).toEqual({
      author: "Edsger W. Dijkstra",
      likes: 17,
    });
  });
});
