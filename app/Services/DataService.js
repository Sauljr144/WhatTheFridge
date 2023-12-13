//POST
const sendData = async (controller, endpoint, passedInData) => {
  let result = await fetch(`http://localhost:5223/${controller}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(passedInData),
  });

  if (!result.ok) {
    const message = `Error check your code! ${result.status}`;
    throw new Error(message);
  }

  let data = await result.json();
  return data;
};

//GET
const getData = async (controller, endpoint) => {
    let result = await fetch(`http://localhost:5223/${controller}/${endpoint}`)
    let data = await result.json();
    return data;
}


export {sendData, getData};