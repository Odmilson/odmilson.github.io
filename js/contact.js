class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.showPopup(this.settings.success, "success");
  }

  displayError() {
    this.showPopup(this.settings.error, "error");
  }

  showPopup(message, type) {
    const popup = document.createElement("div");
    popup.className = `popup ${type}`;
    popup.innerHTML = `<div class="popup-content">${message}</div>`;
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 5000); // Remove o popup após 5 segundos (você pode ajustar esse tempo)
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    } finally {
      event.target.disabled = false;
      event.target.innerText = "Enviar"; // Restaura o texto do botão
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "Mensagem enviada com sucesso!",
  error: "Não foi possível enviar a mensagem. Por favor, tente novamente mais tarde.",
});
formSubmit.init();
