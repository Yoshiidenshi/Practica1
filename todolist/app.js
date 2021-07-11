$(function() {
    let buttonEnter = $('#enter');
    let userInput = $('#userInput');
    $('.intro').delay(500).animate({'opacity':'1'},200)
    $('#first').delay(1000).animate({'opacity':'1'},500)
    $('#second').delay(2000).animate({'opacity':'1'},500)
    $('#third').delay(3000).animate({'opacity':'1'},500)
    $('#enter').delay(4000).animate({'opacity':'1'},500)
    $('input').delay(4000).animate({'opacity':'1'},500)

    
    
    let ul = $('ul');
    let localStorage = window.localStorage;
    let itemMap = [{
       ind:1,
       text:'sample'
    }]

    function inputLength() {
        return !!userInput.val();
    }

    function createTodo() {
        let li = $("<li>");
        li.fadeIn(500);
        li.append(document.createTextNode(userInput.val()));
        ul.append(li);

        itemMap.push({
            ind:itemMap.length+1,
            text:userInput.val()
        })
        localStorage.setItem('Todo_items', JSON.stringify(itemMap));

        userInput.val('');
        li.click(todoDone);

        let deleteButton = $('<button>');
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
        deleteButton.click(deleteTodoItem);

        function deletecolor() {
            li.toggleClass('deletecolor')
        }

        function deleteTodoItem() {
            li.click(todoDone);
            li.click(deletecolor);
            li.animate({
                'margin-left':'290px',
                'margin-right':'290px',
            },{duration:700,queue:false}).fadeOut(1000);
        }

        function todoDone() {
            li.toggleClass('done')
        }
    }

    function changeListAfterKeypress(event) {
        if ( inputLength() && event.which === 13) {
            createTodo();
        }
    }

    userInput.keypress(changeListAfterKeypress);

    buttonEnter.click(function(){
        if (inputLength()) {
            createTodo();
        }
    });
})