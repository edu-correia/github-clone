import { GetStaticPaths, GetStaticProps } from 'next';
import api from '../../utils/api';

export const getStaticProps: GetStaticProps = async context => {
    const username = context.params.username;

    api.get(`/users/${username}`)
        .then(res => {
            console.log(res.data);

            const formatedData = {
                login: res.data.login,
                name: res.data.name,
                avatar: res.data.avatar_url,

            }
        })

    return {
        props: {
            a: 1
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {username: 'eduardo-ehsc'}},
            {params: {username: 'edu'}}
        ],
        fallback: false
    }
}

export default function Username(props){
    return <h1>Username {props.a}</h1>
}