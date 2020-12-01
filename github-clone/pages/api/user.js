// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/'
})

export default async (req, res) => {
  const {username} = req.query;
  
  const userResponse = await api.get(`/users/${username}`);
  
  const {
    login,
    avatar_url,
    name,
    blog,
    location,
    bio,
    twitter_username,
    public_repos,
    followers,
    following,
  } = userResponse.data;

  const starsResponse = await api.get(`/users/${username}/starred`);

  const stars_count = starsResponse.data.length;

  return res.json({
      avatar_url,
      name,
      login,
      bio,
      followers,
      following,
      location,
      blog,
      twitter_username,
      public_repos,
      stars_count,
  });
}
