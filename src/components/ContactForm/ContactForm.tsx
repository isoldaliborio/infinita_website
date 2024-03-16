import styles from "./styles/ContactForm.module.scss";

export default function ContactForm() {

    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData(event.target);
      const inputName = formData.get('inputName');
      const inputEmail = formData.get('inputEmail');
      console.log(inputName, inputEmail) 
  
    //   sendInputValueToApi(inputValue).then(() => /* Do something */)  
    };
  
    return (
      <form className={`${styles.form} col-5`} onSubmit={handleSubmit}>
        <input className={`${styles.name} ${styles.input} `}type="string" name="inputName" placeholder="NAME">
        </input>
        <input className={`${styles.email} ${styles.input}`} type="string" name="inputEmail" placeholder="EMAIL"/>
        <input className={`${styles.message} ${styles.input}`} type="string" name="message" placeholder="MESSAGE" />
        <button className={`${styles.sendButton} col-2`} type="submit">SEND</button>
      </form>
    );
  }

