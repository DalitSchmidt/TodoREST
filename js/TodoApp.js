
Todo = {
    // C(reate) RUD
    addTask: function() {
        var task = {
            title: $('input[name=title]').val(),
            date: $('input[name=date]').val(),
            description: $('textarea[name=description]').val()
        };

        $.ajax({
            method: "POST",
            url: "http://exmaple.com/todo",
            type: "JSON",
            data: JSON.stringify( task ), // When we send string the request is payload and not form data
            success: function( response ) {
                // The 'response' is actually the ID that the server return
                $('#board').append(
                    '<div class="task" data-id="' + response + '">' +
                    '   <span>' +
                    '     <a class="remove-icon"><i class="fa fa-remove"></i></a>' +
                    '   </span>' +
                    '   <span>' +
                    '     <a class="edit-icon"><i class="fa fa-pencil"></i></a>' +
                    '   </span>' +
                    '   <h3>' + task.title + '</h3>' +
                    '   <time>' + task.date + '</time>' +
                    '   <p>' + task.description + '</p>' +
                    '</div>'
                );
            },
            fail: function () {
                alert('Failed to create task');
            }
        });
    },

    // CRU D(elete)
    deleteTask: function( e ) {
        var el = $(e.target);
        var id = el.closest('.task').data('id');

        $.ajax({
            method: "DELETE",
            url: "http://exmaple.com/todo/" + id,
            type: "JSON",
            success: function( response ) {
                el.remove();
            }
        });
    },

    // CR(red) UD
    getAllTasks: function () {
        $.ajax({
            method: "GET",
            url: "http://exmaple.com/todo/",
            type: "JSON",
            success: function ( tasks ) {
                $.each( tasks, function( i, task ) {
                    $('#board').append(
                        '<div class="task" data-id="' + response + '">' +
                        '   <span>' +
                        '     <a class="remove-icon"><i class="fa fa-remove"></i></a>' +
                        '   </span>' +
                        '   <span>' +
                        '     <a class="edit-icon"><i class="fa fa-pencil"></i></a>' +
                        '   </span>' +
                        '   <h3>' + task.title + '</h3>' +
                        '   <time>' + task.date + '</time>' +
                        '   <p>' + task.description + '</p>' +
                        '</div>'
                    );
                })
            }
        })
    },

    updateTask: function () {
        var task = {
            title: $('input[name=title]').val(),
            date: $('input[name=date]').val(),
            description: $('textarea[name=description]').val()
        };

        $.ajax({
            method: "PUT",
            url: "http://exmaple.com/todo/" + id,
            type: "JSON",
            data: JSON.stringify( task ), // When we send string the request is payload and not form data
            success: function( response ) {
                // The 'response' is actually the ID that the server return
                $('#board').append(
                    '<div class="task" data-id="' + response + '">' +
                    '   <span>' +
                    '     <a class="remove-icon"><i class="fa fa-remove"></i></a>' +
                    '   </span>' +
                    '   <span>' +
                    '     <a class="edit-icon"><i class="fa fa-pencil"></i></a>' +
                    '   </span>' +
                    '   <h3>' + task.title + '</h3>' +
                    '   <time>' + task.date + '</time>' +
                    '   <p>' + task.description + '</p>' +
                    '</div>'
                );
            },
            fail: function () {
                alert('Failed to create task');
            }
        });
    },

    resetFields: function () {
        $('#form input').val('');
        $('#form textarea').val('');
    },

    bindEvents: function () {
        $('button').on('click', $.proxy(this.addTask, Todo));
        $('#board').on('click', '.remove-icon', $.proxy(this.deleteTask, Todo));
        $('#board').on('click', '.edit-icon', $.proxy(this.editTask, Todo));
    },

    init: function () {
        this.bindEvents();
        this.getAllTasks();
    }
};

$(document).ready(function() {
    Todo.init();
});
