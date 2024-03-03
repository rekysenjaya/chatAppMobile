import {
  READ_CHAT,
  SEND_CHAT,
  UserActionTypes,
  UserState,
} from "./types";

const initialState: UserState = {
  user: [
    'Lisa',
    'Dian',
  ],
  chat: [
    {
      to: 'Dian',
      me: 'Lisa',
      chat: 'Hai Dian! Gimana nih, rencana liburan semester kita?',
      read: true,
      id: 2121222
    },
    {
      to: 'Lisa',
      me: 'Dian',
      chat: 'Hai Lisa! Aku mau ke Bali, nih. Pengen banget nikmatin pantainya, kamu?',
      read: false,
      id: 2121223
    },
    {
      to: 'Dian',
      me: 'Lisa',
      chat: 'Wah, keren! Aku lebih suka wisata pegunungan. Mau ke Puncak aja, kayaknya asik.',
      read: false,
      id: 2121224
    },
    {
      to: 'Lisa',
      me: 'Dian',
      chat: 'Seru juga tuh! Bukankah udara di pegunungan bener-bener seger?',
      read: false,
      id: 2121225
    },
    {
      to: 'Dian',
      me: 'Lisa',
      chat: 'Iya, bener banget. Udah punya rencana detailnya belum?',
      read: false,
      id: 2121226
    },
    {
      to: 'Lisa',
      me: 'Dian',
      chat: 'Belum, masih brainstorming. Kamu mau gabung?',
      read: false,
      id: 2121227
    },
    {
      to: 'Dian',
      me: 'Lisa',
      chat: 'Wah, boleh juga! Kita bisa rencana bareng nanti. Jadi, kapan kita mulai?',
      read: false,
      id: 2121228
    },
    {
      to: 'Lisa',
      me: 'Dian',
      chat: 'Ok, nanti kita obrolin ya, jangan lupa',
      read: false,
      id: 2121229
    },
    {
      to: 'Dian',
      me: 'Lisa',
      chat: 'Ok kalau gitu',
      read: false,
      id: 2121230
    },
    {
      to: 'Dian',
      me: 'Lisa',
      chat: 'See you',
      read: false,
      id: 2121231
    },
  ]
};

export function userReducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case SEND_CHAT:
      return {
        ...state,
        chat: [...state.chat, action.payload],
      };
    case READ_CHAT:
      return {
        ...state,
        chat: state.chat.map(item => {
          if (action.payload.to === item.to) {
            return ({ ...item, read: true })
          }
          return item
        })
      };
    default:
      return state;
  }
}
