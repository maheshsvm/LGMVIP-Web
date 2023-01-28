import React from "react"
const Header = () => {
    const detail = async () => {
        let details = fetch("https://www.canva.com/link?target=https%3A%2F%2Freqres.in%2Fapi%2Fusers%3Fpage%3D1&design=DAEhLWUJEDM&accessRole=viewer&linkSource=document");
        let a = await details;
        let result = await a.json();
        return result;
    }
    const getDetails = async () => {
        let info = await detail();
        console.log(info);
        let infoelement = document.createElement("div");
        infoelement.className = 'container';
        for (infoitem of info.data) {
            infoelement.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${infoitem.avatar}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${infoelement.first_name + " " + infoelement.last_name}</h5>
              <p class="card-text">${infoelement.email}</p>
            </div>
          </div>`
        }
        let root = document.getElementById('root');
        root.appendChild(infoelement);
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid container">
                    <a className="navbar-brand">Credentials</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex" role="search" onSubmit={getDetails}>

                            <button className="btn btn-outline-danger" type="submit">Get Data</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header