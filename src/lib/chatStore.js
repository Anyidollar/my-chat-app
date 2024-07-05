import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,

  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    //CHECK IF THE CURRENT USER IS BLOCKED

    if (user.blocked.includes(currentUser.id)) {
      return set({
        isCurrentUserBlocked: true,
        chatId,
        user: null,
        isReceiverBlocked: false,
      });
    }

    //CHECK IF THE RECEIVER USER IS BLOCKED
    else if (currentUser.blocked.includes(user.id)) {
      return set({
        isCurrentUserBlocked: false,
        chatId,
        user: user,
        isReceiverBlocked: true,
      });
    } else {
      return set({
        isCurrentUserBlocked: false,
        chatId,
        user,
        isReceiverBlocked: false,
      });
    }
  },
  changeBlock: () => {
    set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
}));
