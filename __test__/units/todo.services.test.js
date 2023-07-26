const TodoServices = require("../../services/todo.services");
const { Todo } = require("../../models");

let newTodo;
beforeAll(() => {
  Todo.create = jest.fn();
  newTodo = {
    userId: 1,
    title: "write unit test so fun",
    completed: false,
    dueDate: "1990-09-09",
  };
});

describe("TodoService.createTodo", () => {
  // #1: createTodo should be a function
  it("TodoServices.createTodo should be a function", () => {
    expect(TodoServices.createTodo).toBeInstanceOf(Function);
  });

  // #2: cretedTdo should call Todo.create
  it("TodoServices.createTodo should call Todo.create", () => {
    // Action
    TodoServices.createTodo();

    // Assert
    expect(Todo.create).toBeCalled();
  });

  // #3: call with newTodo
  it("Todo.create should call with new todo", () => {
    // Arrange

    // Action
    TodoServices.createTodo(newTodo);

    // Assert
    expect(Todo.create).toHaveBeenCalledWith(newTodo);
  });

  // #4: Promise
  it("Todo.create should return Promise", () => {
    //Arrange

    //Act
    let result = TodoServices.createTodo(newTodo);

    //Assert
    expect(result).toBeInstanceOf(Promise);
  });

  // #5: Promise Resolve
  it("TodoServices.createTodo should return newTodo when fullfilled", async () => {
    // Arrangement
    Todo.create.mockReturnValue(newTodo);
    // Act
    let result = await TodoServices.createTodo(newTodo);

    // Assert
    expect(result).toEqual(newTodo);
  });

  // #6: Promise Reject
  it("TodoServices.createTodo should throw Error when reject", async () => {
    // Arrangment
    // let rejectObject =
    Todo.create.mockReturnValue(Promise.reject(new Error("Fake Error")));

    // Act
    let result = TodoServices.createTodo();

    // Assert
    expect(result).rejects.toThrowError("Fake Error");
  });
});
