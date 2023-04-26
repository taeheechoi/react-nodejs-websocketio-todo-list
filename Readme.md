### Reference

- https://medium.com/javascript-in-plain-english/building-a-beautiful-kanban-board-with-node-js-react-and-websockets-d6114e187e10
- Issue: todo list does not get refreshed on another computer after being emitted

```
TasksContainer.js

  useEffect(() => {
    socket.on("tasks", (data) => {
      setTasks(data);
    });
  }, [socket]);
```
