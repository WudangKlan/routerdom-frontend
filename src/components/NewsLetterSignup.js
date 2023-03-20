import classes from "./NewsLetterSignup.module.css";
import { useFetcher,Form } from "react-router-dom";
import { useEffect } from "react";

function NewsletterSignup() {
  const fether = useFetcher();

  const {data,state} = fether;
   
  useEffect(()=>{
    if (state === 'idle' && data && data.message){
      window.alert(data.message)
    }
  },[data,state])

  return (
    <fether.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        // aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fether.Form>
  );
}

export default NewsletterSignup;
