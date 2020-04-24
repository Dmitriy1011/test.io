let testUser = {
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    id: 7,
    last_name: "Lawson"
}
                    

function addUser(user) {
    let {email, first_name, last_name, avatar}

    let container = $('<div>');
    let emailUser = $('<div>');
    let first_nameUser = $('<div>');
    let last_nameUser = $('<img>');

    emailUser.text(user.email);
    first_nameUser.text(user.first_name);
    last_nameUser.text(user.last_name);
    avatarUser.attr('src', user.avatar);

    container.append(emailUser);
    container.append(first_nameUser);
    container.append(last_nameUser);
    container.append(avatarUser);
    container.addClass('user')

    $('.users').append(container);

} 

addUser(testUser);