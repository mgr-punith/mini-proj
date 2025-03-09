// function sum(a, b) {
//   return a + b;
// }

// test("adds 1 + 2 to equal 3", () => {
//   let ans = sum(1, 2);
//   expect(ans).toBe(3);
// });

const axios = require("axios");

const BACKEND_URL = "http://localhost:8000";

describe("Authentication", () => {
  test("User is able to sign up Only once", async () => {
    const username = "zixy" + Math.random();
    const password = "123123";

    const res = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
      type: "admin",
    });
    expect(res.statusCode).toBe(200);

    const Updatedres = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
      type: "admin",
    });
    expect(Updatedres.statusCode).toBe(400);
  });

  test("Sign up fails if the Username is empty", async () => {
    const username = `zixy-${Math.random()}`;
    const password = "123123";

    const res = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      password,
    });
    expect(res.statusCode).toBe(400);
  });

  test("Signin Succeeds when the username and password are correct", async () => {
    const username = `zixy-${Math.random()}`;
    const password = "123123";

    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
    });

    const res = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username,
      password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  test("Signin fails if the username and password are incorrect", async () => {
    const username = `zixy-${Math.random()}`;
    const password = "123123";

    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
    });

    const res = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
      username: "wrongUsername",
      password,
    });

    expect(res.statusCode).toBe(403);
  });
});
