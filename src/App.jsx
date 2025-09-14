import Content from "./components/Content";
import Header from "./components/Header";
import React from "react";

function App() {
  // function signUp(formData) {
  //   const data = Object.fromEntries(formData)
  //   const dietryRestrictions = formData.getAll('dietryRestrictions')
  //   const allData = {
  //     ...data,
  //     dietryRestrictions
  //   }
  //   console.log(allData)
    
  // }
  const [message, setMessages] = React.useState(["a", "b"])

  const text = message === 0 ? "You're all caught up!":
  message === 1 ? "You have 1 unread message": 
  `You have ${message.length} unread message`

  return (
    <>
      {/* <Header />
      <Content /> */}
      {/* <section>
        <h1>Signup form</h1>
        <form action={signUp} >
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" defaultValue="kelvin@mail.com"/>
          <br />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" defaultValue="12345"/>
          <br />

          <label htmlFor="description"></label>
          <textarea name="description" id="description" defaultValue="Random description"></textarea>
          <br />

          <fieldset>
            <legend>Employment Status:</legend>
            <label>
              <input type="radio" name="employmentStatus" value="unemployed" />
              Unemployed
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="part-time" />
              Part-time
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="full-time" />
              Full-time
            </label>
          </fieldset>

          <fieldset>
            <legend>Dietry restrictions:</legend>
            <label>
              <input type="checkbox" name="dietryRestrictions" value="vegan" />
              Vegan
            </label>
            <label>
              <input type="checkbox" name="dietryRestrictions" value="gluten-free" />
              Gluten-free
            </label>
            <label>
              <input type="checkbox" name="dietryRestrictions" value="kosher" />
              Kosher
            </label>
          </fieldset>

          <label htmlFor="favColor">What is your favorite color</label>
          <select name="favColor" id="favColor" defaultValue="" required>
            <option value="" disabled>--- Chose a color ---</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
          </select>

          <button>Submit</button>

        </form>
      </section> */}
      <h1>{text}</h1>
    </>
  );
}

export default App;
