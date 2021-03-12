import React from "react"

const HelpContent = () => {
  return (
    <section className="my-5">
       <div className="row">
    <div className="col-md-9 mx-auto">

      <div id="accordionExample" className="accordion shadow">

        <div className="card">
          <div id="headingOne" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="d-block position-relative text-dark text-uppercase collapsible-link py-2">Collapsible Group Item #1</a></h6>
          </div>
          <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" className="collapse show">
            <div className="card-body p-5">
              <p className="font-weight-light m-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div id="headingTwo" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">Collapsible Group Item #2</a></h6>
          </div>
          <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" className="collapse">
            <div className="card-body p-5">
              <p className="font-weight-light m-0 text-justify">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div id="headingThree" className="card-header bg-white shadow-sm border-0">
            <h6 className="mb-0 font-weight-bold"><a href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" className="d-block position-relative collapsed text-dark text-uppercase collapsible-link py-2">Collapsible Group Item #3</a></h6>
          </div>
          <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" className="collapse">
            <div className="card-body p-5">
              <p className="font-weight-light m-0">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
	</div>
    </section>
  )
}

export default HelpContent
