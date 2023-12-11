import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { ITask } from './interfaces/ITask';

import styles from './App.module.css';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskUpdate, setTaskUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if (display) {
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide');
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskUpdate(task);
  };

  const updadeTask = (id: number, title: string, difficulty: number) => {
    const updateTask: ITask = { id, title, difficulty };

    const updateItems = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    });

    setTaskList(updateItems);

    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskUpdate}
            handleUpdate={updadeTask}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <TaskForm
          btnText="Criar tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <TaskList
          taskList={taskList}
          handleDelete={deleteTask}
          handleEdit={editTask}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
