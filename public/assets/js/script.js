$(document).ready(() => {
    
    $('.devour-form').on('submit', (event) => {
        event.preventDefault();

        var burger_id = $(this).children('burger_id').val();
        console.log(burger_id);
        $.ajax({
            method: 'PUT',
            url: '/burgers/' + burger_id
        }).then((data) => {
            location.reload();
        })
    });
});