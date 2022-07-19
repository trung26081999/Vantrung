import React from "react"
import "./Footer.css"

function Footer() {
    return (
        <React.Fragment>
            <footer className="bg-black text-center py-5">
          <div className="container px-5">
            <div className="text-white-50 small">
              <div className="mb-2">
                © Your Website 2021. All Rights Reserved.
              </div>
              <a href="/!">Privacy</a>
              <span className="mx-1">·</span>
              <a href="/!">Terms</a>
              <span className="mx-1">·</span>
              <a href="/!">FAQ</a>
            </div>
          </div>
        </footer>
        </React.Fragment>
    )
}

export default Footer