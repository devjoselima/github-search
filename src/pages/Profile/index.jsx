import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Card from "../../components/Card";

import "./style.css";

const Profile = () => {
  const { user } = useParams();
  const [listUser, setListUser] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const data = async () => {
      await axios
        .get(`https://api.github.com/users/${user}`)
        .then(async (response) => {
          console.log(response);
          setListUser(response.data);

          await axios
            .get(`https://api.github.com/users/${user}/repos`)
            .then((res) => {
              console.log(res.data);
              setRepos(res.data);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    };
    data();
  }, []);

  return (
    <>
      <div className="profile-info">
        <img src={listUser.avatar_url} alt="imagem de perfil" />

        <div className="user">
          <div className="details-user">
            <div className="follow-details">
              <p>{listUser.followers}</p>
              <p>Seguidores</p>
            </div>

            <div className="follow-details">
              <p>{listUser.following}</p>
              <p>Seguindo</p>
            </div>

            <div className="follow-details">
              <p>{listUser.public_repos}</p>
              <p>Respositorios</p>
            </div>
          </div>

          <div className="username-details">
            <h3>{listUser.name}</h3>
            <p>{listUser.bio}</p>
          </div>
        </div>
      </div>

      <div>
        {repos &&
          repos.map((repo) => {
            return (
              <>
                <Card
                  username={repo.full_name}
                  description={repo.description}
                  image={listUser.avatar_url}
                  route={repo.html_url}
                />
              </>
            );
          })}
        <Card />
      </div>
    </>
  );
};

export default Profile;
