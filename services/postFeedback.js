export async function postFeedback(formdata) {
  const { name, email, bussinesType, text } = formdata;
  const res = await fetch(`https://api.procinemastudio.com/v1/feedbacks/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name: name,
      user_email: email,
      user_businessType: bussinesType,
      text: text,
    }),
  });

  const data = await res.json();

  return Response.json(data);
}
