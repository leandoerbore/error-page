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
            <div className={classes.wrapper}>
                <div>
                    <div className={classes.notFound}>
                        <p>404</p>
                    </div>

                    <div className={classes.description}>
                        <h3 className={classes.firstH}>Такой страницы нет</h3>
                        <h3 className={classes.secondH}>Но есть другие полезные страницы</h3>
                    </div>

                    <div className={classes.links}>
                        <Link href="https://sbercloud.ru/ru/warp/gitlab-about">
                            <a>Миграция в облако Cloud</a>
                        </Link>
                        <Link href="https://sbercloud.ru/ru/products/elastic-cloud-server">
                            <a>Elastic Cloud Server+</a>
                        </Link>
                        <Link href="https://sbercloud.ru/ru/aicloud/mlspace">
                            <a>Популярные сервис</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}