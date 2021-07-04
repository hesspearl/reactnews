import Head from "next/head"
import { SubscribeButton } from "../components/subscribeButton"
import styles from '../styles/home.module.scss'
import {GetStaticProps} from 'next'
import { stripe } from '../serveices/stripe'

interface HomeProps{
  product:{
      priceId:string;
      amount:number;
  }
}

export default function Home({product}:HomeProps) {
  return (
    <div>
      <Head>
      <title>ReactNews</title>
      </Head>
        <main className={styles.contentContainer}>
          <section className={styles.hero}>
               <span >Hey, welcome 👋😊</span>
               <h1>news about the <span >React</span> world.</h1>
               <p>
                 Get access to all the publication <br />
                 <span>for {product.amount}/ month</span>
               </p>
               <SubscribeButton priceId={product.priceId}/>
          </section>
          <img src="/images/avatar.svg" alt="Girl coding" />
        </main>
    </div>
  
  )
}
export const getServerSideProps:GetStaticProps = async()=>{

  const price = await stripe.prices.retrieve('price_1J9bl5KXFHy4cPKWvyyilZVl',{
      expand:['product']
  }

  )
  
  const product ={
      priceId:price.id,
      amount: new Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'USD'
      }).format(price.unit_amount/100)}
return{
  props:{
      product

  }
}
}