const PROJECT_FETCH_URL = process.env.PROJECT_FETCH_URL;
console.log(PROJECT_FETCH_URL, "PROJECT_FETCH_URL");
const buildUrl = (...paths) => {
  const path = `${PROJECT_FETCH_URL}/v1/${paths.join("/")}`;
  return path;
};

const sendRequest = async (url, init) => {
  console.log(url);
  const res = await fetch(url, init);

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return await res.json();
};

export const getFeedbacks = (init) => {
  return sendRequest(buildUrl(["feedbacks/approved"]), init);
};

export const createFeedback = async (data, init) => {
  const { name, email, bussinesType, text } = data;

  return sendRequest(
    "https://api.procinemastudio.com/v1/feedbacks",

    // buildUrl("feedbacks")
    {
      ...init,
      method: "POST",
      body: JSON.stringify({
        user_name: name,
        user_email: email,
        user_businessType: bussinesType,
        text: text,
      }),
      headers: {
        ...(init && init.headers),
        "content-type": "application/json",
      },
    }
  );
};

export const createMessage = async (data, init) => {
  const { name, email, message } = data;

  return sendRequest(
    "https://api.procinemastudio.com/v1/messages",
    // buildUrl("messages")
    {
      ...init,
      method: "POST",
      body: JSON.stringify({
        user_name: name,
        user_email: email,
        text: message,
      }),
      headers: {
        ...(init && init.headers),
        "content-type": "application/json",
      },
    }
  );
};