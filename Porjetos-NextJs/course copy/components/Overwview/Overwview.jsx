import Head from "next/head";
import NextPage from "../NextPage/NextPage";
import Text from "../Text/Text";
import Todos from "../Todos/Todos";

function Overwview() {
    return ( 
        <>
        <Head>
            <title>
                home
            </title>
        </Head>
        <Text/>
        <NextPage/>
        <Todos/>
        </>
     );
}

export default Overwview;