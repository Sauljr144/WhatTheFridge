// Purpose: This file is used to send and receive data from the server. It is used to send data to the server, get data from the server, edit data on the server, and delete data from the server.

// Get
const getData = async (controller) => {
  let result = await fetch(`http://localhost:5223/${controller}`);
  let data = await result.json();
  return data;
};

// Post
const sendData = async (controller, passedInData) => {
  try {
    let result = await fetch(`http://localhost:5223/${controller}`, {
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

  } catch (error) {
    console.error(error);
  }
};


// Put
const editData = async (controller, id, item) => {


  const response = await fetch(`http://localhost:5223/${controller}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => response)
    .then((data) => {
      if (!data.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return data;
    });
};

// Delete Item
const deleteData = async (controller, id) => {
  try {

    console.log(`Deleting item with ID: ${id}`);

    let result = await fetch(`http://localhost:5223/${controller}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      const message = `Error check your code! ${result.status}`;
      throw new Error(message);
    }
  

  } catch (error) {
    console.error(error);
  }
};

//Delete All
const deleteAllData = async (controller) => {
  try {

   

    let result = await fetch(`http://localhost:5223/${controller}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      const message = `Error check your code! ${result.status}`;
      throw new Error(message);
    }

  } catch (error) {
    console.error(error);
  }
};



export { sendData, getData, editData, deleteData, deleteAllData };
