import React,{
    useState
} from "react";
import "bootstrap/dist/css/bootstrap.css";

function Calculator() {

    const [num1, setNum1] = useState("");

  const handleClick = (value) => {
    const inputField = document.getElementById("inputField");
    inputField.value += value; 
  };

  const handleClear = () => {
    document.getElementById("inputField").value = ""; 
    document.getElementById("resultField").innerText = "";
  };

  const handleCalculate = () => {
    const inputField = document.getElementById("inputField");
    const resultField = document.getElementById("resultField");

    try {
      const result = eval(inputField.value);
      resultField.innerText = result; 
    } catch (error) {
      resultField.innerText = "Error"; 
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center mb-4">Calculator</h3>
              <input
                type="text"
                id="inputField"
                className="form-control text-end mb-2"
                readOnly
                style={{ height: "50px", fontSize: "24px" }}
              />
              <div className="text-end mb-2" id="resultField" style={{ fontSize: "18px" }}>
                <strong></strong>
              </div>

              <div className="btn-group d-grid gap-2">
                <div className="row">
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("7")}>
                      7
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("8")}>
                      8
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("9")}>
                      9
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-warning" onClick={() => handleClick("/")}>
                      ÷
                    </button>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("4")}>
                      4
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("5")}>
                      5
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("6")}>
                      6
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-warning" onClick={() => handleClick("*")}>
                      ×
                    </button>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("1")}>
                      1
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("2")}>
                      2
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("3")}>
                      3
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-warning" onClick={() => handleClick("-")}>
                      -
                    </button>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick("0")}>
                      0
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-light" onClick={() => handleClick(".")}>
                      .
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-danger" onClick={handleClear}>
                      C
                    </button>
                  </div>
                  <div className="col-3">
                    <button className="btn btn-warning" onClick={() => handleClick("+")}>
                      +
                    </button>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-12">
                    <button className="btn btn-success w-100" onClick={handleCalculate}>
                      =
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
