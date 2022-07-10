//import React from 'react'
import React, { useEffect, useState } from 'react' //pegar os atributos da base de dado
import axios from 'axios'; //chamar api
import './App.css';

function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    //chamar nossa url da api
    axios.get("https://api-adcm.herokuapp.com/list_post")
    .then((response) => {
      setPosts(response.data.posts)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return(
      <div className="loading">
          <div class="loadingio-spinner-cube-v2w5yhkq1o"><div class="ldio-naaw3dy4zo">
          <div></div><div></div><div></div><div></div>
          </div></div>
      </div>
    )
  }

	return(
		<div className="app">

			<div className="cards">

        {posts.map((post, key) => {
          return (
              <div className="card" key={key}>
              <div className="card-body" >
                <h1>{post.title}</h1>
                <div className="line"></div>
                <h2>{post.content}</h2>
              </div>
            </div>
          )
        })}
			
			</div>

		</div>
	)

}

export default App;