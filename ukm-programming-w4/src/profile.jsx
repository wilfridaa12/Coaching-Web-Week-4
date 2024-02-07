import React from "react";

function Profile() {
  const myIdentity = {
    name: "Wilfrida Sisilia",
    npm: "2327250005",
    prodi: "Informatika",
    fakultas: "Ilmu Komputer dan Rekayasa",
    github: "My Github",
    githubLink: "https://github.com/wilfridaa12",
  };

  return (
    <div>
      <h1>My Profile</h1>
      <ul>
        <li>Nama: {myIdentity.name}</li>
        <li>NPM: {myIdentity.npm}</li>
        <li>Prodi: {myIdentity.prodi}</li>
        <li>Fakultas: {myIdentity.fakultas}</li>
        <li>
          Github:{" "}
          <a
            href={myIdentity.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {myIdentity.github}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
