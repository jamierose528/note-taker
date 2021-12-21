const noteTitle = $(".note-title");
const noteTextArea = $(".note-textarea");
const noteList = $(".list-group");


const postNote = (note) =>
fetch('/api/notes', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
});

const saveNote = (note) =>
festch('/api/notes', {
    method: 'POST',
    headers: {
        'Conent-Type': 'application/json'
    },
    body: JSON.stringify(note),
});

const deleteNote = (title) =>
fetch('/api/notes/${title}', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
});