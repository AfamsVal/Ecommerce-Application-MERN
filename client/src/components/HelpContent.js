import React from "react"

const HelpContent = () => {
  return (
    <section>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>list with checkmarks</h2>
          <ul className="list-display list-checkmarks text-justify">
            <li>Lorem ipsum dolor sit amet</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eligendi, ipsa? Asperiores nobis, aliquid repellat earum soluta
              expedita voluptate sapiente nam vel.{" "}
            </li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eligendi, ipsa? Asperiores nobis, aliquid repellat earum soluta
              expedita voluptate sapiente nam vel.{" "}
            </li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>list with more white space</h2>
          <ul className="list-display text-justify">
            <li>Lorem ipsum dolor sit amet</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eligendi, ipsa? Asperiores nobis, aliquid repellat earum soluta
              expedita voluptate sapiente nam vel.{" "}
            </li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eligendi, ipsa? Asperiores nobis, aliquid repellat earum soluta
              expedita voluptate sapiente nam vel.{" "}
            </li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
    </section>
  )
}

export default HelpContent
