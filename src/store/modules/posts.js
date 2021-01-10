export default {
  state: {
    posts: []
  },
  actions: {
    async fetchPosts(context) {
      const res = await fetch('https://floating-sierra-20135.herokuapp.com/api/movies');
      const postsData = await res.json();
      const posts = postsData.data;
      context.commit('updatePosts', posts);
    },
    async fetchPostById(context, id) {
      const res = await fetch('https://floating-sierra-20135.herokuapp.com/api/movie/' + id);
      const postsData = await res.json();
      const posts = postsData.data;
      context.commit('updatePosts', posts);
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    }
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    sortByYear(state) {
      return state.posts.sort(function(a, b) {
        return a.year - b.year;
      })
    },
    sortByName(state) {
      return state.posts.sort(function(a, b) {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        if (titleA < titleB)
          return -1;
        if (titleA > titleB)
          return 1;
        return 0;
      })
    },
    getById: state => id => {
      return state.posts.find(f => f.id === id);
    }
  },
}