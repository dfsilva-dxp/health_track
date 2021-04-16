import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";

import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceID: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Health Track | Welcome</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, bem-vindo</span>
          <h1>
            Deixe-nos cuidar da sua <span>saúde!</span>
          </h1>
          <p>
            Tenha acesso full <br />
            <span>por {product.amount} mês</span>
          </p>
          <SubscribeButton priceID={product.priceID} />
        </section>
        <img src="/images/avatar.svg" alt="Girl codding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1IgqW6CUVlMOI53Yzjtn2lLg", {
    expand: ["product"],
  });

  const product = {
    priceID: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
