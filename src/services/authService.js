const TOKEN_KEY = "user_token";

export default {
  login(username, password) {
    //this function to receive a 2 parameter which is username and password

    //check username and password
    if (username === "admin" && password === "admin") {
      //if username and password is correct
      const token = "dummy_token";
      //set the token to the local storage for authentication
      localStorage.setItem(TOKEN_KEY, token);
      //then return the promise of success
      return Promise.resolve();
    } else {
      //else return the promise of fail or reject for catch
      return Promise.reject();
    }
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);

    if (localStorage.getItem(TOKEN_KEY) === null) {
      return Promise.resolve();
    }else{

      return Promise.reject();
    }

  },

  isAuthenticated() {
    //this function to check whether the user is authenticated or not
    return localStorage.getItem(TOKEN_KEY) !== null;
  },
};
