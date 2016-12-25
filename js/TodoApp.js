Todo = {

    /** 
     * The function adds the tasks
     * The function performs the act of creation in crud // C(reate) RUD
     *  **/
    addTask: function() {

        /**
         * Takes the values that are in input - title, date and description to their name
         * @type {{title: (*|jQuery), date: (*|jQuery), description: (*|jQuery)}}
         */
        var task = {
            title: $('input[name=title]').val(),
            date: $('input[name=date]').val(),
            description: $('textarea[name=description]').val()
        };

        /**
         * Ajax request includes: method ("POST"), url ("http://exmaple.com/todo"), type ("JSON"), data: JSON.stringify( task ) // When we send string the request is payload and not form data, success: function( response ) {
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
         and fail: function () {
                alert('Failed to create task');
            }
         */
        $.ajax({
            method: "POST",
            url: "http://exmaple.com/todo",
            type: "JSON",
            data: JSON.stringify( task ), // When we send string the request is payload and not form data
            // success function puts all the information into the DOM using append
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
            //fail function displays a message when the task was not created (function failed to perform the act of creation is in crud)
            fail: function () {
                alert('Failed to create task');
            }
        });
    },

    /**
     * The function enables the delete of a task
     * The function performs the delete in crud // CRU D(elete)
     *  **/
    deleteTask: function( e ) {
        // Find the target element carried by the user in cooperation with the command: var el = $(e.target);
        var el = $(e.target);
        // Element Id find the nearest destination where action performed by the user using the command: var id = el.closest('.task').data('id');
        var id = el.closest('.task').data('id');

        /**
         * Ajax request includes: method ("DELETE"), url ("http://exmaple.com/todo/" + id), type ("JSON") and success: function( response ) {
                el.remove();
            }
         */
        $.ajax({
            method: "DELETE",
            // Use id to make sure that the task that the user wants to delete this indeed is deleted and another
            url: "http://exmaple.com/todo/" + id,
            type: "JSON",
            // success function deletes the relevant element from the DOM
            success: function( response ) {
                el.remove();
            }
        });
    },

    /**
     * The function takes the task (call them)
     * The function performs the act of reading in crud // CR(ead) UD
     */
    getAllTasks: function () {
        /**
         * Ajax request includes: method ("GET"), url: ("http://exmaple.com/todo/"),
         type ("JSON"), and success: function ( tasks ) {
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
         */
        $.ajax({
            method: "GET",
            url: "http://exmaple.com/todo/",
            type: "JSON",
            success: function ( tasks ) {
                //Loop goes on all existing tasks and presents them
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

    /**
     * The function allows to update the task
     * The function performs the update action on the crud
     */
    updateTask: function () {
        /**
         * Takes the values that are in input - title, date and description to their name
         * @type {{title: (*|jQuery), date: (*|jQuery), description: (*|jQuery)}}
         */
        var task = {
            title: $('input[name=title]').val(),
            date: $('input[name=date]').val(),
            description: $('textarea[name=description]').val()
        };

        /**
         * Ajax request includes: method ("PUT"), url ("http://exmaple.com/todo/" + id"), type ("JSON"), data: JSON.stringify( task ), // When we send string the request is payload and not form data, success: function( response ) {
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
         and fail: function () {
                alert('Failed to create task');
            }
         */
        $.ajax({
            method: "PUT",
            // Use ID to make sure that the task that the user wants to edit it does not hold another task
            url: "http://exmaple.com/todo/" + id,
            type: "JSON",
            data: JSON.stringify( task ), // When we send string the request is payload and not form data
            // success function updates the information in the DOM
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
            // The function displays a message when the update task is not performed (actually function failed to perform the update action on the crud)
            fail: function () {
                alert('Failed to create task');
            }
        });
    },

    /**
     *The function reset the input fields that in #form
     *  **/
    resetFields: function () {
        $('#form input').val('');
        $('#form textarea').val('');
    },

    /**
     * The function 'BindEvents()' operates all the elements and events page when clicking on the button with the command $('button').On('click', $.proxy this.saveTask, Todo)); and $('#board').on('click', '.remove-icon', $.proxy(this.deleteTask, Todo)); and $('#board').on('click', '.edit-icon', $.proxy(this.updateTask, Todo));
     * The function 'BindEvents()' must register every object literal.
     *  **/
    bindEvents: function () {
        $('button').on('click', $.proxy(this.addTask, Todo));
        $('#board').on('click', '.remove-icon', $.proxy(this.deleteTask, Todo));
        $('#board').on('click', '.edit-icon', $.proxy(this.updateTask, Todo));
    },

    /**
     * * The function 'init()' performs initialization by calling (activation) of the function 'BindEvents()' and 'getAllTasks()'.
     * The function 'init()' must register every object literal.
     * **/
    init: function () {
        this.bindEvents();
        this.getAllTasks();
    }
};

/**
 * Boot each object with $(document).ready(function() {
    Todo.init();
});
 * **/
$(document).ready(function() {
    Todo.init();
});