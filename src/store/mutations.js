export default {
    CHANGE_CATEGORY(state, val) {
      state.chosenCategory = val;
    },
    SET_RESULT(state, {gained, max}) {
      state.points = [gained, max];
    },
    SET_ANSWERS(state, answers) {
      state.answers = answers;
    },
  };
  