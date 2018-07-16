import todos from "./reducer";

describe("Tests todos reducer", () => {
  test("It returns todos with a new todo", () => {
    const state = { todos: [] };
    const action = {
      type: "ADD_TODO",
      id: 0,
      text: "Hello",
      completed: false
    };
    const expected = {
      todos: [
        {
          id: 0,
          text: "Hello",
          completed: false
        }
      ],
      visibilityFilter: "SHOW_ALL"
    };

    expect(todos(state, action)).toEqual(expected);
  });

  test("It returns empty todos", () => {
    const state = {
      todos: [
        {
          id: 0,
          text: "Hello",
          completed: false
        }
      ]
    };
    const action = {
      type: "REMOVE_TODO",
      id: 0
    };
    const expected = {
      todos: [],
      visibilityFilter: "SHOW_ALL"
    };

    expect(todos(state, action)).toEqual(expected);
  });

  test("It toggles desired todo to true", () => {
    const state = {
      todos: [
        {
          id: 0,
          text: "Hello",
          completed: false
        }
      ]
    };
    const action = {
      type: "TOGGLE_TODO",
      id: 0
    };
    const expected = {
      todos: [
        {
          id: 0,
          text: "Hello",
          completed: true
        }
      ],
      visibilityFilter: "SHOW_ALL"
    };

    expect(todos(state, action)).toEqual(expected);
  });
});
