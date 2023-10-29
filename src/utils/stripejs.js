require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  console.log(process.env.STRIPE_PUBLISHABLE_KEY)
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

export default getStripe