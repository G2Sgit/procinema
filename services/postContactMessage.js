export async function postContactMessage(formdata) {
    const {name, email, phone, website, message} = formdata;
    const res = await fetch(`https://api.procinemastudio.com/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_website: website,
        text: message
      }),
    })
   
    const data = await res.json()
   
    return Response.json(data)
  }