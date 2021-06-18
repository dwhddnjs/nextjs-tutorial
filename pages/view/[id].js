import axios from "axios";
import { useRouter } from "next/router";
import { Loader } from "semantic-ui-react";
import Item from "../../src / component/Item";
import Head from "next/head";

const Post = ({ item, name }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div style={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          Loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다
          {item && <Item item={item} />}
        </>
      )}
    </>
  );
};

export default Post;

export async function getStaticPath() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;
  return {
    path: data.slice(0, 9).map((item) => ({
      params: {
        id: item.id.toSting(),
      },
    })),
    fallback: true,
  };
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
