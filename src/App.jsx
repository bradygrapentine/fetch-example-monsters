import React, { Component } from 'react'
import axios from 'axios'

export class App extends Component {
  state = {
    results: [],
  }

  // fetchData = async () => {
  //   const response = await fetch('http://www.dnd5eapi.co/api/monsters')
  //   const data = await response.json()
  //   this.setState({ results: data.results })
  //   console.log(data)
  //   console.log(this.state.results)
  // }

  fetchData = async () => {
    await axios.get('http://www.dnd5eapi.co/api/monsters').then(response => {
      this.setState({ results: response.data.results })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <>
        <h1>Hello, Fetch</h1>
        <div>
          <ul>
            {this.state.results.map(monster => {
              return (
                <li key={monster.index}>
                  <a href={`http://www.dnd5eapi.co${monster.url}`}>
                    {monster.name}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}
