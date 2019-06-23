import React from 'react'

import { Container, Title, List, Playlist } from './styles'

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c5/Linkin_Park_Hunting_Party.jpg/220px-Linkin_Park_Hunting_Party.jpg"
          alt="Playlist"
        />
        <strong>Podcast de Tecnologia</strong>
        <p>Aprenda um pouco sobre o mundo da tecnologia</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c5/Linkin_Park_Hunting_Party.jpg/220px-Linkin_Park_Hunting_Party.jpg"
          alt="Playlist"
        />
        <strong>Podcast de Tecnologia</strong>
        <p>Aprenda um pouco sobre o mundo da tecnologia</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c5/Linkin_Park_Hunting_Party.jpg/220px-Linkin_Park_Hunting_Party.jpg"
          alt="Playlist"
        />
        <strong>Podcast de Tecnologia</strong>
        <p>Aprenda um pouco sobre o mundo da tecnologia</p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c5/Linkin_Park_Hunting_Party.jpg/220px-Linkin_Park_Hunting_Party.jpg"
          alt="Playlist"
        />
        <strong>Podcast de Tecnologia</strong>
        <p>Aprenda um pouco sobre o mundo da tecnologia</p>
      </Playlist>
    </List>
  </Container>
)

export default Browse
