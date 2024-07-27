export default function loadContact() {

    const content = document.querySelector("#content");

    const formContainer = document.createElement("div");
    formContainer.setAttribute("id", "form-container");

    const form = document.createElement("form");
    form.setAttribute("id", "form");

    const button = document.createElement("button");
    button.innerHTML = "Submit"

    // Form elements
    const firstName = document.createElement("div");
    const firstNameLabel = document.createElement("label");
    const firstNameRequired = document.createElement("span");
    const firstNameInput = document.createElement("input");
    // Form element attributes
    firstNameLabel.setAttribute("for", "firstname");
    firstNameRequired.setAttribute("aria-label", "required");
    firstNameInput.setAttribute("type", "text");
    firstNameInput.setAttribute("id", "firstname");
    firstNameInput.setAttribute("name", "user_firstname");
    // Form element content
    firstNameRequired.innerHTML = "*";
    firstNameLabel.innerHTML = "First name"
    // Form element nesting
    firstNameLabel.appendChild(firstNameRequired);
    firstName.appendChild(firstNameLabel);
    firstName.appendChild(firstNameInput);

    const lastName = document.createElement("div");
    const lastNameLabel = document.createElement("label");
    const lastNameRequired = document.createElement("span");
    const lastNameInput = document.createElement("input");
    // Form element attributes
    lastNameLabel.setAttribute("for", "lastname");
    lastNameRequired.setAttribute("aria-label", "required");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("id", "lastname");
    lastNameInput.setAttribute("name", "user_lastname");
    // Form element content
    lastNameRequired.innerHTML = "*";
    lastNameLabel.innerHTML = "Last name"
    // Form element nesting
    lastNameLabel.appendChild(lastNameRequired);
    lastName.appendChild(lastNameLabel);
    lastName.appendChild(lastNameInput);

    const email = document.createElement("div");
    const emailLabel = document.createElement("label");
    const emailRequired = document.createElement("span");
    const emailInput = document.createElement("input");
    // Form element attributes
    emailLabel.setAttribute("for", "email");
    emailRequired.setAttribute("aria-label", "required");
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("name", "user_email");
    // Form element content
    emailRequired.innerHTML = "*";
    emailLabel.innerHTML = "Email address"
    // Form element nesting
    emailLabel.appendChild(emailRequired);
    email.appendChild(emailLabel);
    email.appendChild(emailInput);

    const message = document.createElement("div");
    const messageLabel = document.createElement("label");
    const messageRequired = document.createElement("span");
    const messageInput = document.createElement("textarea");
    // Form element attributes
    messageLabel.setAttribute("for", "message");
    messageRequired.setAttribute("aria-label", "required");
    messageInput.setAttribute("id", "message");
    messageInput.setAttribute("name", "user_message");
    messageInput.setAttribute("rows", "10");
    messageInput.setAttribute("cols", "40");
    // Form element content
    messageRequired.innerHTML = "*";
    messageLabel.innerHTML = "What would you like to say?"
    // Form element nesting
    messageLabel.appendChild(messageRequired);
    message.appendChild(messageLabel);
    message.appendChild(messageInput);

    const formItemArray = [firstName, lastName, email, message];

    for (let item of formItemArray) {
        item.className = "form-item";
        form.appendChild(item);
    }

    form.appendChild(button);

    formContainer.appendChild(form);

    content.appendChild(formContainer);

}