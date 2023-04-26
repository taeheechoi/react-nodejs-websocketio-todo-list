### Reference

- https://medium.com/javascript-in-plain-english/building-a-beautiful-kanban-board-with-node-js-react-and-websockets-d6114e187e10
- Issue: todo list does not get refreshed on another computer after being emitted. TasksContainer.js in client

```
  useEffect(() => {
    socket.on("tasks", (data) => {
      setTasks(data);
    });
  }, [socket]);
```

- Resolution: changed from socket.emit to socketIO.emit on index.js in server

```
  socket.on("fetchComments", (data) => {
    const taskItems = tasks[data.category].items;
    for (let i = 0; i < taskItems.length; i++) {
      if (taskItems[i].id === data.id) {
        socketIO.emit("comments", taskItems[i].comments);
      }
    }
  });

```
