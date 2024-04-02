import db from './db.js';
import {
    collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where, orderBy, serverTimestamp,
    getDoc, updateDoc, Timestamp
} from 'firebase/firestore'

// adding new todo documents
// setting up a real-time listener to get new todos
// updating the username
// updating the list

class TodoList {
    constructor(todoListId, currUser){
        this.id = todoListId;
        this.currUser = currUser;
        this.todoLists = collection(db, 'todoList');
        this.todos = collection(db, 'todoList', todoListId, 'todos');
        this.unsub;
    }
    async addTodo(title, notes, assignedUser, dueDate){
        // format a chat object
        const now = new Date();
        const todo = {
            title,
            notes,
            dueDate,
            assignedTo: assignedUser, 
            createdBy: this.currUser,
            createdAt: Timestamp.fromDate(now)
        };
        // save chat document
        const response = await addDoc(this.todos, todo);
        return response;
    }
    getTodos(callback){
        const q = query(this.todos, orderBy('createdAt'));
        // real time collection data
        this.unsub = onSnapshot(q, snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    // update UI
                    callback(change.doc);
                }
            });
        });
    }
    updateName(currUser){
        this.currUser = currUser;
        localStorage.setItem('currUser', currUser);
    }
    updateList(todoListId){
        this.id = todoListId;
        if(this.unsub){
            this.unsub();
        }
    }
}

export default TodoList;