import React from 'react'
import { FcMenu } from "react-icons/fc";
import { CiLock } from "react-icons/ci";

const Addsource = () => {
  return (
    <div style={{ marginTop: '-12px' }} className="container pt-4">
      <p style={{fontSize: '18px'}}>Settings . Referral Sources</p>
      <div className="row">
        <h3 className="col fw-bold fs-3">Referral Sources</h3>
        <div className="col">
          <button style={{fontSize: '15px'}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark float-end py-3 px-4">
            Add new source
          </button>

          {/* Modal-1 */}
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div style={{ marginTop: '150px' }} className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">New referral source</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                      <input type="text" placeholder='e.g. Local promotion' className="form-control" id="recipient-name" />
                    </div>
                  </form>
                  <div className="form-check form-switch">
                    <input style={{backgroundColor: 'green'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                    <label className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary px-4 py-2" data-bs-dismiss="modal">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal-2 */}
      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex mt-1">
            <FcMenu size={22} />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-2" className="h6 px-4">Walk-in</p>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal-2" tabIndex="-1" aria-labelledby="exampleModalLabel-2" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-2">Edit referral source</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Walk-in' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                    <div className="form-check form-switch">
                      <input style={{backgroundColor: 'green'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                      <label className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex ms-auto">
            <p style={{ backgroundColor: 'lightgreen', color: 'green' }} className="px-2">ACTIVE</p>
          </div>
          <div>
            <CiLock style={{ marginTop: '-9px' }} size={38} className="px-2" />
          </div>
        </div>
      </div>

      {/* Modal-3 */}
      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex">
            <FcMenu size={22} className='mt-1' />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-3" className="h6 px-4 mt-1">Instagram</p>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal-3" tabIndex="-1" aria-labelledby="exampleModalLabel-3" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-3">Edit referral source</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Instagram' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                    <div className="form-check form-switch">
                      <input style={{backgroundColor: 'green'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                      <label className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex ms-auto">
            <p style={{ backgroundColor: 'lightgreen', color: 'green' }} className="px-2">ACTIVE</p>
          </div>
          <div>
            <CiLock style={{ marginTop: '-9px' }} size={38} className="px-2" />
          </div>
        </div>
      </div>

      {/* Modal-4 */}
      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex">
            <FcMenu size={22} className='mt-1' />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-4" className="h6 px-4 mt-1">Imported</p>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal-4" tabIndex="-1" aria-labelledby="exampleModalLabel-4" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-4">Edit referral source</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Imported' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                    <div className="form-check form-switch">
                      <input style={{backgroundColor: 'green'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                      <label className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex ms-auto mt-1">
            <p style={{ backgroundColor: 'lightgreen', color: 'green' }} className="px-2">ACTIVE</p>
          </div>
          <div>
            <CiLock style={{ marginTop: '-6px' }} size={38} className="px-2" />
          </div>
        </div>
      </div>

      {/* Modal-5 */}
      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex">
            <FcMenu size={22} className='mt-1' />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-5" className="h6 px-4 mt-1">Outlet</p>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal-5" tabIndex="-1" aria-labelledby="exampleModalLabel-5" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-5">Edit referral source</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Outlet' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                    <div className="form-check form-switch">
                      <input style={{backgroundColor: 'green'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                      <label className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex ms-auto mt-1">
            <p style={{ backgroundColor: 'lightgreen', color: 'green' }} className="px-2">ACTIVE</p>
          </div>
          <div>
            <CiLock style={{ marginTop: '-6px' }} size={38} className="px-2" />
          </div>
        </div>
      </div>

      {/* Modal-6 */}
      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex">
            <FcMenu size={22} className='mt-1' />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-6" className="h6 px-4 mt-1">Facebook</p>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal-6" tabIndex="-1" aria-labelledby="exampleModalLabel-6" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-6">Edit referral source</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Facebook' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                    <div className="form-check form-switch">
                      <input style={{backgroundColor: 'green'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                      <label className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex ms-auto mt-1">
            <p style={{ backgroundColor: 'lightgreen', color: 'green' }} className="px-2">ACTIVE</p>
          </div>
          <div>
            <CiLock style={{ marginTop: '-5px' }} size={38} className="px-2" />
          </div>
        </div>
      </div>

      {/* Modal-7 */}
      <div style={{height: '60px'}} className="card mt-4">
        <div className="card-body d-flex">
          <div className="d-flex">
            <FcMenu size={22} className='mt-1' />
            <p style={{ cursor: 'default' }} data-bs-toggle="modal" data-bs-target="#exampleModal-7" className="h6 px-4 mt-1">Book Now Link</p>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal-7" tabIndex="-1" aria-labelledby="exampleModalLabel-7" aria-hidden="true">
              <div style={{ marginTop: '150px' }} className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel-7">Edit referral source</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label fw-semibold">Name</label>
                        <input type="text" placeholder='Book Now Link' className="form-control" id="recipient-name" />
                      </div>
                    </form>
                    <div className="form-check form-switch">
                      <input style={{backgroundColor: 'green'}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                      <label className="form-check-label fw-semibold" htmlFor="flexSwitchCheckChecked">Active</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex ms-auto mt-1">
            <p style={{ backgroundColor: 'lightgreen', color: 'green' }} className="px-2">ACTIVE</p>
          </div>
          <div>
            <CiLock style={{ marginTop: '-4px' }} size={38} className="px-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addsource