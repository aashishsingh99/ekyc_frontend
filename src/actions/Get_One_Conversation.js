import axios from "axios";
import { GET_ONE_CONVERSATION } from "./types";

import { setAlert } from "./alert.js";

// Register User
export const Get_One_Conversation = ({ chatRoomId }) => async (dispatch) => {
     console.log("inside dream");
     const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const timestamp=null;
  
    const body = JSON.stringify({ chatRoomId });

  

  try {
    
    const res = await axios.post("/api/event/singleConversation");
    console.log("response of single convo");
    console.log(res);

    dispatch({
      type: GET_ONE_CONVERSATION,
      payload: res.data,
    });
    
  } catch (err) {
    // dispatch({
    //   type: CONV_ERROR,
    // });
  }
};
