/**
 *
 * todoList배열을 활용해서 완료한 리스트와 해야할 남은 리스트를 채워주세요!
 */
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

  return (
    <section>
      <h1>후니의 완료한 리스트</h1>
      <ul></ul>

      <h1>후니의 해야할 남은 리스트</h1>
      <ul></ul>
    </section>
  );
}

export default TodoList;
