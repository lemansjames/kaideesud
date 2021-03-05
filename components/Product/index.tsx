import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import Layout from "../Layout";
import Footer from "../Footer";
import React from "react";
import PicList from "../PicList";
import ProductDetail from "../ProductDetail";
import Announcemobile from "../Announcemobile";
import Search2 from "../Search2";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    paper2: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "center",
    },
    paper3: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "right",
    },
    paper4: {
      backgroundColor: "#fff",
      boxShadow: "none",
      padding: theme.spacing(2),
      textAlignLast: "left",
    },
    paper5: {
      ["@media (max-width:751px)"]: {
        display: "none",
      },
    },
    logo: {
      // float:'left',
      textAlignLast: "center",
    },
    love: {
      float: "right",
      textAlign: "right",
    },
    chat: {
      float: "right",
      textAlign: "right",
    },
    btnSell: {
      //   float: "right",
      marginLeft: "1em",
      color: "#fff",
      backgroundColor: "#00C900",
      ["@media (max-width:751px)"]: {
        marginLeft: "0em",
        fontSize: "11px",
      },
      ["@media (max-width:354px)"]: {
        marginLeft: "0em",
        fontSize: "9px",
      },
    },
    btnRegister: {
      //   float: "right",
      marginLeft: "1em",
      color: "#00C900",
      ["@media (max-width:1300px)"]: {
        display: "none",
      },
    },
    gridDis: {
      ["@media (max-width:751px)"]: {
        display: "none",
      },
    },
  })
);

const Product = (props: any) => {
  // A Content
  const content = props.data.data.content;

  const classes = useStyles();
  // const router = useRouter()
  // const { data } = props.data
  // const contents: Content[] = data.contents.datas
  // const keywords: Keyword[] = data.keywords.datas

  const items = [];
  // console.log(content)
  // useEffect(() => {
  //     router.push('/Product')

  // })

  // for (const [index, value] of contents.entries()) {
  //     value.content_title

  //     items.push(<li key={index}>{value.content_title}</li>)
  // }

  return (
    <Layout title="Product | KaideeWa.com">
      <Search2 />
      <Container maxWidth="lg" className="container">
        <div className={classes.root}>
          <PicList />
          <ProductDetail data={content} />
          <Announcemobile />
        </div>
       
      </Container>
      <Footer />
    </Layout>
  );
};

export default Product;
