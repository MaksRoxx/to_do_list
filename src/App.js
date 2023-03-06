import Layout from "./componenets/Layout/Layout";
import Main from "./componenets/Main/Main";
import Section from "./componenets/Section/Section";
import SectionItem from "./componenets/Section/SectionItem/SectionItem";
import Modal from "./componenets/Modal/Modal";
import SectionAddForm from "./componenets/Section/SectionAddForm/SectionAddForm";
import {useMemo, useState} from "react";

function App() {
    const [isAdd, setAdd] = useState(false)
    const [todos, setTodos] = useState([])
    let editTodo = {}

    const onDelete = (value) => {
        setTodos(todos.filter(item => item.todoText !== value))
    }

    const onEdit = (value) => {
        const newTodos = todos.map((item) => item.todoText === value ? {...item, check: !item.check} : item)
        setTodos(newTodos)
    }

    let todosList = useMemo(() => todos.map((item, index) => item.check === false &&
            <SectionItem key={item.todoText + index}
                         check={item.check}
                         onDelete={onDelete}
                         onEdit={onEdit}
                         isCheck
                         text={item.todoText}/>)
        , [todos])

    let doneList = useMemo(() => todos.map((item, index) => item.check === true &&
            <SectionItem key={item.todoText + index}
                         check={item.check}
                         onDelete={onDelete}
                         text={item.todoText}/>)
        , [todos])

    return (
        <div className="App">
            <Layout>
                <Main>
                    <Section name='My Tasks' add={true} setAdd={setAdd}>
                        {todosList}
                    </Section>
                    <Section name="Done">
                        {doneList}
                    </Section>
                </Main>

            </Layout>
            {isAdd && <Modal>
                <SectionAddForm onClose={setAdd} todos={todos} setTodos={setTodos}/>
            </Modal>}
        </div>
    );

}

export default App;
