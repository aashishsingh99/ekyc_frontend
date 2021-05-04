import {
  REGISTER_SUCCESS2,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN2_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CONV_ERROR,
  GET_CONV,
  ADD_CONV,
  CURRENT_CONV,
  GET_ALL_USERS,
  GET_EVENTS,
  ADDMESSAGE,
  CONV_STATE,
  STATE_CONVERSATION,
  GET_ONE_CONVERSATION,
  GET_KEYS,
  GET_PRIVATE,
  USER_LOADED2,
  APPROVE,
  NOTIFY,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  current_user: null,
  fin: null,
  category: null,
  conversation: [],
  currentconversation: {},
  currentevents: [],
  dict: {},
  singleConversation: [],
  public_key: null,
  private_key: null,
  users: [],
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    }
    case NOTIFY: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        current_user: payload,
      };
    }
    case APPROVE: {
      return {
        ...state,
        users: payload,
      };
    }
    case USER_LOADED2: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        fin: payload,
      };
    }
    case ADDMESSAGE: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        currentevents: [...state.currentevents, payload],
      };
    }
    case STATE_CONVERSATION: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        currentevents: [...state.currentevents, payload],
      };
    }
    case GET_KEYS: {
      return {
        ...state,
        public_key: payload[2],
      };
    }
    case GET_ALL_USERS: {
      return {
        ...state,
        users: payload,
      };
    }
    case GET_PRIVATE: {
      return {
        ...state,
        private_key: payload[1],
      };
    }
    case GET_EVENTS: {
      console.log("this is current events  convo");
      console.log(payload);
      return {
        ...state,
        loading: false,
        currentevents: [...state.currentevents, payload],
      };
    }
    case GET_ONE_CONVERSATION: {
      console.log("this is single convo sakshi");
      console.log(payload);
      return {
        ...state,
        loading: false,
        singleConversation: [...state.currentevents, payload],
      };
    }
    case CURRENT_CONV: {
      console.log("this is current convo");
      console.log(payload);
      return {
        ...state,
        loading: false,
        currentconversation: payload,
      };
    }
    case GET_CONV: {
      return {
        ...state,
        loading: false,
        conversation: payload,
      };
    }
    case CONV_STATE: {
      console.log(payload);
      return {
        ...state,
        conversation: [payload, ...state.conversation],
      };
    }
    case ADD_CONV: {
      state.conversation = state.conversation.filter(
        (conversations) => conversations._id !== payload._id
      );
      console.log(payload);
      return {
        ...state,
        conversation: [payload, ...state.conversation],
      };
    }
    case CONV_ERROR:
      return {
        ...state,
        error: payload,
        conversation: [],
        loading: false,
      };

    case REGISTER_SUCCESS:
    case REGISTER_SUCCESS2:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN2_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        fin: payload,
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
export default authReducer;
