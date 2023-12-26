describe("JSONPlaceholder App", function () {
  describe("createPostHtml", function () {
    it("should return a post HTML string", function () {
      const mockPost = { id: 1, title: "Test Title", body: "Test Body" };
      const expectedHtml = `<div class="post">
    <div class="post-content">
      <div class="post-title">Test Title</div>
      <div class="post-body">Test Body</div>
    </div>
    <button class="delete-post" onclick="deletePost(1)">Delete</button>
  </div>`;
      expect(createPostHtml(mockPost)).toEqual(expectedHtml);
    });
  });

  describe("addPost", function () {
    beforeEach(function () {
      spyOn(window, 'fetch').and.returnValue(Promise.resolve({
        json: () => Promise.resolve({ id: 1, title: "New Post", body: "New Body" })
      }));
      document.body.innerHTML = '<div id="posts"></div>';
    });

    it("should prepend a new post to postsContainer", async function () {
      await addPost(); // Assume title and body are set in the DOM
      expect(document.getElementById('posts').innerHTML).toContain("New Post");
      expect(document.getElementById('posts').innerHTML).toContain("New Body");
    });
  });

  describe("fetchPosts", function () {
    beforeEach(function () {
      spyOn(window, 'fetch').and.returnValue(Promise.resolve({
        json: () => Promise.resolve([{ id: 1, title: "Post 1", body: "Body 1" }])
      }));
      document.body.innerHTML = '<div id="posts"></div>';
    });

    it("should fetch and display posts", async function () {
      await fetchPosts();
      expect(document.getElementById('posts').innerHTML).toContain("Post 1");
      expect(document.getElementById('posts').innerHTML).toContain("Body 1");
    });
  });
});
