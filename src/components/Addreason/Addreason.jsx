import React from "react";
import { FcMenu } from "react-icons/fc";
import { CiLock } from "react-icons/ci";

const Addreason = () => {
  return (
    <div style={{ marginTop: '50px', padding: '50px' }} className="container">
      <p style={{cursor: 'default'}} className="fs-5">Settings . Cancellation Reasons</p>
      <div className="row">
        <h3 style={{cursor: 'default'}} className="col fw-bold fs-3">Cancellation Reasons</h3>
        <div className="col">
          <button style={{fontSize: '14px'}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark float-end py-3 px-4">
            Add new reason
          </button>

          {/* Modal-1 */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div style={{ marginTop: '150px' }} className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">New cancellation reason</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                      <input type="text" placeholder='e.g. Local promotion' className="form-control" id="recipient-name" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary px-4 py-2" data-bs-dismiss="modal">Save</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex mt-1">
            <FcMenu size={22} />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-2" className="h6 px-4">Duplicate appointment</p>

            {/* Modal-2 */}
            <div className="modal fade" id="exampleModal-2" tabIndex="-1" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-2">Edit cancellation reason</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Duplicate appointment' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger px-4 py-2" data-bs-dismiss="modal">Delete</button>
                    <button type="button" className="btn btn-secondary px-4 py-2" data-bs-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex mt-1">
            <FcMenu size={22} />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-3" className="h6 px-4">Appointment made by mistake</p>


            {/* Modal-3 */}
            <div className="modal fade" id="exampleModal-3" tabIndex="-1" aria-labelledby="exampleModalLabel-3" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-3">Edit cancellation reason</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Appointment made by mistake' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger px-4 py-2" data-bs-dismiss="modal">Delete</button>
                    <button type="button" className="btn btn-secondary px-4 py-2" data-bs-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="d-flex ms-auto">
            <CiLock style={{ marginTop: "-9px" }} size={40} className="px-2" />
          </div>
        </div>
      </div>

      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex mt-1">
            <FcMenu size={22} />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-4" className="h6 px-4">Client not available</p>

            {/* Modal-4 */}
            <div className="modal fade" id="exampleModal-4" tabIndex="-1" aria-labelledby="exampleModalLabel-4" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-4">Edit cancellation reason</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Client not available' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger px-4 py-2" data-bs-dismiss="modal">Delete</button>
                    <button type="button" className="btn btn-secondary px-4 py-2" data-bs-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Addreason;
