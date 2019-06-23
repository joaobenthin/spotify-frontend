import React from 'react'

import { Container, Header, SongList } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/c5/Linkin_Park_Hunting_Party.jpg/220px-Linkin_Park_Hunting_Party.jpg"
        alt="Linkin Park"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Podcast Tech</h1>
        <p>70 podcasts</p>

        <button>PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>JavaScript</td>
          <td>DevNaEstrada</td>
          <td>Ramon</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>JavaScript</td>
          <td>DevNaEstrada</td>
          <td>Ramon</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>JavaScript</td>
          <td>DevNaEstrada</td>
          <td>Ramon</td>
          <td>3:26</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>JavaScript</td>
          <td>DevNaEstrada</td>
          <td>Ramon</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
)

export default Playlist
