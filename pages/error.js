import classes from '../styles/error.module.scss'
import Link from "next/link";
import Head from "next/head";

export default function Error(){



    return (
        <>
            <Head>
                <title>Ooops...</title>
                <meta name="viewport" content="width=device-width"/>
            </Head>
            <section className={classes.errorWrapper}>

                <h1 className={classes.notFound}>404</h1>

                <p className={classes.descriptionNotFound}>Такой страницы нет</p>
                <p className={classes.description}>Но есть другие полезные страницы</p>

                <ol className={classes.links}>
                    <li>
                        <Link href="https://sbercloud.ru/ru/warp/gitlab-about">
                            <a>Миграция в облако Cloud</a>
                        </Link>
                    </li>
                    <li >
                        <Link href="https://sbercloud.ru/ru/products/elastic-cloud-server">
                            <a>Elastic Cloud Server+</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://sbercloud.ru/ru/aicloud/mlspace">
                            <a>Популярный сервис</a>
                        </Link>
                    </li>
                </ol>
            </section>
        </>
    );
}