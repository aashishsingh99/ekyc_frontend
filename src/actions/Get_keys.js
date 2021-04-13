import axios from "axios";
import { GET_KEYS,GET_PRIVATE } from "./types";

export const Get_keys = ( dam) => async (dispatch) => {
    const name=dam;
  //console.log("SAKSHIIIIIIIIIIIIIIIIIIIII");
  console.log("inside action get keyssssssssssssssssssssssssssssss");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //const timestamp=null;

  const body = JSON.stringify({ name});
  try {
    console.log("calling api get_keys");
    const res = await axios.post("/api/users/getKeys", body, config);
    console.log("yoyoyoyoyo")
    //const first_file=res[0];
    console.log("printing response g")
    console.log("res it si",res);
    console.log("inside action getkeyssssss",res);
    // const f=res.data[1];
    // console.log("f is",f);
    // console.log("response");
    // console.log(res);
    // console.log("calling reducer");

    dispatch({
      type: GET_KEYS,

      payload: res.data,
    });
    dispatch({
        
        type:GET_PRIVATE,
        payload: res.data,
      });
  } catch (err) {}
};
