import db from './db.js';
import { formatDistanceToNow, format } from 'date-fns'

// Render chat templates to DOM
// Clear the list of chats (when room changes)

class TodoUI{
    constructor(element){
        this.element = element;
    }
    render(docDisp){
        const data = docDisp.data()
        const dueDate = format(
            data.dueDate.toDate(),
            'eee, M/d/Y'
        )
        const distDueDate = formatDistanceToNow(
            data.dueDate.toDate(),
            { addSuffix: true }
        )
        const html = `
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-8 col-lg-5">
                    <span class="fs-2">${data.title}</span>
                </div>
                <div class="col-2 d-none d-lg-block">
                    <a class="btn btn-outline-primary btn-sm" data-bs-toggle="collapse" href="#collapse${docDisp.id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Show Details
                    </a>
                </div>
                <div class="col-3 text-end d-none d-lg-block">
                    <p><small>Assigned to: </small>${data.assignedTo}</p>
                    <p><small>Due: </small>${dueDate}</p>
                </div>
                <div class="col-4 col-lg-2 text-center">
                    <button type="button" class="btn btn btn-danger">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </div>
            </div>
            <div class="row d-lg-none align-items-center my-3">
                <div class="col-4">
                    ${data.assignedTo}
                </div>
                <div class="col-4">
                    ${distDueDate}
                </div>
                <div class="col-4">
                    <a class="text-decoration-underline" data-bs-toggle="collapse" href="#collapse${docDisp.id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <small>Show Details</small>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col collapse" id="collapse${docDisp.id}">
                    <div class="card card-body">
                        <p class="text-muted">${data.notes}</p>
                    </div>
                </div>
            </div>
        </li>
        `;

        this.element.innerHTML += html;
    }
    clear(){
        this.element.innerHTML = '';
    }
}

export default TodoUI;