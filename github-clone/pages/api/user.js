// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/'
})

export default async (req, res) => {
  const {username} = req.query;
  
  //Basic user data request
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

  //Stars count request
  const starsResponse = await api.get(`/users/${username}/starred`);
  const stars_count = starsResponse.data.length;

  // Pinned repositories request
  const reposResponse = await api.get(`/users/${username}/repos`);
  let pinnedRepos = [];
  for(let i = 0; i < 6; i++){
    const { name, description, language, stargazers_count } = reposResponse.data[i];
    const newObj = {
      name, 
      description, 
      language, 
      stargazers_count
    }

    pinnedRepos.push(newObj);
  }

  //Response return
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
      pinnedRepos,
  });
}
