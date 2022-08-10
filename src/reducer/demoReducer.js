export const demoReducer = (allTodoList, action) => {
  switch (action.type) {
    case 'add_todo':{
      const userList = allTodoList[action.user]
      allTodoList[action.user] = {
        ...userList,
        todo: [...userList.todo, action.todo],
      }

      return { ...allTodoList }
    }
    default:
      return allTodoList
  }
}
