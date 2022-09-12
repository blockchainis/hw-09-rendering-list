function TodoList() {
  const todoList = [
    {
      id: 0,
      title: "방 청소하기",
      isChecked: false,
    },
    {
      id: 1,
      title: "빨래 하기",
      isChecked: true,
    },
    {
      id: 2,
      title: "리엑트 공부하기",
      isChecked: false,
    },
    {
      id: 3,
      title: "헬스장 가기",
      isChecked: true,
    },
    {
      id: 4,
      title: "산책 가기",
      isChecked: false,
    },
    {
      id: 5,
      title: "책 읽기",
      isChecked: true,
    },
  ];
  const checkedList = todoList.filter((todoItem) => todoItem.isChecked);
  const checkedItems = checkedList.map((checkedItem) => (
    <li>{checkedItem.title}</li>
  ));

  return (
    <section>
      <h1>후니의 완료한 리스트</h1>
      <ul>{checkedItems}</ul>
    </section>
  );
}

export default TodoList;
