import { GetStaticPaths, GetStaticProps } from 'next';
import api from '../../utils/api';
import axios from 'axios';
import styles from './username.module.css';

export const getStaticProps: GetStaticProps = async context => {
    const username = context.params.username;

    const api = axios.create({
    baseURL: 'http://localhost:3000/api/'
    })

    const response = await api.get(`/user/?username=${username}`)

    const data = response.data;

    return {
        props: data
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {username: 'eduardo-ehsc'}},
            {params: {username: 'gianni-lab'}},
            {params: {username: 'edu'}}
        ],
        fallback: false
    }
}

export default function Username({avatar_url, name, login, bio, followers, following, location, blog, twitter_username, public_repos, stars_count, pinnedRepos}){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.search_bar}>
                    <a href="https://github.com/">
                        <img src="/octicon.svg" alt="GitHub" className={styles.search_icon}/>
                    </a>
                    <input type="text" placeholder="Search or jump to..."/>
                    <a href="https://github.com/pulls">Pull requests</a>
                    <a href="https://github.com/issues">Issues</a>
                    <a href="https://github.com/marketplace">Marketplace</a>
                    <a href="https://github.com/explore">Explore</a>
                </div>

                <div className={styles.user_navigation}>
                    <a href="https://github.com/notifications">
                        <img src="/bell.svg" alt="Notificações"/>
                    </a>
                    <div className={styles.dropdown}>
                        <img src="/plus.svg" alt="Adicionar"/>
                        <img src="/sort-down.svg" alt="DropDown" className={styles.drop_icon}/>
                    </div>
                    <div className={styles.dropdown}>
                        <img src={avatar_url} alt="Usuário"className={styles.mini_avatar}/>
                        <img src="/sort-down.svg" alt="DropDown" className={styles.drop_icon}/>
                    </div>
                </div>
            </header>
        </>
    )
}