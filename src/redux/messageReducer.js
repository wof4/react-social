const initialState = {
  names: [
    { id: '1', name: 'Дмитрий' },
    { id: '2', name: 'Андрей' },
    { id: '3', name: 'Света' },
    { id: '4', name: 'Саша' },
    { id: '5', name: 'Юля' },
    { id: '6', name: 'Валера' },
    { id: '7', name: 'Виктор' },
  ],
  messages: [
    { id: '1', message: 'Привет' },
    { id: '2', message: 'Как дела?' },
    { id: '3', message: 'Как продвигается учоба?' },
    { id: '4', message: 'Как дела на работе?' },
    { id: '5', message: 'Чем занимаешся?' },
    { id: '6', message: 'У меня все хорошо.А у тебя?' },
    { id: '7', message: 'Как тебе фильм?' },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      const newMessage = {
        id: 9,
        message: action.messageText,
      };
      const MessageUserName = {
        id: 9,
        name: 'Виктор',
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        names: [...state.names, MessageUserName],
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = (messageText) => ({
  type: 'ADD-MESSAGE',
  messageText,
});
export default messageReducer;
