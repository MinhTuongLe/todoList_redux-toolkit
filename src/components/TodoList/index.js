import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState, useRef, useEffect } from "react";
import { todoRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./TodosSlice";

export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const todoList = useSelector(todoRemainingSelector);
  const todoNameInputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [todoList]);

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addToDo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority("Medium");
    todoNameInputRef.current.focus();
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "56vh" }}>
      <Col
        id="list"
        span={24}
        style={{ height: "60%", overflowY: "scroll" }}
        ref={listRef}
      >
        {todoList.map((todo, index) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            priority={todo.priority}
            isFirst={index === 0}
          />
        ))}
      </Col>
      <Col span={24} style={{ height: "10%" }}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            value={todoName}
            onChange={handleInputChange}
            ref={todoNameInputRef}
          />
          <Select
            defaultValue="Medium"
            onChange={handlePriorityChange}
            value={priority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
