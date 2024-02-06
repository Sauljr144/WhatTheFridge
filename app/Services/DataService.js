//POST
const sendData = async (controller, endpoint, passedInData) => {
  try {
    let result = await fetch(`http://localhost:5223/${controller}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(passedInData),
    });

    if (!result.ok) {
      const message = `Error check your code! ${result.status}`;
      throw new Error(message);
    }

    let data = await result.json();
    return data;
  } 
  catch (error) {
    console.error(error);
  }
};

//GET
const getData = async (controller, endpoint) => {
    let result = await fetch(`http://localhost:5223/${controller}/${endpoint}`)
    let data = await result.json();
    return data;
};


// //DELETE
// const deleteDataItem = async (controller, endpoint, itemId) => {
//   try {
//     let result = await fetch(`http://localhost:5223/${controller}/${endpoint}/${itemId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(itemId),
//     });

//     if (!result.ok) {
//       const message = `An error has occured: ${result.status}`;
//       throw new Error(message);
//     }

//     let data = await result.json();
//     return data;
    
//   } catch (error) {
//     console.error(error);
//   }
// };



export {sendData, getData};