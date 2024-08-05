import {
    CREATE_CHAT_FAILURE,
    CREATE_CHAT_REQUEST,
  CREATE_CHAT_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  GET_ALL_CHATS_FAILURE,
  GET_ALL_CHATS_REQUEST,
  GET_ALL_CHATS_SUCCESS,
} from "./message.actionType";

export const createMessage = (message) => async (dispatch) => {
  dispatch({ type: CREATE_MESSAGE_REQUEST });
  try {
    const { data } = await Api.post(`/api/message`, message);
    console.log("created message", data);
    dispatch({ type: CREATE_MESSAGE_SUCCESS, payload: data });
  } catch (error) {
    console.log("cathch error", error);

    dispatch({ type: CREATE_MESSAGE_FAILURE, payload: error });
  }
};


export const createChat = (chat) => async (dispatch) => {
    dispatch({ type: CREATE_CHAT_REQUEST });
    try {
      const { data } = await Api.post(`/api/chats`, chat);
      console.log("created chat", data);
      dispatch({ type: CREATE_CHAT_SUCCESS, payload: data });
    } catch (error) {
      console.log("cathch error", error);
  
      dispatch({ type: CREATE_CHAT_FAILURE, payload: error });
    }
  };

  export const getAllChats = (chat) => async (dispatch) => {
    dispatch({ type: GET_ALL_CHATS_REQUEST });
    try {
      const { data } = await Api.post(`/api/chats/user`, chat);
      console.log("get all  chat", data);
      dispatch({ type: GET_ALL_CHATS_SUCCESS, payload: data });
    } catch (error) {
      console.log("cathch error", error);
  
      dispatch({ type: GET_ALL_CHATS_FAILURE, payload: error });
    }
  };

