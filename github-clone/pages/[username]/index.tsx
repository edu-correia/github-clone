import { GetStaticPaths, GetStaticProps } from 'next';
import api from '../../utils/api';
import axios from 'axios';

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
            
        </>
    )
}