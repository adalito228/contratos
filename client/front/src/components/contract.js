class Contract extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .api-title{
          color: hsl(0, 0%, 100%);
          font-size: 1.5rem; 
          display: flex;
          flex-direction: column;
          gap:2rem; 
          justify-content: center;
          align-items: center;  
          height: 100vh;
        }

        .api-title h1{
          font-family: "Ubuntu", sans-serif;
          margin: 0; 
            
        }
        .api-title a{
          color: hsl(0, 0%, 100%);;
          background-color: hsl(0, 0%, 0%);; 
          padding: 1rem;
          border-radius: 2rem;
          font-family: "Ubuntu", sans-serif;
          font-size: 1rem;
          margin: 0; 
          text-decoration: none;  
        }
        .api-title a:hover{
          color:green;
        }

        .api-title img{
          max-width: 30%; 
          height: auto; 

        }
      </style>

      <div class="api-title">
        <h1>${this.title}</h1> 
      </div>
      `

    const button = document.createElement('button')
    button.textContent = 'Get Data'
    button.dataset.id = 'data-btn'

    const apiTitle = this.shadowRoot.querySelector('.api-title')
    apiTitle.appendChild(button)

    button.addEventListener('click', async () => {
      const data = await this.getApiData()

      if (data) {
        const dataToJson = await data.json()

        await this.sendDataToServer({ DataFormated: dataToJson })
      }
    })
  }

  async getApiData () {
    let response = null
    try {
      response = await fetch('https://catalegdades.caib.cat/resource/anss-9wx4.json')
      if (!response.ok) {
        console.log(`Error: ${response.status}`)
      }
    } catch (error) {
      console.error('Error al enviar los datos al servidor', error.message)
    }
    return response
  }

  async sendDataToServer ({ DataFormated }) {
    let responseServer = null
    try {
      responseServer = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/contracts`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(DataFormated)
      })
    } catch (error) {
      console.error('Error al enviar los datos al servidor', error.message)
    }
    console.log(responseServer)
    return responseServer
  }
}

customElements.define('contract-component', Contract)
